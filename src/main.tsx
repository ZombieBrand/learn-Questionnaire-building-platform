import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { routeTree } from "./routeTree.gen";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import NotFound from "@/pages/Error/NotFound";
// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => {
    return <NotFound></NotFound>;
  },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
