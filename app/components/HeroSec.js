"use client"
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
]

const HeroSec = () => {
  const [color, setColor]= useState(null);
  useEffect(()=>{
    setColor(shuffle(colors).pop())
  },[])
  return (
    <section className= {`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}>
      <h1>hello</h1>
    </section>
  );
}

export default HeroSec;
