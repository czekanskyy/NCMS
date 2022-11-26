import { prisma } from './prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, description, keywords, favicon } = req.body;
  try {
    const data = await prisma.nc_site_config.update({
      data: {
        name,
        description,
        keywords,
        favicon,
      },
      where: {
        id: '9309a8e8-6830-46b5-8a0a-8bd6e64a063c',
      },
    });
    res.status(200).json(data);
  } catch (error: any) {
    console.error(`Błąd zmiany konfiguracji: ${error.message}`);
  }
};

export default handler;
