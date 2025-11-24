import { motion } from "framer-motion";
import { useState } from "react";

interface StatsCardProps {
  label: string;
  value: string;
  color: string;
  index: number;
}

const StatsCard = ({ label, value, color, index }: StatsCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        z: 50,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer perspective-1000"
    >
      <div 
        className="relative p-8 rounded-2xl backdrop-blur-xl border-2 transition-all duration-300"
        style={{
          background: 'var(--glass-bg)',
          borderColor: isHovered ? 'rgba(255, 255, 255, 0.4)' : 'var(--glass-border)',
          boxShadow: isHovered 
            ? '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.1)'
            : '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.05)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Gradient overlay on hover */}
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
        />
        
        {/* Glow effect */}
        <motion.div
          className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-br ${color}`}
        />
        
        <div className="relative z-10">
          <motion.div 
            className={`text-5xl md:text-6xl font-orbitron font-black mb-2 bg-gradient-to-br ${color} bg-clip-text text-transparent`}
            animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            {value}
          </motion.div>
          
          <div className="text-lg md:text-xl font-poppins font-semibold text-white/80">
            {label}
          </div>
        </div>

        {/* Corner accent */}
        <motion.div
          className={`absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-br ${color}`}
          animate={isHovered ? {
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
};

export default StatsCard;
