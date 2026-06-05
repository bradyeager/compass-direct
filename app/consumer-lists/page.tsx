import { ProductPage } from "@/components/ProductPage";
import { productBySlug } from "@/lib/site-data";

export const metadata = { title: "Consumer Lists — Compass Direct" };

export default function Page() {
  return <ProductPage data={productBySlug["consumer-lists"]} />;
}
