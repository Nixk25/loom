"use client";
import { useCursor } from "@/app/CursorContext";
import Cursor from "@/components/ui/Cursor";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import BackLink from "@/components/ui/Benefits/BackLink";
import RevolutionText from "@/components/ui/Register/RevolutionText";
import ShapeFutureText from "@/components/ui/Register/ShapeFutureText";
import RegisterText from "@/components/ui/Register/RegisterText";
import RegisterBlocks from "@/components/ui/Register/RegisterBlocks";
import RegisterInputs from "@/components/ui/Register/RegisterInputs";
import { useRouter } from "next/navigation";

type user = {
  email: string;
  firstName: string;
  surname: string;
};
const Register = () => {
  const { setDifferentCursor } = useCursor();
  const [currentStep, setCurrentStep] = useState<
    "revolution" | "shapeFuture" | "register" | "inputs"
  >("revolution");
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isTransition, setIsTransition] = useState(false);
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [users, setUsers] = useState<user[]>([]);
  const [error, setError] = useState<string | null>(null);
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

  useEffect(() => {
    setDifferentCursor(false);
  }, []);

  useEffect(() => {
    const revolutionTimer = setTimeout(() => {
      setCurrentStep("shapeFuture");
    }, 2000);
    const shapeFutureTimer = setTimeout(() => {
      setCurrentStep("register");
    }, 4000);

    return () => {
      clearTimeout(revolutionTimer);
      clearTimeout(shapeFutureTimer);
    };
  }, [setDifferentCursor]);

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

  useEffect(() => {
    document.body.style.setProperty("height", "100vh", "important");
    document.body.style.setProperty("overflow", "hidden", "important");

    return () => {
      document.body.style.setProperty("height", "auto", "important");
      document.body.style.setProperty("overflow", "auto", "important");
    };
  }, []);

  const handleSectionClick = () => {
    setCurrentStep("inputs");
  };

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

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email);

    if (!user) {
      setError("Email not found, please register.");
      return;
    }

    router.push("/main");
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailExists = users.some((user) => user.email === email);

    if (emailExists) {
      setError("Email already exists. Please use another one.");
      return;
    }

    setUsers([...users, { email, firstName: name, surname }]);

    setError(null);
    setName("");
    setSurname("");
    setEmail("");
    setIsLogin(true);
    router.push("/main");
  };

  return (
    <section
      onClick={handleSectionClick}
      onMouseEnter={() => setDifferentCursor(false)}
      className="flex overflow-hidden flex-col justify-center items-center min-h-screen w-full relative"
    >
      <Cursor />
      <BackLink />

      <AnimatePresence>
        {currentStep === "revolution" && <RevolutionText />}
      </AnimatePresence>
      <AnimatePresence>
        {currentStep === "shapeFuture" && <ShapeFutureText />}
      </AnimatePresence>
      <AnimatePresence>
        {currentStep === "register" && <RegisterText />}
      </AnimatePresence>
      <AnimatePresence>
        {currentStep === "inputs" && (
          <>
            <RegisterBlocks isLogin={isLogin} setIsLogin={setIsLogin} />
            <form
              className="w-full flex justify-center items-center flex-col gap-10"
              onSubmit={isLogin ? handleLogin : handleRegister}
            >
              <RegisterInputs
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
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Register;
