import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      try {
        // const service = await axios.get('https://jsonplaceholder.typicode.com/users');
        const service = await axios.get('http://localhost/api/rest/users');
        if (!Array.isArray(service.data.users)) {
          throw new Error('Cannot find user data');
        }
        res.status(200).json(service.data.users);
      } catch (err: any) {
        res.status(500).json({ statusCode: 500, message: err.message });
      }
      break;
    default:
      res.status(405).json({ statusCode: 405, message: 'Method not allowed.' });
  }
};

export default handler;
