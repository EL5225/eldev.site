export const ContentLayout = ({ children }) => {
  return (
    <section
      className={`w-full h-auto md:h-[92vh] flex flex-col justify-center items-center`}
    >
      {children}
    </section>
  );
};
