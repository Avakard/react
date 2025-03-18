import type { Route } from "./+types/home";

interface 

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Контакты!" },
    { name: "description", content: "Контакты!" },
  ];
}

export default function Home() {
  return <h1>Контакты!</h1>;
}