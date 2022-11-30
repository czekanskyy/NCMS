import { prisma } from '@/api/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

interface Props {
  title: string;
  content: string;
  authorId: string;
  thumbnail: string;
  tags: string[];
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, content, authorId, thumbnail, tags }: Props = req.body;

  try {
    if (content === '') throw new Error('Nie podano treści');

    const data = await prisma.nc_posts.create({
      data: {
        title,
        content,
        author: {
          connect: {
            id: authorId,
          },
        },
        thumbnail,
        tags: {
          connectOrCreate: tags.map(tag => ({
            create: {
              name: tag,
            },
            where: {
              name: tag,
            },
          })),
        },
      },
    });
    res.status(200).json(data);
  } catch (error: any) {
    console.error(`Błąd dodawania posta: ${error.message}`);
  }
};

export default handler;
