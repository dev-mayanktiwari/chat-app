import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChromeIcon as Google } from "lucide-react";
import { signIn } from "next-auth/react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const handleGoogleLogin = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
      redirect: true,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login to SpeedPost Chat</DialogTitle>
          <DialogDescription>
            Connect with your Google account to start chatting instantly.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center py-4">
          <Button
            onClick={handleGoogleLogin}
            className="w-full max-w-sm"
            variant="outline"
          >
            <Google className="mr-2 h-4 w-4" />
            Login with Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
