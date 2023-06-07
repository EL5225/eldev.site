import { useEffect } from "react";
import { Navbar, Button } from "@/components";
import { ContentLayout, MainLayout } from "@/layouts";
import { TypeAnimation } from "react-type-animation";
import Foto from "@/assets/foto1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const downloadCv = () => {
    window.open(
      "https://drive.google.com/file/d/1sjIVUHQjCcLZZRwdbkEXm94bQQ4I55a_/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <MainLayout>
      <Navbar />
      <ContentLayout>
        <div className="w-full hidden md:block -z-50">
          <div
            className="flex w-full mt-[8vh] items-center justify-around"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <figure className="ml-4">
              <img
                src={Foto}
                className="max-w-[30vw] rounded-full"
                alt="foto"
              />
            </figure>
            <div className="flex flex-col gap-4 mb-14 min-w-[49vw] lg:ml-4 xl:ml-0">
              <h1
                className="md:text-3xl lg:text-5xl font-sans"
                data-aos="fade-right"
                data-aos-duration="1100"
              >
                Hello, World!
              </h1>

              <TypeAnimation
                sequence={[800, "I, Muhammad Luthfi Ramadhan"]}
                wrapper="span"
                cursor={true}
                className="lg:text-xl font-bold font-mono md:text-lg"
              />
              <TypeAnimation
                sequence={[
                  900,
                  " A student of Informatics Engineering at Universitas Islam Nusantara",
                ]}
                wrapper="span"
                cursor={true}
                className="lg:text-xl font-bold font-mono md:text-sm"
                speed={65}
              />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="block md:hidden mt-24 -z-50">
          <div
            className="flex flex-col justify-center items-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <figure>
              <img src={Foto} className="w-[70vw] rounded-full " alt="foto" />
            </figure>
            <div
              className="flex flex-col gap-4 max-w-[83vw] mt-12"
              data-aos="fade-right"
              data-aos-duration="1100"
            >
              <h1
                className="text-3xl font-sans"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                Hello, World!
              </h1>
              <TypeAnimation
                sequence={[800, "I, Muhammad Luthfi Ramadhan"]}
                wrapper="span"
                cursor={true}
                className="text-lg font-bold font-mono"
              />
              <TypeAnimation
                sequence={[
                  900,
                  " A student of Informatics Engineering at Universitas Islam Nusantara",
                ]}
                wrapper="span"
                cursor={true}
                className="text-lg font-bold font-mono"
                speed={65}
              />
            </div>
          </div>
        </div>

        <div
          className="my-24 mb-12 block md:hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <Button
            className={` hover:bg-blue-400 text-white bg-blue-500 font-semibold rounded-md hover:text-black`}
            click={downloadCv}
          >
            Download CV
          </Button>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
