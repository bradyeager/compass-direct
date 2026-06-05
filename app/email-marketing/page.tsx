import { ProductPage } from "@/components/ProductPage";
import { productBySlug } from "@/lib/site-data";

export const metadata = { title: "Email Marketing — Compass Direct" };

export default function Page() {
  return <ProductPage data={productBySlug["email-marketing"]} />;
}
