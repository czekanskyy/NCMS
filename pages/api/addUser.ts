import { prisma } from './prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { SHA3 } from 'crypto-js';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, fullName, email, phone, bio, picture, passwordF, passwordR } = req.body;

  try {
    const user = await prisma.nc_users.create({
      data: {
        username,
        fullName,
        email,
        phone,
        bio,
        picture,
        password: SHA3(passwordF).toString(),
        role: 'USER',
      },
    });

    res.status(200).json(user);
  } catch (error: any) {
    console.error(`Błąd dodawania użytkownika: ${error.message}`);
  }
};

export default handler;
