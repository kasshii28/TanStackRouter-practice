import { RouterProvider, createRouter } from "@tanstack/react-router";
import './App.css';
import { routeTree } from "./routeTree.gen";
import { useAuth } from "./hooks/useAuth";
const router = createRouter({ 
  routeTree: routeTree, 
  context: {authentication: undefined! } 
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  const authentication = useAuth()
  return <RouterProvider router={router} context={{authentication}}/>
}