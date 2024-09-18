import { MainPageLang } from "@/lib/lang/MainPageLang";
import Image from "next/image";
import HomeImage from "@/assets/images/HomePageImg.png";
import Doctors from "@/assets/images/Doctors.png";
import Quote from "@/assets/images/Quote.png";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const journeys = MainPageLang.Journeys;
  return (
    <main className="flex flex-col gap-16">
      <section className="flex items-center justify-between gap-56 p-16">
        <div className="space-y-16">
          <span className="flex flex-col gap-6">
            <h1 className="font-extrabold text-[64px] leading-[72px]">
              Empowering
              <br /> Healthy Lives,
              <br />
              One Step at a Time
            </h1>
            <p className="text-xl font-medium">{MainPageLang.SubHeading}</p>
          </span>
          <Button>{MainPageLang.Button}</Button>
        </div>
        <Image src={HomeImage} alt="hero" className="w-[550px]" />
      </section>
      <section className="flex flex-col min-h-screen items-center justify-center bg-image px-16 pb-16">
        <div className="flex justify-between gap-4 px-12">
          <Image src={Doctors} alt="hero" className="w-[500px]" />
          <h1 className="text-7xl font-bold text-start mt-10">
            {MainPageLang.SecondSection.Heading}
          </h1>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-x-72 px-12 mt-36">
          {journeys.map((journey, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center max-w-[330px] gap-4 ${
                  index === 1 ? "col-start-2 row-start-2" : "col-start-1"
                } ${index === 2 && "row-start-3"}`}
              >
                <div className="items-center justify-center flex border-4 border-dashed rounded-full size-[108px] border-primary-default">
                  <div className="size-12">{journey.Icon}</div>
                </div>

                <span className="items-center gap-4">
                  <h1 className="text-2xl font-bold text-secondary-blue">
                    {journey.Title}
                  </h1>
                  <p className="font-medium">{journey.Description}</p>
                </span>
              </div>
            );
          })}
        </div>
      </section>
      <section className="px-16 pb-16 flex gap-4">
        <div className="">
          <h1 className="text-start text-secondary-blue text-2xl">
            {MainPageLang.ThirdSection.Heading}
          </h1>
          <p className="text-6xl font-bold">
            {MainPageLang.ThirdSection.Description}
          </p>
        </div>
        <div className="flex gap-4">
          {/* First Column with Fixed Height */}
          <div className="flex flex-col gap-4 flex-grow basis-0">
            {MainPageLang.ThirdSection.Testimonials.filter(
              (_, index) => index % 2 === 0
            ).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-4 shadow-md h-[180px] max-w-[28.5rem]" /* Fixed height */
              >
                <div className="flex items-center gap-4">
                  <p className="text-gray-medium">{testimonial.Name}</p>
                </div>
                <p className="font-medium">{testimonial.Label}</p>
              </div>
            ))}
          </div>

          {/* Second Column with Auto Height */}
          <div className="flex flex-col gap-4 flex-grow basis-0">
            {MainPageLang.ThirdSection.Testimonials.filter(
              (_, index) => index % 2 !== 0
            ).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-4 shadow-md h-auto max-w-[28rem]" /* Fit content */
              >
                <div className="flex items-center gap-4">
                  <p className="text-gray-medium">{testimonial.Name}</p>
                </div>
                <p className="font-medium">{testimonial.Label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
