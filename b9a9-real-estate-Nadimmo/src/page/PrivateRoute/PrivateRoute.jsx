/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const PrivateRoute = ({children}) => {
    // console.log(children)
    const {user,loader} = useContext(AuthContext)
    if(loader){
        <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" />
};

export default PrivateRoute;