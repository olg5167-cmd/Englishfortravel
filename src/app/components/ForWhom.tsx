import { Users, GraduationCap } from "lucide-react";

export function ForWhom() {
  const groups = [
    {
      title: "Первая группа",
      age: "4–5 класс",
      icon: Users,
      color: "cyan"
    },
    {
      title: "Вторая группа",
      age: "6–8 класс",
      icon: GraduationCap,
      color: "amber"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <span className="text-sm text-cyan-400">📌 Для кого курс</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Возрастные группы
          </h2>
        </div>

        {/* Groups */}
        <div className="grid md:grid-cols-2 gap-8">
          {groups.map((group, index) => {
            const Icon = group.icon;
            const colorClass = group.color === "cyan" 
              ? "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30" 
              : "from-amber-500/20 to-amber-500/5 border-amber-500/30";
            const iconColor = group.color === "cyan" ? "text-cyan-400" : "text-amber-400";
            
            return (
              <div
                key={index}
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${colorClass} border backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${group.color === "cyan" ? "from-cyan-500 to-cyan-600" : "from-amber-500 to-orange-500"} mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl text-white mb-2">{group.title}</h3>
                <p className={`text-xl ${iconColor}`}>{group.age}</p>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-orange-500/10 border border-orange-500/30">
          <p className="text-lg text-orange-300">
            Группы маленькие — максимум 6 детей, чтобы каждый получил внимание. Места ограничены!
          </p>
        </div>
      </div>
    </section>
  );
}