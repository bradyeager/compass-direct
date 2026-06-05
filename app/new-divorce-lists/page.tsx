import { ProductPage } from "@/components/ProductPage";
import { productBySlug } from "@/lib/site-data";

export const metadata = { title: "New Divorce Lists — Compass Direct" };

export default function Page() {
  return <ProductPage data={productBySlug["new-divorce-lists"]} />;
}
