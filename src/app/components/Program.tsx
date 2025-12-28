import { Plane, Hotel, Coffee, MapPin, Shield, Globe, MessageCircle, BookOpen, ChevronRight } from "lucide-react";

export function Program() {
  const modules = [
    {
      number: "1",
      title: "Аэропорт без стресса",
      description: "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
      benefit: "Уверенность уже в первые часы за границей.",
      icon: Plane,
      color: "cyan"
    },
    {
      number: "2",
      title: "В отеле: заселение и помощь",
      description: "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
      benefit: "Практика вежливых фраз и повседневной лексики.",
      icon: Hotel,
      color: "amber"
    },
    {
      number: "3",
      title: "Кафе и рестораны",
      description: "Заказ еды, вопросы про аллергены, счёт и чаевые.",
      benefit: "Развитие гастрономического словаря и уверенности в общении.",
      icon: Coffee,
      color: "orange"
    },
    {
      number: "4",
      title: "На улице: ориентирование и просьбы",
      description: "Как спросить дорогу, вызвать такси или найти аптеку.",
      benefit: "Понимание устной речи и произношения в реальных ситуациях.",
      icon: MapPin,
      color: "cyan"
    },
    {
      number: "5",
      title: "Экстренные случаи",
      description: "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
      benefit: "Важные фразы, которые могут спасти отпуск.",
      icon: Shield,
      color: "amber"
    },
    {
      number: "6–8",
      title: "Туризм и развлечения",
      description: "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
      benefit: "Погружение в культурный контекст через язык.",
      icon: Globe,
      color: "orange"
    },
    {
      number: "7",
      title: "Дружба в путешествиях",
      description: "Как познакомиться с другими детьми или подростками за границей.",
      benefit: "Игровая практика диалогов и неформального общения.",
      icon: MessageCircle,
      color: "cyan"
    },
    {
      number: "8",
      title: "Дипломный проект: «Мой идеальный отпуск»",
      description: "Ребёнок планирует воображаемое путешествие и представляет его на английском.",
      benefit: "Развитие связной речи и творческого самовыражения.",
      icon: BookOpen,
      color: "amber"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "cyan":
        return {
          bg: "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20",
          icon: "from-cyan-500 to-cyan-600",
          text: "text-cyan-400",
          arrow: "text-cyan-400"
        };
      case "amber":
        return {
          bg: "from-amber-500/10 to-amber-500/5 border-amber-500/20",
          icon: "from-amber-500 to-amber-600",
          text: "text-amber-400",
          arrow: "text-amber-400"
        };
      case "orange":
        return {
          bg: "from-orange-500/10 to-orange-500/5 border-orange-500/20",
          icon: "from-orange-500 to-orange-600",
          text: "text-orange-400",
          arrow: "text-orange-400"
        };
      default:
        return {
          bg: "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20",
          icon: "from-cyan-500 to-cyan-600",
          text: "text-cyan-400",
          arrow: "text-cyan-400"
        };
    }
  };

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
            <span className="text-sm text-amber-400">📚 Программа курса</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Что будем изучать
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
            8 практических модулей для уверенного общения в любой ситуации
          </p>
        </div>

        {/* Modules */}
        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const colors = getColorClasses(module.color);
            
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${colors.bg} border backdrop-blur-sm hover:scale-102 transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${colors.icon} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className={`text-xl text-white`}>{module.title}</h3>
                      <span className={`text-sm ${colors.text} opacity-70`}>#{module.number}</span>
                    </div>
                    <p className="text-slate-300 mb-3 text-sm leading-relaxed">
                      {module.description}
                    </p>
                    <div className={`flex items-start gap-2 p-3 rounded-xl bg-slate-900/50 border border-slate-700/50`}>
                      <ChevronRight className={`w-4 h-4 ${colors.arrow} mt-0.5 flex-shrink-0`} />
                      <p className={`text-sm ${colors.text}`}>
                        {module.benefit}
                      </p>
                    </div>
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