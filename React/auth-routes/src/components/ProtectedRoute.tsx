import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { PropsWithChildren } from "react";

type ProtectedRouteProps = PropsWithChildren;

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    
    const auth = useAuth();
    
    if (!auth?.user) {
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    
    return children;
};