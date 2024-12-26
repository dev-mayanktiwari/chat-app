import React from "react";
import { MessageSquare, Lock, Zap } from "lucide-react";

const features = [
  {
    name: "Instant Chat Links",
    description:
      "Generate secure chat links in seconds and start conversations immediately.",
    icon: MessageSquare,
  },
  {
    name: "End-to-End Encryption",
    description:
      "Your conversations are protected with state-of-the-art encryption technology.",
    icon: Lock,
  },
  {
    name: "Lightning Fast",
    description:
      "Experience real-time messaging with minimal latency for smooth conversations.",
    icon: Zap,
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to chat online
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            SpeedPost Chat offers a suite of powerful features to make your
            online conversations seamless and secure.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
