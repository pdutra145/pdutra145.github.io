import React, { createContext, useState } from "react";

interface LoadingContextType {
    isLoading: boolean,
    setIsLoading: (isLoading:boolean) => void;
}

interface Props {
    children:React.ReactNode
}

const loadingDefault: LoadingContextType = {
    isLoading:false,
    setIsLoading: () => {}
}

export const LoadingContext = createContext(loadingDefault)

export const LoadingProvider: React.FC<Props> = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <LoadingContext.Provider value={{isLoading, setIsLoading}}>
          {children}
        </LoadingContext.Provider>
      );
}
