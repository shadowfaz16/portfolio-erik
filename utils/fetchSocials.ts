import { Social } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchSocials = async() => {
    const query = groq`
    *[_type == "social"]
`

        const res = await sanityClient.fetch(query)

    const socials: Social[] = res;

    console.log("fetching", socials);

    return socials;
}