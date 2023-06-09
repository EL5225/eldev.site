import {
  Button,
  LinkedInIcon,
  GmailIcon,
  InstagramIcon,
  ArrowDownIcon,
  Navbar,
  Footer,
} from "@/components";
import { ContentLayout } from "@/layouts";

export const Contact = () => {
  const downloadCv = () => {
    window.open(
      "https://drive.google.com/file/d/1sjIVUHQjCcLZZRwdbkEXm94bQQ4I55a_/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <Navbar />
      <ContentLayout hMobile={`h-auto`}>
        <h1 className="font-semibold text-xl sm:text-2xl md:text-3xl font-mono p-4 rounded-md mt-[16vh] md:mt-[20vh]">
          You can contact me via
        </h1>
        <div className="mt-[10vh]">
          <ArrowDownIcon bounce="animate-bounce" />
          <ArrowDownIcon bounce="animate-bounce" />
        </div>
        <div className="flex items-center justify-center mt-[10vh] mb-[20vh] gap-4 w-[25vw]">
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

        <Button
          className={`my-[6vh] block md:hidden hover:bg-green-400 text-white bg-green-500 font-semibold rounded-md hover:text-black`}
          click={downloadCv}
        >
          Download CV
        </Button>
        <Footer />
      </ContentLayout>
    </>
  );
};
