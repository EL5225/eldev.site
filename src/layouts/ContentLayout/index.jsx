export const ContentLayout = ({ children, hMobile }) => {
  return (
    <section
      className={`w-full ${hMobile} md:h-screen bg-white flex flex-col justify-center items-center dark:bg-zinc-900 duration-300 ease-out`}
    >
      {children}
    </section>
  );
};
