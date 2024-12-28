import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div className="relative w-full max-w-md mx-auto">
          <Image
            src="/images/404.svg"
            alt="404 Error Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
        <h1 className="mt-6 text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Oops! Page not found
        </h1>
        <p className="mt-2 text-lg text-gray-600 sm:text-xl">
          We couldn't find the page you're looking for. It might have been moved
          or doesn't exist.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go to Homepage
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
