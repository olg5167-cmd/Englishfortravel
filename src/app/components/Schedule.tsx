import { Calendar, Clock } from "lucide-react";

export function Schedule() {
  const schedules = [
    {
      day: "Четверг",
      time: "15:00 (МСК)",
      group: "группа 4–5 класс",
      color: "cyan"
    },
    {
      day: "Пятница",
      time: "15:30 (МСК)",
      group: "группа 6–8 класс",
      color: "amber"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-400">🕒 Расписание</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Когда проходят занятия
          </h2>
        </div>

        {/* Schedule cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {schedules.map((schedule, index) => {
            const colorClasses = schedule.color === "cyan" 
              ? {
                  bg: "from-cyan-500/20 to-cyan-500/5",
                  border: "border-cyan-500/30",
                  icon: "from-cyan-500 to-cyan-600",
                  text: "text-cyan-400"
                }
              : {
                  bg: "from-amber-500/20 to-amber-500/5",
                  border: "border-amber-500/30",
                  icon: "from-amber-500 to-amber-600",
                  text: "text-amber-400"
                };
            
            return (
              <div
                key={index}
                className={`p-8 rounded-3xl bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses.icon} mb-6 shadow-lg`}>
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-slate-400 mb-1">День недели</p>
                    <p className={`text-2xl ${colorClasses.text}`}>{schedule.day}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Время</p>
                    <p className="text-xl text-white">{schedule.time}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Группа</p>
                    <p className="text-lg text-slate-300">{schedule.group}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}