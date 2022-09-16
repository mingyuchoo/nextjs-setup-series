import { NextApiRequest, NextApiResponse } from 'next';

import { sampleUserData } from '@/utils/sample-data';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!Array.isArray(await sampleUserData)) {
      throw new Error('Cannot find user data');
    }
    res.status(200).json(await sampleUserData);
  } catch (err: unknown) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
