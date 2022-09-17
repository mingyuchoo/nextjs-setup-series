import { NextApiRequest, NextApiResponse } from 'next';

import { sampleUserData } from '@/utils/sample-data';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(await sampleUserData)) {
      throw new Error('Cannot find user data');
    }
    res.status(200).json(await sampleUserData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
