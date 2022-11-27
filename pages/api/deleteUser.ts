import { prisma } from './prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;
  try {
    const data = await prisma.nc_users.delete({
      where: {
        id,
      },
    });
    res.status(200).json(data);
  } catch (error: any) {
    console.error(`Błąd usuwania komentarza: ${error.message}`);
  }
};

export default handler;
