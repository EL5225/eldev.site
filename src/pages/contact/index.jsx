import {
  Button,
  Navbar,
  LinkedInIcon,
  GmailIcon,
  InstagramIcon,
  ArrowDownIcon,
} from "@/components";
import { ContentLayout, MainLayout } from "@/layouts";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export const Contact = () => {
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
        <h1
          className="font-semibold text-xl sm:text-2xl md:text-3xl font-mono p-4 rounded-md  mt-28 md:mt-14 -z-50"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          You can contact me via
        </h1>
        <div
          className="mt-16 -z-50"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <ArrowDownIcon bounce="animate-bounce" />
          <ArrowDownIcon bounce="animate-bounce" />
        </div>
        <div
          className="flex items-center justify-center mt-12 gap-4 w-[25vw]"
          data-aos="zoom-in"
          data-aos-duration="1800"
          data-aos-once="true"
        >
          <Button className={`hover:scale-125 duration-500 ease-out`}>
            <a
              href="mailto:luthfiramadhan155@gmail.com?subjek=Subjek Email&body=Isi Pesan"
              target="_blank"
            >
              <GmailIcon />
            </a>
          </Button>
          <Button className={`hover:scale-125 duration-500 ease-out`}>
            <a href="https://www.linkedin.com/in/el-luthfi/" target="_blank">
              <LinkedInIcon />
            </a>
          </Button>
          <Button className={`hover:scale-125 duration-500 ease-out`}>
            <a href="https://www.instagram.com/luthfigupix/" target="_blank">
              <InstagramIcon />
            </a>
          </Button>
        </div>

        <div
          className="my-20 mb-20 block md:hidden"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <Button
            className={` hover:bg-green-400 text-white bg-green-500 font-semibold rounded-md hover:text-black`}
            click={downloadCv}
          >
            Download CV
          </Button>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};
