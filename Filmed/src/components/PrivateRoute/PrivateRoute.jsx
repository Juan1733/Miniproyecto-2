import { useEffect } from "react";
import { Navigate } from "react-router";
import { LOGIN_URL } from "../../constants/urls";
import { useUser } from "../../contexts/userContext";

export function PrivateRoute({ children }) {
    const { user, isLoading } = useUser();


    if (isLoading) {
        return (<h1>Cargandoo</h1>)
    }

    if (!isLoading && user === null) {
        console.log(user)
        return (
            <Navigate to={LOGIN_URL}/>
        )
    }

    return children;

    
}