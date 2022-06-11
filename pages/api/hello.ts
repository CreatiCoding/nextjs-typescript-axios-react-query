// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  method: "GET" | "POST";
};

type ErrorData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method === "GET") {
    if (req.query.code === "A") {
      return res.status(500).json({ message: "에러 발생" });
    }
    return res.status(200).json({ name: "John Doe", method: "GET" });
  } else {
    res.status(200).json({ name: "John Doe", method: "POST" });
  }
}
