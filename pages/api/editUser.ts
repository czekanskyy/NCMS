import { prisma } from './prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, fullName, phone, picture, bio } = req.body;
  try {
    const data = await prisma.nc_users.update({
      data: {
        fullName,
        bio,
        phone,
        picture,
      },
      where: {
        id,
      },
    });
    res.status(200).json(data);
  } catch (error: any) {
    console.error(`Błąd zmiany konfiguracji: ${error.message}`);
  }
};

export default handler;
