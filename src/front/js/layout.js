import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext, { Context } from "./store/appContext";
import { Home } from "./pages/home/Home.jsx";

import ScrollToTop from "./component/scrollToTop";

import Signup from "./pages/signup/Signup.jsx";
import Login from "./pages/login/Login.jsx";
import HomeUser from "./pages/homeUser/HomeUser.jsx";

import EditProfile from "./pages/editProfile/EditProfile.jsx";
import AllCompetition from "./pages/allCompetition/AllCompetition.jsx";
import InfoCompetition from "./pages/infoCompetition/InfoCompetition.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";

import VideoLibrary from "./pages/videoLibrary/components/VideoLibrary.jsx";
import CreateCompetition from "./pages/createCompetition/CreateCompetition.jsx";
import EditCompetition from "./pages/editCompetition/EditCompetition.jsx";
import ProtectedRoute from "./component/protectedRoute";
import MyAllCompetition from "./pages/myAllCompetition/MyAllCompetition.jsx";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  const { store, actions } = useContext(Context);

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Login />} path="/login" />
            <Route element={<AboutUs />} path="/about-us" />

            <Route element={<ProtectedRoute />}>
              <Route path="/home/user" element={<HomeUser />} />

              <Route element={<VideoLibrary />} path="/Video-library" />

              <Route
                path="/create-competition"
                element={<CreateCompetition />}
              />
              <Route
                path="/edit-competition/:id"
                element={<EditCompetition />}
              />

              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/competitions" element={<AllCompetition />} />
              <Route path="/competition/:id" element={<InfoCompetition />} />

              <Route path="/my-competitions" element={<MyAllCompetition />} />
            </Route>

            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
