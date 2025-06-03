'use client';

import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo 2.png"; 
import view from "/public/View.png";
import buat from "/public/Buat.png";
import edit from "/public/Edit.png";
import aut from "/public/Author.png";
import buat1 from "/public/buat 1.png";
import buat2 from "/public/buat 2.png";
import list from "/public/list.png";
import list2 from "/public/list 2.png";
import edit1 from "/public/edit 1.png";
import edit2 from "/public/edit 2.png";
import ig from "/public/IG.png";
import wa from "/public/WA.png";
import mail from "/public/Gmail.png";

export default function About() {
 return (
  <Link href={"/about"}>
    <div className="flex-col mx-8 justify-center h-[400px] ">
        <div className="mt-28 place-items-center mb-10">
           <Image src={logo}
            width={500}
            height={335} /> 
        </div>
        <div>
            <p className="mx-10 text-justify text-white leading-7 font-medium">
                Notedly adalah ruang digital tempat ide tumbuh dan pikiran bertumbuh. Nama ini kami pilih karena setiap catatan di sini bukan sekadar tulisan, 
                tetapi sesuatu yang layak dicatat — worth noting.
                Di dunia yang serba cepat, mencatat menjadi cara sederhana namun penting untuk menjaga fokus, menyusun rencana, dan merekam hal-hal yang tak boleh terlupa. 
                Notedly ingin menjadi teman yang senyap namun setia menampung isi pikiranmu, kapan saja.
            </p>
          <blockquote className="mx-10 mt-10 border-l-4 border-yellow-400 pl-6 italic text-white">
          “Your notes are your thinking made visible.” — Tiago Forte 
          </blockquote>
          <blockquote className=" mx-10 mt-3 border-l-4 border-yellow-400 pl-6 italic text-white">
          ("Catatanmu adalah pemikiranmu yang menjadi nyata.") — Tiago Forte 
          </blockquote>
        </div>
        </div>

        <div className="flex flex-col mt-36 bg-white w-full h-[1800px] items-center">
          <p className="text-4xl text-center font-bold mt-7 text-blue-950">FITUR KAMI</p>

          <div className="flex flex-row gap-40 justify-between">
           <Image className="mt-12"
            src={buat1}
            width={496}
            height={234} />
            <div>
            <p className="text-blue-950 text-3xl font-bold text-center mt-24">- Buat Catatan -</p>
            <p className="flex-col text-center text-lg text-blue-950 leading-7 mt-5">Klik tombol-tombol berikut untuk pergi ke halaman Buat Catatan Baru.</p>
            </div>
          </div>

          <div className="flex flex-row gap-52 justify-between items-center">
            <div className="flex-col text-center text-lg text-blue-950 leading-7">
            <p>Masukkan judul dan isi catatan di kolom yang tersedia.</p>
            <p>Klik “Simpan” untuk menyimpan catatan Anda.</p>
            </div>
           <Image className="mt-7"
            src={buat2}
            width={496}
            height={234} />
          </div>

          <div className="flex flex-row gap-48 justify-between items-center">
           <Image className="mt-24"
            src={list}
            width={496}
            height={234} />
            <div>
            <p className="text-blue-950 text-3xl font-bold text-center mt-24">- Lihat Catatan -</p>
            <p className="flex-col text-center text-lg text-blue-950 leading-7 mt-5">Klik tombol-tombol berikut untuk pergi ke halaman List Catatan.</p>
            </div>
          </div>

          <div className="flex flex-row gap-80 justify-between items-center">
            <div className="flex-col text-center text-lg text-blue-950 leading-7 ml-24 mt-5">
            <p>Temukan semua catatanmu disini.</p>
            </div>
           <Image className="mt-5"
            src={list2}
            width={496}
            height={234} />
          </div>

          <div className="flex flex-row gap-48 justify-between items-center">
           <Image className="mt-16"
            src={edit1}
            width={496}
            height={234} />
            <div>
            <p className="text-blue-950 text-3xl font-bold text-center mt-16">- Edit Catatan -</p>
            <p className="flex-col text-center text-lg text-blue-950 leading-7 mt-5">Klik squarepen pada catatan yang ingin diedit.</p>
            <p className="flex-col text-center text-lg text-blue-950 mt-1">Klik ikon tempat sampah jika ingin menghapus catatan</p>
            </div>
          </div>

          <div className="flex flex-row gap-52 justify-between items-center">
            <div className="flex-col text-center text-lg text-blue-950 leading-7">
            <p>Lakukan perubahan pada judul atau isi catatan.</p>
            <p>Klik “Perbarui” untuk menyimpan catatan yang telah diubah.</p>
            </div>
           <Image className="mt-8"
            src={edit2}
            width={496}
            height={234} />
          </div>

          {/* <div className="flex flex-row mt-10 gap-5 mx-5 text-center">
          <div className=" bg-orange-500  max-w-sm rounded-[16px] items-centerover flow-hidden border-2  shadow-md  mx-5">
            <div>
            <Image className="mx-2 mt-2"
            src={buat}
            width={346}
            height={160} />
            <div className="p-4 space-y-2">
             <h4 className="font-semibold text-white text-lg">
              Buat Catatan
             </h4>
            </div>
            </div>
            </div>

            <div className="bg-orange-500 max-w-sm rounded-[16px] items-centerover flow-hidden shadow-md mx-5">
            <div>
            <Image className="mx-2 mt-2"
            src={edit}
            width={346}
            height={160} />
            <div className="p-4 space-y-2">
             <h4 className="font-semibold text-white text-lg">
              Edit Catatan
             </h4>
            </div>
            </div>
            </div>

            <div className="bg-orange-500 max-w-sm rounded-[16px] items-centerover flow-hidden shadow-md mx-5">
            <div>
            <Image className="mx-2 mt-2"
            src={view}
            width={365}
            height={160} />
            <div className="p-4 space-y-2">
             <h4 className="font-semibold text-white text-lg">
              Lihat Catatan
             </h4>
            </div>
            </div>
            </div>
          </div> */}
        </div>

        <div className="w-full h-[500px] mt-12"> 
        <p className="flex flex-col text-4xl text-center font-bold text-white">PROFIL</p>
        <div className="flex flex-row bg-blue-950 justify-between mt-10"> 
           <Image className="flex-row ml-36 mt-5"
            src={aut}
            width={256}
            height={237} /> 
            <div className="flex-row mr-16 text-center text-white leading-7 font-medium">
            <p>Nama saya Sil, penulis dan pengelola catatan yang ada di laman ini. Latar belakang saya</p>
            <p>berakar pada ketertarikan terhadap proses berpikir, pencatatan, dan penyusunan ide dalam </p>
            <p>bentuk yang terbuka dan terdokumentasi. Melalui setiap catatan, saya berupaya merawat kebiasaan </p>
            <p>mencatat sebagai cara untuk memahami, merefleksikan, dan terhubung—baik dengan diri sendiri maupun </p>
            <p>dengan orang lain yang mungkin menemukan nilai dari apa yang saya tulis. Saya percaya bahwa</p>
            <p>pengetahuan tidak selalu hadirdalam bentuk akhir yang sempurna, dan justru dalam proses itulah</p>
            <p>makna sering kali ditemukan.</p>
            <p >   
                — Sil
            </p>
            <p className="text-center text-white mt-8 font-medium italic">Contact me:</p>
             
            <div className="flex flex-row text-white items-center mt-8 justify-between">
            <blockquote className="border-l-4 border-yellow-400 ml-5">
            <div>
            <Image className="mt-2 ml-8"
            src={ig}
            width={24}
            height={24} />
            <div className="flex flex-row mt-2">
            <p className="ml-2 italic">Instagram:</p>
            <Link href={"https://www.instagram.com/sa_aeee/"}>
            <p className="ml-5 italic pr-8 hover:text-gray-400">@sa_aeee</p>
            </Link>
            </div>
            </div>
            </blockquote>
            
            <blockquote className="border-l-4 border-yellow-400">
            <div>
            <Image className="mt-2 ml-8"
            src={wa}
            width={24}
            height={24} />
            <div className="flex flex-row mt-2">
            <p className="ml-2 italic">WhatsApp:</p>
            <Link href={"https://wa.me/6285730342822"}>
            <p className="ml-5 italic pr-8 hover:text-gray-400">wa.me</p>
            </Link>
            </div>
            </div>
            </blockquote>

          <blockquote className="border-l-4 border-yellow-400">
            <div>
            <Image className="mt-2 ml-5"
            src={mail}
            width={24}
            height={24} />
            <div className="flex flex-row mt-2">
            <p className="ml-2 italic">Gmail:</p>
            <p className="ml-5 italic pr-8">sailahidaya06@gmail.com</p>
            </div>
            </div>
          </blockquote>

            </div>
            </div> 
            </div>
            </div>   
        </Link>    
  );
}