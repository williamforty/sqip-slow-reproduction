// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Buffer>
) {
  const filePath = path.resolve('.', 'apple.jpg')
  const imageBuffer = fs.readFileSync(filePath)

  res.setHeader('Content-Type', 'image/jpg')
  res.send(imageBuffer)
}
