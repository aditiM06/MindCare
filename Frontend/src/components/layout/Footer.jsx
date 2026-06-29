function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

          <div>
            <h3 className="text-xl font-bold text-white">
              MindCare
            </h3>

            <p className="mt-2 text-sm">
              Your Campus Wellness Companion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-200">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#features">Features</a>
              </li>

              <li>
                <a href="#how-it-works">How It Works</a>
              </li>

              <li>
                <a href="#motivation">Motivation</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-200">
              Support
            </h4>

            <ul className="mt-4 space-y-2 text-sm">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-200">
              Connect With Us
            </h4>

            <div className="mt-4 flex gap-4 text-xl">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm">
          <p>
            © 2026 MindCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;