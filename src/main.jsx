import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "./pages/HomeLayout";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./pages/Home";
import AddTutorials from "./pages/AddTutorials";
import FindTutors from "./pages/FindTutors";
import Loader from "./components/Loader";
import FindTutorsByCategory from "./components/FindTutorsByCategory";
import TutorDetails from "./pages/TutorDetails";
import PrivateRoute from "./pages/PrivateRoute";
import BookedTutors from "./pages/BookedTutors";
import MyTutorials from "./pages/MyTutorials";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/findTutors",
        loader: async () => {
          const res = await fetch(
            "https://tutor-sphere-server.vercel.app/tutors"
          );
          const data = await res.json();
          return data;
        },
        element: <FindTutors />,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/findTutors/:category",
        element: <FindTutorsByCategory />,
        loader: async ({ params }) => {
          const res = await fetch(
            "https://tutor-sphere-server.vercel.app/tutors"
          );
          const data = await res.json();
          return data.filter(
            (tutor) =>
              tutor.language.toLowerCase() === params.category.toLowerCase()
          );
        },
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/tutors/:id",
        loader: async ({ params }) => {
          const res = await fetch(
            `https://tutor-sphere-server.vercel.app/tutors/${params.id}`
          );
          const data = await res.json();
          return data;
        },
        element: (
          <PrivateRoute>
            <TutorDetails></TutorDetails>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },

      {
        path: "/addTutorials",
        element: (
          <PrivateRoute>
            <AddTutorials></AddTutorials>
          </PrivateRoute>
        ),
      },
      {
        path: "/myBookedTutors",
        element: (
          <PrivateRoute>
            <BookedTutors></BookedTutors>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/myTutorials",
        element: (
          <PrivateRoute>
            <MyTutorials></MyTutorials>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);
