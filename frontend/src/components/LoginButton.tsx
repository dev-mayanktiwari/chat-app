"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import LoginModal from "./LoginModal";

const LoginButton = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <>
      <Button onClick={openLoginModal} className="whitespace-nowrap">
        Log in
      </Button>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </>
  );
};

export default LoginButton;
