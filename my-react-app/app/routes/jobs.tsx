import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Вакансии" },
    { name: "description", content: "Вакансии" },
  ];
}

export default function Home() {
  return <h1>Вакансии!</h1>;
}