import { Globe, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-amber-500 flex items-center justify-center shadow-lg">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white">Английский для путешествий</h3>
              <p className="text-sm text-slate-400">Онлайн-курс для детей</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm flex items-center gap-2 justify-center md:justify-end">
              Создано с <Heart className="w-4 h-4 text-red-500 fill-red-500" /> для юных путешественников
            </p>
            <p className="text-slate-500 text-xs mt-1">
              © 2025 Английский для путешествий. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
