import React, { createContext, useContext, useCallback } from "react";

import ToastContainer from "../components/ToastContainer";

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log("Add toast");
  }, []);

  const removeToast = useCallback(() => {
    console.log("Add toast");
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within an AuthProvider");
  }

  return context;
}

export { ToastProvider, useToast };
