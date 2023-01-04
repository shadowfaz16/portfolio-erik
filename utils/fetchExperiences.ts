import { Experience } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchExperiences = async() => {
    const query = groq`
    *[_type == "experience"] {
      ...,
      clients[]->
    }
`
    const res = await sanityClient.fetch(query)
    const experiences: Experience[] = res;


    // const data = await res.json()
    // const experiences: Experience[] = data.experiences;

    console.log("fetching", experiences);

    return experiences;
} 