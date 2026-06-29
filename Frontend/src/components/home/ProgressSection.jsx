function ProgressSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-800">
            Your Wellness Journey
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-800">
                  This Week&apos;s Progress
                </h3>
                <i className="fa-solid fa-calendar-week text-xl text-blue-500"></i>
              </div>

              <div className="mb-4">
                <div className="mb-2 h-3 w-full rounded-full bg-white">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                    style={{ width: "0%" }}
                  ></div>
                </div>

                <p className="text-sm text-slate-600">0/7 days completed</p>
              </div>

              <div className="flex justify-between text-sm text-slate-600">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-800">
                  Recent Achievements
                </h3>
                <i className="fa-solid fa-trophy text-xl text-green-500"></i>
              </div>

              <div className="max-h-32 space-y-2 overflow-y-auto">
                <div className="py-4 text-center text-slate-500">
                  <i className="fa-solid fa-medal mb-2 text-2xl"></i>
                  <p>Complete actions to earn achievements!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <StatCard number="0" label="Moods Tracked" color="text-blue-600" />
            <StatCard number="0" label="AI Conversations" color="text-green-600" />
            <StatCard number="0" label="Day Streak" color="text-purple-600" />
            <StatCard number="0" label="Achievements" color="text-orange-600" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label, color }) {
  return (
    <div className="rounded-lg bg-slate-50 p-4 text-center">
      <div className={`text-2xl font-bold ${color}`}>{number}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}

export default ProgressSection;