import { Outlet } from "react-router";

export const ContentLayout = () => {
  return (
    <section
      className={`w-full md:h-screen bg-white flex flex-col justify-center items-center dark:bg-zinc-900 duration-300 ease-out overflow-y-auto`}>
      <Outlet />
    </section>
  );
};
