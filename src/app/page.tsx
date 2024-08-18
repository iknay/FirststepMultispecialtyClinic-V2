import { MainPageLang } from "@/lib/lang/MainPageLang";
import Image from "next/image";
import HomeImage from "../../public/assets/images/HomePageImg.png";

export default function Home() {
  return (
    <main className="flex flex-col p-16">
      <div className="flex items-center justify-between gap-20">
        <div>
          <span className="flex flex-col gap-6">
            <h1 className="font-extrabold text-6xl">{MainPageLang.Heading}</h1>
            <p>{MainPageLang.SubHeading}</p>
          </span>
        </div>
        <Image src={HomeImage} alt="hero" className="w-[550px] aspect-square" />
      </div>
    </main>
  );
}
