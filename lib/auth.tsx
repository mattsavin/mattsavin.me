import React, { ReactChild, ReactChildren, useContext } from "react";

interface AuthProviderProps {
    children: ReactChild | ReactChildren;
}

const AuthContext = React.createContext("");

const AuthProvider = ({ children }: AuthProviderProps) => {
    const auth = {};
    return <AuthContext.Provider value={""}> {children} </AuthContext.Provider>;
}

export const useAuth = () => {
    return useContext(AuthContext);
}
