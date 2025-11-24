import { motion } from "framer-motion";

const TimelineSection = () => {
  const achievements = [
    { year: "Year Start", title: "Tutorial Complete", desc: "Mastered the basics and ready to dominate" },
    { year: "Q1", title: "First Boss Defeated", desc: "Overcame major challenges like a champion" },
    { year: "Q2", title: "Level Cap Broken", desc: "Exceeded all expectations and limits" },
    { year: "Q3", title: "Legendary Status", desc: "Achieved what others only dream about" },
    { year: "Now", title: "God Mode Unlocked", desc: "Operating at peak performance 24/7" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-20 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-orbitron font-black text-center mb-12 text-[hsl(var(--neon-purple))]"
        style={{ textShadow: '0 0 30px hsl(var(--neon-purple))' }}
      >
        ⚡ TIMELINE OF AWESOMENESS ⚡
      </h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[hsl(var(--neon-cyan))] via-[hsl(var(--neon-purple))] to-[hsl(var(--neon-magenta))]"
          style={{ boxShadow: '0 0 20px hsl(var(--neon-cyan))' }}
        />
        
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? -2 : 2 }}
                className="p-6 rounded-2xl backdrop-blur-xl border-2 cursor-pointer"
                style={{
                  background: 'var(--glass-bg)',
                  borderColor: 'var(--glass-border)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div className="text-sm font-mono text-[hsl(var(--neon-cyan))] mb-2">{achievement.year}</div>
                <h3 className="text-2xl font-orbitron font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-white/70 font-poppins">{achievement.desc}</p>
              </motion.div>
            </div>
            
            {/* Center dot */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white z-10"
              style={{
                background: `hsl(${index * 60}, 100%, 50%)`,
                boxShadow: `0 0 20px hsl(${index * 60}, 100%, 50%)`
              }}
              whileHover={{ scale: 1.5 }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TimelineSection;
