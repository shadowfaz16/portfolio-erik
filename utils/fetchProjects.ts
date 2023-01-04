import { Project } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchProjects = async() => {
    const query = groq`
    *[_type == "project"] {
      ...,
      clients[]->
    }
`
        const res = await sanityClient.fetch(query)


    const projects: Project[] = res;

    console.log("fetching", projects);

    return projects;
}