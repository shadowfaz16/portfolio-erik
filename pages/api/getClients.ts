import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Client } from "../../typings";

const query = groq`
    *[_type == "client"]
`

type Data = {
    clients: Client[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const clients: Client[] = await sanityClient.fetch(query);

  res.status(200).json({ clients })
}
