import React, { createContext, useContext, useCallback, useState } from "react";
import { uuid } from "uuidv4";

import ToastContainer from "../components/ToastContainer";

export interface ToastMessage {
  id: string;
  type?: "success" | "error" | "info";
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, "id">): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messagens, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, "id">) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages(state => [...state, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer messages={messagens} />
      {children}
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  return context;
}

export { ToastProvider, useToast };
