import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UL/Loader/loader";
import * as PropTypes from "prop-types";

function Navigate(props) {
    return null;
}

Navigate.propTypes = {to: PropTypes.string};
const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Route>
                {privateRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Navigate to='/posts'/>
            </Route>
            :
            <Route>
                {publicRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Navigate to='/login'/>
            </Route>
    );
};

export default AppRouter;
