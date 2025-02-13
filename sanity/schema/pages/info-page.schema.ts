import { defineType } from "sanity";
import { image } from "../objects/image.schema";

export const infoPage = defineType({
    name: "infoPage",
    type: "document",
    groups: [
        {
            name: "general",
            title: "Generelt"
        },
        {
            name: "seo",
            title: "SEO"
        }
    ],
    fields: [
        {
            name: "title",
            type: "string",
            title: "Tittel på side"
        },
        {
            type: 'slug',
            name: 'slug',
            title: 'Slug',
            description: 'Brukes som unik identifikator i url. Kan kun inneholde bokstaver, tall, understrek og bindestrek.',
            options: {
                source: "title",
                maxLength: 155,
            }
        },
        image({
            name: "mainImage",
            group: "general"
        }),
        {
            title: "Ingress",
            name: "entry",
            type: "simpleRichText",
            group: "general",
        },
        {   
            name: "content",
            type: "richText",
            group: "general",
        },
    ]
})