import { notFound } from "next/navigation";
import { productData } from "@/data/products-services-data";
import ProductDetailLayout from "@/components/product-detail-layout";

interface ProductPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return Object.keys(productData).map((slug) => ({
        slug,
    }));
}

export default function ProductPage({ params }: ProductPageProps) {
    const product = productData[params.slug];

    if (!product) {
        notFound();
    }

    return <ProductDetailLayout product={product} type="product" />;
}

export async function generateMetadata({ params }: ProductPageProps) {
    const product = productData[params.slug];

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
