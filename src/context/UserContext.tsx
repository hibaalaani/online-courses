// context/UserContext.tsx
import React, { createContext, useContext, useEffect, useState  } from "react";

interface User {
  username: string | null;
  email: string | null;
  joined: string | null;
  child_name:string|null
}

interface UserContextType {
  user: User;
  setUser: (userData: { username: string; email: string; child_name:string, joined: string }) => void;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUserState] = useState<User>({ username: null, email: null, child_name:null,joined: null });
  const [loading] = useState<boolean>(false);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("email");
    const savedJoined = localStorage.getItem("joined");
    const savedChildName = localStorage.getItem("child_name");

    if (savedUsername || savedEmail) {
      setUserState({
        username: savedUsername,
        email: savedEmail,
        joined: savedJoined,
        child_name:savedChildName,
      });
    }
  }, []);

  const setUser = (userData: { username: string; child_name:string,  email: string; joined: string }) => {
    localStorage.setItem("username", userData.username);
    localStorage.setItem("email", userData.email);
    localStorage.setItem("child_name", userData.child_name);
    localStorage.setItem("joined", userData.joined);

    setUserState(userData);
  };

  const logout = () => {
    localStorage.clear();
    setUserState({ username: null, email: null, joined: null , child_name:null,  });
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};