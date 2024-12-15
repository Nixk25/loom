import React, { useEffect, useState } from "react";
import RegisterInputs from "./RegisterInputs";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/UserContext";
const RegisterForm = ({
  setIsBlocksAnimating,
}: {
  setIsBlocksAnimating: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { findUserByEmail, addUser, setCurrentUser } = useUser();
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isTransition, setIsTransition] = useState(false);
  const router = useRouter();
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  const handleFocus = (inputName: string) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = findUserByEmail(email);

    if (!user) {
      setError("Email not found, please register.");
      return;
    }

    setCurrentUser(user);
    setError(null);
    setEmail("");
    setIsBlocksAnimating((prev: boolean) => !prev);
    setTimeout(() => {
      router.push("/main");
    }, 2000);
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const existingUser = findUserByEmail(email);

    if (existingUser) {
      setError("Email already exists. Please use another one.");
      return;
    }

    const newUser = { email, firstName: name, surname, role: "user" };
    addUser(newUser);
    setCurrentUser(newUser);
    setError(null);
    setName("");
    setSurname("");
    setEmail("");
    setIsBlocksAnimating((prev: boolean) => !prev);
    setTimeout(() => {
      router.push("/main");
    }, 2000);
  };

  useEffect(() => {
    if (isTransition) {
      const transitionTimer = setTimeout(() => {
        setIsTransition(false);
      }, 3000);

      return () => {
        clearTimeout(transitionTimer);
      };
    }
  }, [isTransition]);
  return (
    <form
      className="w-full flex justify-center items-center flex-col gap-10"
      onSubmit={isLogin ? handleLogin : handleRegister}
    >
      <RegisterInputs
        setIsBlocksAnimating={setIsBlocksAnimating}
        error={error}
        isTransition={isTransition}
        setIsTransition={setIsTransition}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        name={name}
        setName={setName}
        surname={surname}
        setSurname={setSurname}
        focusedInput={focusedInput}
        email={email}
        setEmail={setEmail}
        handleInputChange={handleInputChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
      />
    </form>
  );
};

export default RegisterForm;
