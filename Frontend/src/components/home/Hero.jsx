function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-sky-50 pt-32 pb-20">
      <div className="container mx-auto px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight text-slate-800 md:text-6xl">
            Your Personal Wellness Companion on Campus.
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            A safe space designed for students to navigate academic stress,
            connect with peers, and prioritize mental well-being. Anonymously
            and securely.
          </p>

          <div className="mt-10">
            <a
              href="#features"
              className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;