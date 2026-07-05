import { motion } from 'framer-motion';
import { PenTool, Video, Layers, Layout, Sparkles, Target, Users, Zap } from 'lucide-react';
import { useEffect } from 'react';

const tools = [
  { id: 'figma', name: 'Figma', icon: Layout, delay: 0.2, color: 'text-purple-500', bg: 'bg-purple-50' },
  { id: 'premiere', name: 'Premiere Pro', icon: Video, delay: 0.3, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 'aftereffects', name: 'After Effects', icon: Layers, delay: 0.4, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { id: 'illustrator', name: 'Illustrator', icon: PenTool, delay: 0.5, color: 'text-orange-500', bg: 'bg-orange-50' },
];

const values = [
  {
    title: 'Precision',
    description: '작은 디테일 하나도 놓치지 않는 정밀함으로 완벽한 결과물을 추구합니다.',
    icon: Target,
  },
  {
    title: 'Collaboration',
    description: '고객과 한 팀이 되어 목표를 공유하고 유기적으로 소통하며 작업합니다.',
    icon: Users,
  },
  {
    title: 'Innovation',
    description: '틀에 박힌 방식을 넘어 항상 새롭고 효율적인 솔루션을 제시합니다.',
    icon: Zap,
  }
];

export const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us - WeWeb';
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden bg-gray-50 text-deep-black rounded-b-[3rem] lg:rounded-b-[5rem] mx-2 lg:mx-6">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blood-coral rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white backdrop-blur-sm border border-gray-200 text-sm font-bold text-gray-600 mb-6 shadow-sm">
              Our Story
            </span>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-8">
              We Craft <span className="text-blood-coral">Digital</span> Experiences
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              WeWeb은 단순한 웹 에이전시를 넘어, 당신의 브랜드 스토리를 디지털 공간에서 가장 매력적으로 전달하는 크리에이티브 파트너입니다.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 text-blood-coral/5 pointer-events-none"
        >
          <Sparkles size={400} strokeWidth={0.5} />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-deep-black mb-6">Meticulous Detail</h2>
              <div className="w-12 h-1 bg-blood-coral mb-8 rounded-full"></div>
              <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
                디자인부터 영상 편집까지, 감각적인 기술력과 디테일한 설계 능력으로 프로젝트를 공중에 띄우듯 한 차원 끌어올립니다. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                우리가 사용하는 모든 도구는 최적의 결과물을 위한 정밀한 조절을 거치며, 시각적인 아름다움뿐만 아니라 사용자 경험의 본질을 깊이 고민합니다.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4 lg:gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: tool.delay }}
                  className="group flex flex-col items-center justify-center p-8 bg-gray-50 rounded-3xl hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl ${tool.bg} ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{tool.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-deep-black mb-4">Our Core Values</h2>
            <p className="text-gray-500 font-light">우리가 일하는 방식과 믿음을 소개합니다.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-6">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-deep-black">{value.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
