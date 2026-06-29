import StepCard from "./StepCard";
import { steps } from "../../data/steps";

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
            Get Started in 3 Simple Steps
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Your journey to better mental wellness is just a few clicks away.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              step={step}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;