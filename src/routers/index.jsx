import { Suspense } from "react";
import { lazily } from "react-lazily";
import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Loading, Error, Navbar, Footer } from "@/components";
import { ContentLayout } from "@/layouts";
const { Home, About, Contact } = lazily(() => import("@/pages"));

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading width={"w-14"} height={"h-14"} />}>
        <ErrorBoundary fallback={<Error />}>
          <Navbar />
          <ContentLayout />
          <Footer />
        </ErrorBoundary>
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
