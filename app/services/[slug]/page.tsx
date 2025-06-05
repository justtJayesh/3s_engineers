import { notFound } from "next/navigation";
import { serviceData } from "@/data/products-services-data";
import ProductDetailLayout from "@/components/product-detail-layout";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return Object.keys(serviceData).map((slug) => ({
        slug,
    }));
}

export default async function ServicePage({ params }: { params: Params }) {
    const { slug } = await params;
    const service = serviceData[slug];

    if (!service) {
        notFound();
    }

    return <ProductDetailLayout product={service} type="service" />;
}

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const { slug } = await params;
    const service = serviceData[slug];

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.name} - SteelCorp Services`,
        description: service.description,
    };
}
