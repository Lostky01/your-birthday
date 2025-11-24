import { motion } from "framer-motion";

const MemoryCards = () => {
  const memories = [
    { emoji: "🎯", title: "Achievement Unlocked", desc: "Completed impossible tasks" },
    { emoji: "🚀", title: "Launch Success", desc: "Started amazing new projects" },
    { emoji: "💪", title: "Strength Gained", desc: "Overcame every obstacle" },
    { emoji: "🧠", title: "Wisdom +100", desc: "Learned incredible things" },
    { emoji: "❤️", title: "Connections Made", desc: "Built amazing relationships" },
    { emoji: "🌟", title: "Dreams Chased", desc: "Never stopped believing" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-20 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-orbitron font-black text-center mb-12 text-[hsl(var(--neon-magenta))]"
        style={{ textShadow: '0 0 30px hsl(var(--neon-magenta))' }}
      >
        📸 LEGENDARY MOMENTS 📸
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ 
              rotateY: 10,
              rotateX: 5,
              z: 50,
              scale: 1.05
            }}
            className="relative group cursor-pointer"
            style={{ perspective: '1000px' }}
          >
            <div 
              className="p-8 rounded-3xl backdrop-blur-xl border-2 h-full transition-all duration-300"
              style={{
                background: 'var(--glass-bg)',
                borderColor: 'var(--glass-border)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Gradient glow on hover */}
              <motion.div
                className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background: `linear-gradient(135deg, hsl(${index * 60}, 100%, 50%), hsl(${(index * 60 + 60) % 360}, 100%, 50%))`
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="text-6xl mb-4 inline-block"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {memory.emoji}
                </motion.div>
                
                <h3 className="text-2xl font-orbitron font-bold text-white mb-3">
                  {memory.title}
                </h3>
                
                <p className="text-lg font-poppins text-white/80">
                  {memory.desc}
                </p>
              </div>

              {/* Floating corner decoration */}
              <motion.div
                className="absolute bottom-4 right-4 w-4 h-4 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  background: `hsl(${index * 60}, 100%, 50%)`,
                  boxShadow: `0 0 20px hsl(${index * 60}, 100%, 50%)`
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MemoryCards;
