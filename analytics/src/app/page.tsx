'use client'
import { use } from 'react';
import Image from "next/image";

const fetchCodeUrl = async () => await fetch(`https://server-guilhermepereiradossantos41-outlookcoms-projects.vercel.app/mercado-livre/auth`, {
  mode: 'no-cors',
  method: "GET"
});

export default function Wellcome() {
  const data = use(fetchCodeUrl());

  console.log(data);
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Bem Vindo ao Gui-Analytics</h1>
      <p className="text-lg text-gray-600 mb-8">Estou muito feliz por você visitar meu site!</p>

      <div className="relative w-48 h-48">
        <Image
          src="/mercadolivre.png"
          alt="Welcome Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

    </div>
  );
}
