import { Plane, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated icons */}
      <div className="hidden md:block absolute top-20 left-10 opacity-20 animate-pulse">
        <Plane className="w-16 h-16 text-cyan-400" />
      </div>
      <div className="hidden md:block absolute bottom-20 right-10 opacity-20 animate-pulse delay-1000">
        <Globe className="w-20 h-20 text-amber-400" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-amber-500/20 border border-cyan-500/30 mb-8">
          <Plane className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-300">Онлайн-курс английского</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl mb-6 bg-gradient-to-r from-cyan-400 via-amber-300 to-orange-400 bg-clip-text text-transparent px-4">
          Английский для путешествий
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
          Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится 
          в отпуске, поездках и будущих путешествиях!
        </p>

        {/* CTA Button */}
        <a 
          href="#cta" 
          className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-amber-500 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
        >
          <span>Записаться на курс</span>
          <Plane className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}