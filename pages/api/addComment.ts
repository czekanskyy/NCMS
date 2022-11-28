import { prisma } from './prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { post, author, content } = req.body;

  try {
    await prisma.nc_comments.create({
      data: {
        author: author || 'Anonim',
        content,
        post: {
          connect: {
            id: post,
          },
        },
      },
    });
    res.status(200).json(true);
  } catch (error: any) {
    console.error(`Błąd dodawania komentarza: ${error.message}`);
  }
};

export default handler;
