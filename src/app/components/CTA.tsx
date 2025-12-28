import { Plane, Globe, ChevronRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500/20 via-amber-500/20 to-orange-500/20 border-2 border-cyan-500/30 p-12 md:p-16 backdrop-blur-sm">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
          
          {/* Content */}
          <div className="relative z-10 text-center">
            <div className="flex justify-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg animate-bounce">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg animate-bounce delay-150">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Готовы начать путешествие?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
            </p>

            {/* CTA Button */}
            <a
              href="mailto:info@example.com"
              className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-cyan-500 via-amber-500 to-orange-500 text-white text-base md:text-lg rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110"
            >
              <span>Записаться на курс</span>
              <ChevronRight className="w-6 h-6" />
            </a>

            <p className="mt-6 text-sm text-slate-400">
              Или напишите нам на <a href="mailto:info@example.com" className="text-cyan-400 hover:text-cyan-300 underline">info@example.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}