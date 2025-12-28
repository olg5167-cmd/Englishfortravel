import { Sparkles, MessageCircle, Star, GraduationCap } from "lucide-react";

export function WhySpecial() {
  const features = [
    {
      title: "Живая речь",
      description: "Акцент на практическую, живую речь, а не на грамматику ради грамматики.",
      icon: MessageCircle,
      color: "cyan"
    },
    {
      title: "Реальные ситуации",
      description: "Все ситуации — из реальной жизни путешественника.",
      icon: Star,
      color: "amber"
    },
    {
      title: "Интерактивный формат",
      description: "Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты.",
      icon: Sparkles,
      color: "orange"
    },
    {
      title: "Результат",
      description: "Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс.",
      icon: GraduationCap,
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "cyan":
        return {
          bg: "from-cyan-500/20 to-cyan-500/5",
          border: "border-cyan-500/30",
          icon: "from-cyan-500 to-cyan-600",
          glow: "group-hover:shadow-cyan-500/20"
        };
      case "amber":
        return {
          bg: "from-amber-500/20 to-amber-500/5",
          border: "border-amber-500/30",
          icon: "from-amber-500 to-amber-600",
          glow: "group-hover:shadow-amber-500/20"
        };
      case "orange":
        return {
          bg: "from-orange-500/20 to-orange-500/5",
          border: "border-orange-500/30",
          icon: "from-orange-500 to-orange-600",
          glow: "group-hover:shadow-orange-500/20"
        };
      default:
        return {
          bg: "from-cyan-500/20 to-cyan-500/5",
          border: "border-cyan-500/30",
          icon: "from-cyan-500 to-cyan-600",
          glow: "group-hover:shadow-cyan-500/20"
        };
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-amber-500/10 border border-cyan-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-cyan-400">✨ Почему этот курс особенный?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Наш подход
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
            Мы учим говорить, а не заучивать правила
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = getColorClasses(feature.color);
            
            return (
              <div
                key={index}
                className={`group p-6 rounded-2xl bg-gradient-to-br ${colors.bg} border ${colors.border} backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg ${colors.glow}`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${colors.icon} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}