import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {AuthContext} from "../context";
import Loader from "./UL/Loader/loader";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import About from "../pages/About";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                <Route
                    element={<Posts />}
                    path="/posts"
                    key="/posts"
                />
                <Route
                    element={<About />}
                    path="/about"
                    key="/about"
                />
            </Routes>
            :
            <Routes>
                <Route
                    element={<Login />}
                    path="/login"
                    key="/login"
                />
            </Routes>
    );
};

export default AppRouter;
