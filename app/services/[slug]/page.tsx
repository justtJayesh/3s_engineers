import { notFound } from "next/navigation";
import { serviceData } from "@/data/products-services-data";
import ProductDetailLayout from "@/components/product-detail-layout";

interface ServicePageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return Object.keys(serviceData).map((slug) => ({
        slug,
    }));
}

export default function ServicePage({ params }: ServicePageProps) {
    const service = serviceData[params.slug];

    if (!service) {
        notFound();
    }

    return <ProductDetailLayout product={service} type="service" />;
}

export async function generateMetadata({ params }: ServicePageProps) {
    const service = serviceData[params.slug];

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
