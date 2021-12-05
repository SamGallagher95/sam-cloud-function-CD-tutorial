import { Request, Response } from 'express';

// Main entrypoint
export const main = async (req: Request, res: Response): Promise<void> => {
  console.log(req);

  res.send('Hello from my main function.');
};
