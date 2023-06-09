import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const ContentLayout = ({ children, hMobile }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className={`w-full ${hMobile} md:h-screen bg-white flex flex-col justify-center items-center`}
      data-aos="fade-down"
      data-aos-duration="900"
    >
      {children}
    </section>
  );
};
