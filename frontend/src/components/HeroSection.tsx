import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8 items-center">
        <div className="sm:text-center lg:text-left lg:col-span-6">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Instant Chats,</span>
            <span className="block text-blue-600">Lightning Fast</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            SpeedPost Chat revolutionizes online conversations. Create secure
            chat links in seconds and start talking instantly, no sign-up
            required.
          </p>
          <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/chat">Start Chatting Now</Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
          <div className="relative mx-auto w-full rounded-lg  lg:max-w-md">
            <img
              className="w-full"
              src="/images/convo.svg"
              alt="Chat interface preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
