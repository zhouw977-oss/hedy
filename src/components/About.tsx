import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 border-b border-border" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Section Title */}
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-display font-bold mb-8">Basic Info</h2>
          <p className="text-white/60 leading-relaxed">
            科班出身，2年平面设计成熟经验。<br/>
            具备品牌自媒体运营视觉设计成熟经验，以及包装设计从调研立项到落地的全流程经验。
          </p>
        </div>

        {/* Details Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Experience */}
          <div>
            <h3 className="text-sm font-mono uppercase text-white/40 mb-6 tracking-widest">Experience</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold">上海四个石头广告公司</h4>
                <p className="text-sm text-white/60 mb-2">平面设计（正式）</p>
                <p className="text-sm text-white/50 leading-relaxed">
                  负责松下电器旗下卫浴和康养品牌的双微、小红书运营内容及线下物料；
                  负责贵宴樽与艺术家跨界联名活动视觉。
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold">上海微盟企业发展有限公司</h4>
                <p className="text-sm text-white/60 mb-2">平面设计（实习）</p>
                <p className="text-sm text-white/50 leading-relaxed">
                  独立负责雀巢公众号推文设计，TEAMPRO视频号运营设计；
                  参与薇诺娜、百雀羚等美妆项目视觉设计。
                </p>
              </div>
            </div>
          </div>

          {/* Clients & Skills */}
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-mono uppercase text-white/40 mb-6 tracking-widest">Selected Clients</h3>
              <ul className="space-y-3 text-white/80">
                <li className="border-b border-border pb-2">松下电器 (Panasonic)</li>
                <li className="border-b border-border pb-2">东方航空 (China Eastern)</li>
                <li className="border-b border-border pb-2">君乐宝 (Junlebao)</li>
                <li className="border-b border-border pb-2">薇诺娜 (Winona)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-mono uppercase text-white/40 mb-6 tracking-widest">Tools</h3>
              <p className="text-white/60 leading-relaxed">
                Photoshop, Illustrator, After Effects, Blender, ZBrush, Figma, Midjourney
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
