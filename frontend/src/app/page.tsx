import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { getServerSession } from "next-auth";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={session?.user} />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
