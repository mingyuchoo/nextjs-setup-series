import { User } from '@/types/user';

export const sampleUserData = new Promise<Array<User>>((resolve) =>
  setTimeout(
    () =>
      resolve([
        { id: 101, name: 'Alice' },
        { id: 102, name: 'Bob' },
        { id: 103, name: 'Caroline' },
        { id: 104, name: 'Dave' },
      ]),
    1500
  )
);
