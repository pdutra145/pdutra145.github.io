import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import RootLayout from "./pages/layout/RootLayout";
import ErrorPage from "./pages/404";
import CertficatesPage from "./pages/Certificates/Certficates";
import ResumePage from "./pages/Resume";

import "bootstrap/dist/css/bootstrap.min.css";
import Articles from "./pages/Articles";
import ArticleForm from "./components/Artigos/ArticleForm";
import ArticleForms from "./pages/ArticleForms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/certificados", element: <CertficatesPage /> },
      { path: "/resumo", element: <ResumePage /> },
      { path: "/artigos", element: <Articles /> },
      { path: "/artigos/create", element: <ArticleForms /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
