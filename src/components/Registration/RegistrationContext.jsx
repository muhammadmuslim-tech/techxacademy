"use client";

import { createContext, useContext, useState } from "react";

const RegistrationContext = createContext(null);

export function RegistrationProvider({ children }) {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const openRegistration = () => {
    setIsRegistrationOpen(true);
  };

  const closeRegistration = () => {
    setIsRegistrationOpen(false);
  };

  return (
    <RegistrationContext.Provider
      value={{
        isRegistrationOpen,
        openRegistration,
        closeRegistration,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  const context = useContext(RegistrationContext);

  if (!context) {
    throw new Error(
      "useRegistration must be used inside RegistrationProvider"
    );
  }

  return context;
}