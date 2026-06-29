function StepCard({ step }) {
  return (
    <div className="p-6 text-center">
      <div
        className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-3xl font-bold ${step.color}`}
      >
        {step.number}
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {step.title}
      </h3>

      <p className="mt-2 text-slate-600">
        {step.description}
      </p>
    </div>
  );
}

export default StepCard;