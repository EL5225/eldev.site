import { Button } from "@/components";
import { TypeAnimation } from "react-type-animation";
import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { downloadCv } from "@/utils";

export const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <section
        className="w-full hidden md:block md:my-[10vh] dark:text-slate-200"
        data-aos="fade-down"
        data-aos-once="true">
        <div className="flex w-full mt-[8vh] items-center justify-around">
          <figure className="ml-4">
            <img
              src="/foto1.webp"
              className="max-w-[30vw] rounded-full bg-cover bg-no-repeat"
              alt="foto"
            />
          </figure>
          <div className="flex flex-col gap-4 mb-14 min-w-[49vw] lg:ml-4 xl:ml-0">
            <h1 className="md:text-3xl lg:text-5xl font-sans">Hello, World!</h1>

            <TypeAnimation
              sequence={[500, "I, Muhammad Luthfi Ramadhan"]}
              wrapper="span"
              cursor={true}
              className="lg:text-xl font-bold font-mono md:text-lg"
            />
            <TypeAnimation
              sequence={[
                400,
                " A student of Informatics Engineering at Universitas Islam Nusantara",
              ]}
              wrapper="span"
              cursor={true}
              className="lg:text-xl font-bold font-mono md:text-sm"
              speed={65}
            />
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="block md:hidden mt-24 ">
        <div
          className="flex flex-col justify-center items-center dark:text-slate-200"
          data-aos="fade-down">
          <figure>
            <img
              src="/foto1.jpg"
              className="w-[70vw] rounded-full "
              alt="foto"
            />
          </figure>
          <div className="flex flex-col gap-4 max-w-[83vw] mt-12">
            <h1 className="text-3xl font-sans">Hello, World!</h1>
            <TypeAnimation
              sequence={[500, "I, Muhammad Luthfi Ramadhan"]}
              wrapper="span"
              cursor={true}
              className="text-lg font-bold font-mono"
            />
            <TypeAnimation
              sequence={[
                400,
                " A student of Informatics Engineering at Universitas Islam Nusantara",
              ]}
              wrapper="span"
              cursor={true}
              className="text-lg font-bold font-mono"
              speed={70}
            />
          </div>
        </div>
      </section>

      <Button
        className={`block md:hidden my-20 hover:bg-blue-400 text-white dark:hover:bg-blue-900 dark:text-slate-200 bg-blue-500 dark:bg-blue-800 font-semibold rounded-md hover:text-black dark:hover:text-zinc-400`}
        click={downloadCv}>
        Download CV
      </Button>
    </Fragment>
  );
};
