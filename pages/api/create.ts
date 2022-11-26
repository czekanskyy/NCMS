import { prisma } from './prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { SHA3 } from 'crypto-js';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password, fullName, email, role } = req.body;
  try {
    const user = await prisma.nc_users.create({
      data: {
        username,
        password: SHA3(password).toString(),
        fullName,
        email,
        role,
      },
    });

    res.status(200).json(user);
  } catch (error: any) {
    console.error(`Błąd dodawania użytkownika: ${error.message}`);
  }
};

export default handler;
