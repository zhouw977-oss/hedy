import { Instagram, Linkedin, Dribbble, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-32 bg-surface text-white relative overflow-hidden" id="contact">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 uppercase tracking-tighter">
          Let's Create <br/>Something Cool
        </h2>
        <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto">
          期待与您合作，创造更多可能性。
        </p>
        
        <div className="flex flex-col items-center gap-6 mb-20">
          <a 
            href="mailto:614450038@qq.com" 
            className="group relative inline-flex items-center gap-4 text-3xl md:text-5xl font-bold hover:text-white/80 transition-colors"
          >
            <span>614450038@qq.com</span>
            <ArrowRight className="w-8 h-8 md:w-12 md:h-12 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <p className="text-xl font-mono text-white/50 bg-white/5 px-6 py-2 rounded-full border border-white/10">
            Phone / WeChat: <span className="text-white">131 3666 0580</span>
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-20">
          {[Instagram, Linkedin, Dribbble].map((Icon, i) => (
            <a key={i} href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-mono text-white/30 pt-8 border-t border-white/10">
          <p>&copy; 2024 Portfolio. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with Passion</p>
        </div>
      </div>
    </footer>
  );
}
