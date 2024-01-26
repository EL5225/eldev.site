import { GithubIcon, Button } from "@/components";
import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { downloadCv } from "@/utils";

export const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <section
        className="flex flex-col text-xl md:text-2xl mt-[18vh] md:mt-[14vh] font-semibold font-mono px-6 gap-[10vh] mb-[4vh] dark:text-slate-200"
        data-aos="fade-down"
        data-aos-once="true">
        <h1
          className={`text-3xl sm:text-3xl md:text-4xl px-6 text-black dark:text-slate-200 `}>
          About myself
        </h1>
        <div
          className={`flex flex-col gap-6 rounded-md shadow-md md:text-lg bg-slate-50 dark:bg-slate-800 duration-300 ease-out p-6 `}>
          <p>
            Hi there! I'm Muhammad Luthfi Ramadhan, a student at Universitas
            Islam Nusantara.
          </p>
          <p>
            My journey in the world of web programming development is driven by
            an insatiable curiosity. I am particularly passionate about
            front-end web development, and I have cultivated my skills using
            technologies like TailwindCSS, JavaScript, and TypeScript, mainly
            within the React and NextJS frameworks.
          </p>
          <p className="mt-4">
            If you're interested, you can explore some of the projects I've
            worked on over the past few years on my GitHub profile.
          </p>
        </div>
      </section>

      <div className="my-[3vh]" data-aos="fade-down" data-aos-once="true">
        <Button className={` hover:scale-110 duration-300`}>
          <a href="https://github.com/EL5225" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
        </Button>
      </div>

      <Button
        className={`my-20 block md:hidden hover:bg-red-500 dark:bg-red-800 dark:hover:bg-red-900 dark:text-slate-200 text-white bg-red-600 font-semibold rounded-md hover:text-black dark:hover:text-zinc-400`}
        click={downloadCv}>
        Download CV
      </Button>
    </Fragment>
  );
};
