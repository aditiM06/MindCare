import FeatureCard from "./FeatureCard";
import { features } from "../../data/features";

function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
            Everything You Need to Thrive
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            From an empathetic AI chatbot to personalized coping strategies,
            MindCare is packed with features to support you.
          </p>
        </div>

        <h3 className="mb-8 text-center text-2xl font-bold text-slate-700">
          Core Features
        </h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;