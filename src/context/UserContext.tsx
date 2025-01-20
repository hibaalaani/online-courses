// import axios from "axios";
import {createContext, useContext, useEffect, useState} from "react";

interface User {
  username: string;
  email: string;
  joined:string
}

interface UserContextType {
  user: User;
  setUser:React.Dispatch<React.SetStateAction<User>>; // Expose setUser ;
  loading: boolean;
  error: string | null;
}
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({username: "", email: "" , joined :""});
  const [loading] = useState<boolean>(false);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    const savedUsername = localStorage.getItem("username") || "";
    const savedEmail = localStorage.getItem("email") || "";
    const savedJoined = localStorage.getItem("joined") || "";
    if (savedUsername || savedEmail) {
      setUser({
        username: savedUsername,
        email: savedEmail,
        joined: savedJoined,
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{user, setUser, loading, error}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useTopics must be used within a TopicsProvider");
  }
  return context;
};
