import { PageInfo } from "../typings";
import { sanityClient } from "../sanity";
import { groq } from "next-sanity";



export const fetchPageInfo = async() => {

    const query = groq`
    *[_type == "pageInfo"][0]
`
    const res = await sanityClient.fetch(query)
    const pageInfo: PageInfo = res;


    
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

    // const data = await res.json()
    // const pageInfo: PageInfo = data.pageInfo;
    
    console.log("fetching", pageInfo);

    return pageInfo;
}