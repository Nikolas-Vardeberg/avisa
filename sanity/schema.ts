import { type SchemaTypeDefinition } from 'sanity'
import { article } from './schema/pages/article.schema'
import objects from './schema/objects'
import { infoPage } from './schema/pages/info-page.schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    article,
    infoPage,
    ...objects,
  ],
}
