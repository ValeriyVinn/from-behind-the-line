import { redirect } from "next/navigation";

export default function Page() {
  // Редірект на англійську як дефолт
  redirect("/en");
}
