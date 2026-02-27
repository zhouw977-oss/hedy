import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "品牌设计 & 自媒体运营",
    category: "Brand Design",
    description: "自媒体视觉运营 / 海报KV / 动效推文 / 插画H5",
    image: "https://picsum.photos/seed/brand/800/600",
    year: "2023",
    tags: ["WeChat", "RedNote", "Visual Identity"]
  },
  {
    id: 2,
    title: "IP形象设计",
    category: "Character Design",
    description: "古伦木沓节系列IP / 大眼蛙IP",
    image: "https://picsum.photos/seed/ip/800/800",
    year: "2023",
    tags: ["3D Modeling", "Character", "Merch"]
  },
  {
    id: 3,
    title: "包装设计",
    category: "Packaging",
    description: "君乐宝恬适包装升级 / 倍启智包装设计 / KV&POSM",
    image: "https://picsum.photos/seed/pack/800/500",
    year: "2022",
    tags: ["FMCG", "Structure", "Visual"]
  },
  {
    id: 4,
    title: "插画 & 文创",
    category: "Illustration",
    description: "华漕国际社区手绘地图 / 海南有黎品牌文创 / 中央大街插画",
    image: "https://picsum.photos/seed/draw/800/700",
    year: "2022",
    tags: ["Hand-drawn", "Cultural", "Map"]
  }
];

export default function WorkGrid() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-32" id="work">
      <div className="flex items-end justify-between mb-20">
        <div>
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-4">
            Selected Works
          </h2>
          <p className="text-white/60 max-w-md">
            结合市场策略与视觉创意的精选案例
          </p>
        </div>
        <span className="font-mono text-white/40 text-sm border border-white/20 px-4 py-2 rounded-full hidden md:block">
          2022 — 2024
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative bg-surface rounded-lg overflow-hidden border border-white/5 hover:border-white/30 transition-colors duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="p-8 relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-white/60 bg-white/5 px-2 py-1 rounded border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.div 
                  className="bg-white/10 p-2 rounded-full text-white group-hover:bg-white group-hover:text-black transition-colors"
                  whileHover={{ rotate: 45 }}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-white/60 mb-4 font-light text-sm">
                {project.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-mono opacity-40">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
