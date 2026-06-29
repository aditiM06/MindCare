import { Link } from "react-router";

function FeatureCard({ feature }) {
  return (
    <Link
      to={feature.path}
      className="block rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-6">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-lg ${feature.iconBox}`}
        >
          <i className={`${feature.icon} text-2xl`}></i>
        </div>

        <h4 className="mt-4 text-xl font-bold text-slate-800">
          {feature.title}
        </h4>

        <p className="mt-2 text-slate-600">{feature.description}</p>
      </div>
    </Link>
  );
}

export default FeatureCard;