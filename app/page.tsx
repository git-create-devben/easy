import Homepage from "$/components/Home";
import Image from "next/image";
import Login from "./(auth)/page";

export default function Home() {
  return (
    <main className=" relative flex-1 overflow-hidden p-2 lg:p-3 bg-gradient-to-bl from-[#171311] to-neutral-700">
      <div className="bg-[#171311]  rounded-md drop-shadow-xl">
       <Homepage/>
      </div>
      <div className="absolute flex top-0 w-full h-screen bg-neutral-900 bg-opacity-50 backdrop-blur-s">
        <Login/>
      </div>
    </main>
  );
}
