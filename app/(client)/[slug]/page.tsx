import InfoView from "@/common/components/views/info-view";
import { INFOPAGE_QUERY } from "@/common/queries/pages/info-page.queries";
import { sanityFetch } from "@/sanity/lib/live"
import { QueryParams } from "next-sanity";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{
        slug: string;
    }>
}

const getHook = async({ params }: { params: QueryParams }) => {
    return await sanityFetch({query: INFOPAGE_QUERY, params });
}

export default async function InfoPage(props: Props) {
    const params = await props.params;
    const initial = await getHook({ params });

    if (!initial || !initial.data) return notFound();

    return(
        <InfoView data={initial.data} />
    )
}