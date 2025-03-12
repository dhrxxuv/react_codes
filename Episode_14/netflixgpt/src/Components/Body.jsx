import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import MoviesDetails from "./MoviesDetails"; // Import the new page

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
      children: [
        {
          path: "movie/:id", // Dynamic route for movie details
          element: <MoviesDetails />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={appRouter} />
  );
};

export default Body;
