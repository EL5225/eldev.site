import { Suspense } from "react";
import { lazily } from "react-lazily";
import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Loading, Error, Footer } from "@/components";
const { Home, About, Contact } = lazily(() => import("@/pages"));

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading width={"w-14"} height={"h-14"} />}>
        <ErrorBoundary fallback={<Error />}>
          <Home />
        </ErrorBoundary>
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<Loading width={"w-14"} height={"h-14"} />}>
        <ErrorBoundary fallback={<Error />}>
          <About />
        </ErrorBoundary>
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<Loading width={"w-14"} height={"h-14"} />}>
        <ErrorBoundary fallback={<Error />}>
          <Contact />
        </ErrorBoundary>
      </Suspense>
    ),
  },
]);
