import { CreditCard, Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      title: "Полный курс",
      price: "12 000 руб",
      description: "10 уроков",
      features: [
        "Все 8 модулей программы",
        "Дипломный проект",
        "Сертификат об окончании",
        "Доступ к материалам"
      ],
      highlighted: true,
      color: "cyan"
    },
    {
      title: "Абонемент",
      price: "1 300 руб",
      description: "за урок",
      features: [
        "Гибкий график",
        "Можно продлить",
        "Доступ к материалам урока",
        "Индивидуальный подход"
      ],
      highlighted: false,
      color: "amber"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-amber-500/10 border border-cyan-500/30 mb-4">
            <CreditCard className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">💳 Стоимость</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Выберите формат обучения
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
            Гибкие варианты оплаты для вашего удобства
          </p>
        </div>

        {/* Pricing cards */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => {
            const colorClasses = plan.color === "cyan" 
              ? {
                  bg: plan.highlighted ? "from-cyan-500/30 to-cyan-500/10" : "from-cyan-500/20 to-cyan-500/5",
                  border: plan.highlighted ? "border-cyan-400/50" : "border-cyan-500/30",
                  icon: "from-cyan-500 to-cyan-600",
                  badge: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
                  check: "text-cyan-400"
                }
              : {
                  bg: "from-amber-500/20 to-amber-500/5",
                  border: "border-amber-500/30",
                  icon: "from-amber-500 to-amber-600",
                  badge: "bg-amber-500/20 text-amber-300 border-amber-400/30",
                  check: "text-amber-400"
                };
            
            return (
              <div
                key={index}
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${colorClasses.bg} border-2 ${colorClasses.border} backdrop-blur-sm hover:scale-105 transition-transform duration-300 ${plan.highlighted ? 'shadow-2xl shadow-cyan-500/20' : ''}`}
              >
                {plan.highlighted && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full ${colorClasses.badge} border text-sm`}>
                    Лучшее предложение
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl text-white mb-2">{plan.title}</h3>
                  <div className={`text-4xl ${plan.color === "cyan" ? "text-cyan-400" : "text-amber-400"} mb-2`}>
                    {plan.price}
                  </div>
                  <p className="text-slate-400">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${colorClasses.check} flex-shrink-0 mt-0.5`} />
                      <p className="text-slate-300">{feature}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="#cta"
                  className={`block w-full py-3 px-6 rounded-full text-center bg-gradient-to-r ${plan.color === "cyan" ? "from-cyan-500 to-cyan-600" : "from-amber-500 to-amber-600"} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Выбрать
                </a>
              </div>
            );
          })}
        </div>

        {/* Additional note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30">
          <p className="text-lg text-orange-300">
            📢 Набор открыт! Места ограничены — запишитесь сейчас!
          </p>
        </div>
      </div>
    </section>
  );
}