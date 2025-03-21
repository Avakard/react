import type { Route } from "./+types/home";
import { useLoaderData } from "react-router-dom";
import "../styles/about.css"
import Ksenia from "../assets/1.jpg"
import Viktor from "../assets/2.jpg"
import Andrey from "../assets/3.jpg"
import Artem from "../assets/4.jpg"
import Vyacheslav from "../assets/5.jpg"
import Leonid from "../assets/6.jpg"
import Anastasiya from "../assets/7.jpg"
import Egor from "../assets/8.jpg"

type AboutData ={
    title: string;
    description: string;
    team: {name: string; role: string; image: string}[];
    reviewers: {name: string; com: string; image: string}[];
}

/*type AboutData2 ={
    title: string;
    description: string;
    team: {name: string; com: string; image: string}[];
}*/

export function loader(): AboutData {
    return {
        title: "О нас!",
        description: "Информация о нас!",
        team: [
            {name: "Ксения", role:"Frontend", image: Ksenia},
            {name: "Виктор", role:"Системный архитектор", image: Viktor},
            {name: "Андрей", role:"Инженер", image: Andrey},
            {name: "Артем", role:"Инженер", image: Artem},
            {name: "Вячеслав", role:"Инженер 1 категории", image: Vyacheslav},
            {name: "Леонид", role:"FullStack", image: Leonid},
            {name: "Анастасия", role:"Преподаватель", image: Anastasiya},
            {name: "Егор", role:"FullStack", image: Egor},
        ],
        reviewers: [
            {name: "Ксения1", com:"Frontend2", image: Ksenia},
            {name: "Виктор1", com:"Системный архитектор2", image: Viktor},
            {name: "Андрей1", com:"Инженер2", image: Andrey},
            {name: "Артем1", com:"Инженер2", image: Artem},
            {name: "Вячеслав1", com:"Инженер 1 категории", image: Vyacheslav},
            {name: "Леонид1", com:"FullStack", image: Leonid},
            {name: "Анастасия1", com:"Преподаватель", image: Anastasiya},
            {name: "Егор1", com:"FullStack", image: Egor},
        ]
    }    
}

/*export function loader2(): AboutData2 {
    return {
        title: "Отзывы",
        description: "Отзывы!",
        team: [
            {name: "Ксения1", com:"Frontend2", image: Ksenia},
            {name: "Виктор1", com:"Системный архитектор2", image: Viktor},
            {name: "Андрей1", com:"Инженер2", image: Andrey},
            {name: "Артем1", com:"Инженер2", image: Artem},
            {name: "Вячеслав1", com:"Инженер 1 категории", image: Vyacheslav},
            {name: "Леонид1", com:"FullStack", image: Leonid},
            {name: "Анастасия1", com:"Преподаватель", image: Anastasiya},
            {name: "Егор1", com:"FullStack", image: Egor},
        ]
    }    
}*/

export function meta({}: Route.MetaArgs) {
  return [
    { title: "О нас!" },
    { name: "description", content: "Информация о нас!" },
  ];
}

export default function About() {
  const data = useLoaderData() as AboutData;
 // const data2 = useLoaderData() as AboutData2;
    return (
    <section className="min-h-screen flex flex-col items-center justify-center">
        {/* Здесь заголовок */}
        <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {data.title}
                </h1>
        </div>
       
        <p className="text-lg font-bold text-gray-600 dark:text-gray-300">
            {data.description}
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Наша команда
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4">
            {data.team.map((member, index) => (
                <li style={ { animationDelay: `${index * 0.2}s`}} key={index} className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow animation-fade-in">
                    <img 
                    src={`${member.image}`}
                    className="w-24 h-24 rounded-full mb-4 object-cover shadow-md border-2 border-gray-300 dark:border-gray-600"
                    alt={`${member.name}`}
                    />                               
                    <strong className="text-lg font-medium text-gray-900 dark:text-white">
                        {member.name}
                    </strong> 
                    <span className="text-gray-700 dark:text-gray-300">
                        {member.role}
                        </span>
                </li>
            ))}
        </ul>

       {/* отзывы */}

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Отзывы
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4">
            {data.reviewers.map((member2, index) => (
                <li style={ { animationDelay: `${index * 0.2}s`}} key={index} className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow animation-fade-in">
                    <img 
                    src={`${member2.image}`}
                    className="w-24 h-24 rounded-full mb-4 object-cover shadow-md border-2 border-gray-300 dark:border-gray-600"
                    alt={`${member2.name}`}
                    />                               
                    <strong className="text-lg font-medium text-gray-900 dark:text-white">
                        {member2.name}
                    </strong> 
                    <span className="text-gray-700 dark:text-gray-300">
                        {member2.com}
                        </span>
                </li>
            ))}
        </ul> 
    </section>

    
    )
}