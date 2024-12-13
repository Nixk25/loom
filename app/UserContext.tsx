"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
type User = {
  email: string;
  firstName: string;
  surname: string;
  role: string;
  posts?: number[];
};

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  users: User[];
  setUsers: (users: User[]) => void;
  addUser: (user: User) => void;
  findUserByEmail: (email: string) => User | undefined;
  allUsers: User[];
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUserState] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  const saveUserToLocalStorage = (user: User | null) => {
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("currentUser");
    }
  };

  const loadUserFromLocalStorage = () => {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      return JSON.parse(userData) as User;
    }
    return null;
  };

  const setCurrentUser = (user: User | null) => {
    setCurrentUserState(user);
    saveUserToLocalStorage(user);
  };

  useEffect(() => {
    const savedUser = loadUserFromLocalStorage();
    if (savedUser) {
      setCurrentUserState(savedUser);
    }
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("data/users.json");

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const findUserByEmail = (email: string) => {
    return users.find((user) => user.email === email);
  };

  const allUsers = users.map((user) => user);

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    router.push("/Register");
  };

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        users,
        setUsers,
        addUser,
        findUserByEmail,
        allUsers,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
