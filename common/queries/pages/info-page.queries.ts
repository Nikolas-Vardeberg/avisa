import { groq } from "next-sanity";
import { IMAGE_QUERY } from "../image.queries";
import { RICH_TEXT_QUERY } from "../rich-text.queries";

const RAW_INFOPAGE_QUERY = groq`{
    _id,
    _type,
    mainImage ${IMAGE_QUERY},
    entry[]${RICH_TEXT_QUERY},
    content[]${RICH_TEXT_QUERY},
    "slug": slug.current,
    title,
}`;

export const INFOPAGE_QUERY = groq`*[_type == "infoPage" && slug.current == $slug][0] ${RAW_INFOPAGE_QUERY}`;