'use client';
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import home from "/public/Untitled-2.png"; 
import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsLoggedIn(false);
    } else {
      try {
        const decodedToken = jwt.decode(token);
        setIsLoggedIn(decodedToken?.userId ? true : false);
      } catch {
        setIsLoggedIn(false);
      }
    }
  }, []);

  return (
    <div className="flex flex-row mx-8 gap-20 justify-center">
      <div className="flex flex-col items-center gap-8">
        <h1 className= "text-center text-6xl font-bold mt-5 text-white">
          Home Sweet Home
        </h1>
        <p className="text-white text-center text-xl italic">
           Tulis cerita, Simpan makna, Tuangkan asa
        </p>
        <Link href={"/notes/create"}>
        <Button
          variant="outline"
          size="lg"
          className="text-lg border-none text-white bg-orange-500 hover:bg-white mt-0"
        >
          Buat Catatan Baru
        </Button>
        </Link>
        <p className="text-white text-center text-lg italic mt-4">
          Fitur yang bisa kamu gunakan
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-2xl mx-auto text-center items-center">
          <Link href={"/notes/create"}>
          <Card
            title={"Buat Catatan"}
            content={"Tulis dan simpan semua cerita serta pikiranmu disini"}
          />
          </Link>
          <Link href={"/notes"}>
          <Card 
            title={"Lihat Catatan"}
            content={
              "Temukan kembali seluruh catatan yang telah kamu simpan"
            }
          /></Link>
          <Card
            title={"Edit Catatan"}
            content={
              "Sunting tulisanmu, kapan pun dan di mana pun kamu berada"
            }
          />
        </div>
      </div>
        <div className="mt-20 mb-10">
           <Image src={home}
            width={500}
            height={335} /> 
        </div>
    </div>        
  );
}
