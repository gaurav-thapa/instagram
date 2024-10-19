import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Provider} from "react-redux";
import { appStore } from './store/store'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayout from "./components/layout/RootLayout";
import Profile from "./components/profile/Profile";
import AuthPage from "./components/auth/AuthPage";
import EditProfile from "./components/profile/EditProfile";
import CreatePost from "./components/CreatePost";

function App() {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthPage />,
    },
    {
      path: "/signup/editProfile",
      element: <EditProfile />,
    },
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/profile/edit",
          element: <EditProfile />,
        },
        {
          path:"/create",
          element:<CreatePost/>
        }
      ],
    },
  ]);

  const queryClient = new QueryClient();
  return (
    <Provider store={appStore}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
