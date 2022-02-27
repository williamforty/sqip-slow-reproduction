// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
const sqip = require("sqip");

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const result = sqip({
    filename: path.resolve('.', 'apple.jpg'),
    numberOfPrimitives: 500,
    mode: 1,
    blur: 0,
  });

  res.setHeader('Content-Type', 'image/svg+xml')
  res.send(result.final_svg)
}
