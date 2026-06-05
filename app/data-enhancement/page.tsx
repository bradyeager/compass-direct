import { ProductPage } from "@/components/ProductPage";
import { productBySlug } from "@/lib/site-data";

export const metadata = { title: "Data Enhancement — Compass Direct" };

export default function Page() {
  return <ProductPage data={productBySlug["data-enhancement"]} />;
}
