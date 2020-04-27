import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from "react";
import AsyncStorage from "@react-native-community/async-storage";

import api from "../services/api";

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthState {
  user: object;
  token: string;
}

interface AuthContextData {
  user: object;
  signIn(credencials: SignInCredencials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        "@GoBarber:token",
        "@GoBarber:user",
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("sessions", {
      email,
      password,
    });

    const { user, token } = response.data;

    await AsyncStorage.multiSet([
      ["@GoBarber:token", token],
      ["@GoBarber:user", JSON.stringify(user)],
    ]);

    setData({
      user,
      token,
    });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["@GoBarber:token", "@GoBarber:user"]);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
