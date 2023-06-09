import { GithubIcon, Button, Navbar, Footer } from "@/components";
import { ContentLayout } from "@/layouts";
import { TypeAnimation } from "react-type-animation";

export const About = () => {
  const downloadCv = () => {
    window.open(
      "https://drive.google.com/file/d/1sjIVUHQjCcLZZRwdbkEXm94bQQ4I55a_/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <>
      <Navbar />
      <ContentLayout hMobile={`h-full`}>
        <div className="flex flex-col text-xl md:text-2xl mt-[18vh] md:mt-[12vh] font-semibold font-mono px-6 gap-[10vh] my-[4vh]">
          <TypeAnimation
            sequence={[
              800,
              "About Myself",
              1000,
              "About",
              2000,
              "Myself",
              1000,
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            className="text-3xl sm:text-4xl md:text-5xl px-6"
          />
          <div className="flex flex-col gap-6 rounded-md shadow-md bg-slate-50 p-6">
            <p>
              Hi! My name is Muhammad Luthfi Ramadhan. Currently, I am a student
              at Universitas Islam Nusantara
            </p>
            <p>
              I'm very intrested in web development, and have 1 year experience
              in HTML, CSS and Javascript. Recently, i also jump into
              TailwindCSS and ReactJS and still learning about those two in
              about 6 months
            </p>
            <p className="mt-8">
              Here are my projects on Github that i worked for in this past 6
              months of learning TailwindCSS and ReactJS
            </p>
          </div>
        </div>

        <Button className={`my-[5vh] hover:scale-110 duration-300`}>
          <a href="https://github.com/EL5225" target="_blank">
            <GithubIcon />
          </a>
        </Button>

        <Button
          className={`my-24 mb-12 block md:hidden hover:bg-red-500 text-white bg-red-600 font-semibold rounded-md hover:text-black`}
          click={downloadCv}
        >
          Download CV
        </Button>
        <Footer />
      </ContentLayout>
    </>
  );
};
