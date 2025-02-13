import { AvisaImage, BasePage, RichtTextType, SanityContentTypeBase } from "../root.types";

export type InfoPage = BasePage & {
    publishedAt: Date;
    entry: RichtTextType;
    content: RichtTextType;
    mainImage: AvisaImage;
} & SanityContentTypeBase<'infoPage'>;