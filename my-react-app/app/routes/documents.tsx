import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Документы!" },
    { name: "description", content: "Документы!" },
  ];
}

export default function Home() {
  return <h1>Документы!</h1>;
}