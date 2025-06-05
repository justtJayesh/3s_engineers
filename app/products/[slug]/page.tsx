import { notFound } from "next/navigation";
import { productData } from "@/data/products-services-data";
import ProductDetailLayout from "@/components/product-detail-layout";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return Object.keys(productData).map((slug) => ({
        slug,
    }));
}

export default async function ProductPage({ params }: { params: Params }) {
    const { slug } = await params;
    const product = productData[slug];

    if (!product) {
        notFound();
    }

    return <ProductDetailLayout product={product} type="product" />;
}

export async function generateMetadata({
    params,
}: {
    params: Params;
}): Promise<Metadata> {
    const { slug } = await params;
    const product = productData[slug];

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    return {
        title: `${product.name} - SteelCorp Products`,
        description: product.description,
    };
}
