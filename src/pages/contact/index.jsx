import {
  Button,
  LinkedInIcon,
  GmailIcon,
  InstagramIcon,
  ArrowDownIcon,
} from "@/components";

import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { downloadCv } from "@/utils";

export const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Fragment>
      <h1
        className="font-semibold text-xl sm:text-2xl md:text-3xl font-mono p-4 rounded-md mt-[16vh] md:mt-[20vh] dark:text-slate-200"
        data-aos="fade-down"
        data-aos-once="true">
        You can contact me via
      </h1>
      <div className="mt-[10vh]" data-aos="fade-down" data-aos-once="true">
        <ArrowDownIcon bounce="animate-bounce" />
        <ArrowDownIcon bounce="animate-bounce" />
      </div>
      <div
        className="flex items-center justify-center mt-[10vh] mb-[20vh] gap-4 w-[25vw]"
        data-aos="fade-down"
        data-aos-once="true">
        <Button className={`hover:scale-125 duration-500 ease-out`}>
          <a
            href="mailto:luthfiramadhan155@gmail.com?subjek=Subjek Email&body=Isi Pesan"
            target="_blank"
            rel="noreferrer">
            <GmailIcon />
          </a>
        </Button>
        <Button className={`hover:scale-125 duration-500 ease-out`}>
          <a
            href="https://www.linkedin.com/in/el-luthfi/"
            target="_blank"
            rel="noreferrer">
            <LinkedInIcon />
          </a>
        </Button>
        <Button className={`hover:scale-125 duration-500 ease-out`}>
          <a
            href="https://www.instagram.com/luthfigupix/"
            target="_blank"
            rel="noreferrer">
            <InstagramIcon />
          </a>
        </Button>
      </div>

      <Button
        className={`mb-20 block md:hidden hover:bg-green-400 dark:hover:bg-green-900 dark:bg-green-800 dark:text-slate-100 dark:hover:text-slate-200  text-white bg-green-500 font-semibold rounded-md hover:text-black`}
        click={downloadCv}>
        Download CV
      </Button>
    </Fragment>
  );
};
