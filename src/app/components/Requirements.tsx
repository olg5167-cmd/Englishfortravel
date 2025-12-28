import { Laptop, Wifi, Check } from "lucide-react";

export function Requirements() {
  const requirements = [
    {
      text: "Стационарный компьютер или ноутбук с наушниками и микрофоном",
      icon: Laptop,
      color: "cyan"
    },
    {
      text: "Стабильный интернет и Zoom",
      icon: Wifi,
      color: "amber"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
            <span className="text-sm text-cyan-400">💻 Что потребуется</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Технические требования
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
            Всё, что нужно для комфортного обучения
          </p>
        </div>

        {/* Requirements list */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {requirements.map((req, index) => {
            const Icon = req.icon;
            const colorClasses = req.color === "cyan" 
              ? {
                  bg: "from-cyan-500/20 to-cyan-500/5",
                  border: "border-cyan-500/30",
                  icon: "from-cyan-500 to-cyan-600"
                }
              : {
                  bg: "from-amber-500/20 to-amber-500/5",
                  border: "border-amber-500/30",
                  icon: "from-amber-500 to-amber-600"
                };
            
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses.icon} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2">
                      <Check className={`w-5 h-5 ${req.color === "cyan" ? "text-cyan-400" : "text-amber-400"} flex-shrink-0 mt-0.5`} />
                      <p className="text-slate-200 leading-relaxed">{req.text}</p>
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