import { NextApiRequest, NextApiResponse } from 'next'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    hello: "World"
  })
}
