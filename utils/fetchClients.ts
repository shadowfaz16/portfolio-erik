import { Client } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchClients = async() => {
    const query = groq`
    *[_type == "client"]
`
    const res = await sanityClient.fetch(query)

    const clients: Client[] = res;

    console.log("fetching", clients);


    return clients;
}