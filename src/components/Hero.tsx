import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col pt-32 pb-12 px-6 md:px-12 lg:px-24 relative border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full items-center">
        
        {/* Left: Big Intro */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
              WANG<br/>
              HUIFEI.
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-xl font-light leading-relaxed">
              市场专员 | 专注品牌视觉与新媒体内容<br/>
              <span className="text-sm mt-4 block opacity-50 font-mono">MARKETING SPECIALIST & DESIGNER</span>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex gap-4"
          >
             <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest opacity-50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for work
             </div>
          </motion.div>
        </div>

        {/* Right: Avatar & Info */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden border border-white/10"
          >
            <img 
              src="https://picsum.photos/seed/avatar/800/1000" 
              alt="Wang Huifei" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <div className="flex flex-wrap gap-2">
                {["Brand Identity", "Social Media", "Packaging"].map(tag => (
                  <span key={tag} className="text-xs border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white/90">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
