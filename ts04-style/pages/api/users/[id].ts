import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  switch (req.method) {
    case 'GET':
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        // const service = await axios.get(`https://jsonplaceholder.typicode.com/users/${id as string}`);
        const service = await axios.get(`http://localhost/api/rest/users/${id as string}`);
        res.status(200).json(service.data);
      } catch (err: any) {
        res.status(500).json({ statusCode: 500, message: err.message });
      }
      break;
    default:
      res.status(405).json({ statusCode: 405, message: 'Method not allowed.' });
  }
};

export default handler;
