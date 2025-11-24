import { motion } from "framer-motion";

const WishesWall = () => {
  const wishes = [
    { text: "May your coffee be strong and your Monday be short! ☕", color: "from-yellow-400 to-orange-500" },
    { text: "Level up IRL just like in games! 🎮", color: "from-purple-400 to-pink-500" },
    { text: "More plot twists than a Netflix series! 🎬", color: "from-cyan-400 to-blue-500" },
    { text: "Unlimited snack refills! 🍕", color: "from-green-400 to-emerald-500" },
    { text: "WiFi that never fails! 📶", color: "from-red-400 to-rose-500" },
    { text: "Main character energy 24/7! ⭐", color: "from-indigo-400 to-purple-500" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-20 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-orbitron font-black text-center mb-12 text-[hsl(var(--neon-yellow))]"
        style={{ textShadow: '0 0 30px hsl(var(--neon-yellow))' }}
      >
        🎁 BIRTHDAY WISHES WALL 🎁
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishes.map((wish, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", bounce: 0.5 }}
            whileHover={{ 
              scale: 1.05, 
              rotateZ: 3,
              y: -10 
            }}
            className="relative group cursor-pointer"
          >
            <div 
              className="p-6 rounded-2xl backdrop-blur-xl border-2 h-full"
              style={{
                background: 'var(--glass-bg)',
                borderColor: 'var(--glass-border)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
            >
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${wish.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />
              
              <p className="relative z-10 text-lg font-poppins text-white/90 leading-relaxed">
                {wish.text}
              </p>
              
              {/* Sparkle effect */}
              <motion.div
                className="absolute top-2 right-2 text-2xl"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WishesWall;
