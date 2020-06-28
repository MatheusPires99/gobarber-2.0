import React, { createContext, useCallback, useState, useContext } from "react";

import api from "../services/api";

interface User {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
}

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthState {
  user: User;
  token: string;
}

interface AuthContextData {
  user: User;
  signIn(credencials: SignInCredencials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@GoBarber:token");
    const user = localStorage.getItem("@GoBarber:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("sessions", {
      email,
      password,
    });

    const { user, token } = response.data;

    localStorage.setItem("@GoBarber:token", token);
    localStorage.setItem("@GoBarber:user", JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({
      user,
      token,
    });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@GoBarber:token");
    localStorage.removeItem("@GoBarber:user");

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem("@GoBarber:user", JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
