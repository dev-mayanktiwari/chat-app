import React from "react";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { getServerSession } from "next-auth";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session: CustomSession | null = await getServerSession(authOptions);

  return (
    <>
      <div className="space-y-20 md:space-y-32 pb-20">
        <HeroSection />
        <FeatureSection />
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
