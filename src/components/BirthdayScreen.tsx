import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import confetti from "canvas-confetti";
import { 
  Heart, 
  Sparkles, 
  Star, 
  Cake, 
  PartyPopper, 
  Crown,
  Zap,
  Gamepad2,
  Music,
  Gift,
  Trophy,
  Rocket,
  Pizza,
  Coffee,
  Sun,
  Moon,
  Cloud,
  Target,
  Flame,
  Wand2,
  Snowflake,
  StarIcon,
  MoonStarIcon
} from "lucide-react";
import { Button } from "./ui/button";

const BirthdayScreen = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const triggerConfetti = () => {
    const count = 500;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#FF69B4', '#87CEEB', '#DDA0DD', '#FFB6C1', '#B0E0E6']
    };
    

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  useEffect(() => {
        triggerConfetti(); 
    }, []);

  const collectCoin = () => {
    setScore(score + 100);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FFA500']
    });
  };

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FF69B4] via-[#DDA0DD] to-[#87CEEB]">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border border-white/20" />
          ))}
        </div>
      </div>

      {[...Array(30)].map((_, i) => (
    <motion.div
        key={i}
        className="absolute"
        style={{
            // Using '%' for responsiveness and performance
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
        }}
        animate={{
            y: [0, -40, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.7, 0.1],
        }}
        transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
        }}
    >
        {/* Expanded Icon Selection and Random Size */}
        {(() => {
            const icons = [MoonStarIcon, Sparkles, Cloud, Star, Snowflake, Zap];
            const IconComponent = icons[i % icons.length];
            // Randomize size between w-4/h-4 and w-7/h-7
            const size = Math.floor(Math.random() * 10) + 10; 
            
            const color = i % 2 === 0 
                ? 'hsl(var(--pixel-yellow))' 
                : 'hsl(var(--pixel-yellow))';

            return (
                <IconComponent 
                    className={`w-${size} h-${size}`} 
                    style={{ color: color }} 
                    fill={i % 3 === 0 ? "currentColor" : "none"} // Fill some icons
                />
            );
        })()}
    </motion.div>
))}

      {/* Mouse Follower Sparkle */}
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        <Sparkles className="text-white/60" size={40} />
      </motion.div>

      {/* Score Display */}
      <motion.div
        className="fixed top-8 right-8 z-50 font-pixel text-yellow-300 text-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}
      >
        SCORE: {score}
      </motion.div>

      <div className="relative z-10 px-4 py-12 space-y-32">
        {/* Hero Section */}
        <motion.section 
          className="min-h-screen flex flex-col items-center justify-center text-center space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="pixel-border p-8 bg-gradient-to-r from-pink-500/80 to-blue-500/80 backdrop-blur-sm"
            animate={{ 
              boxShadow: ['0 0 20px rgba(255,105,180,0.5)', '0 0 40px rgba(135,206,235,0.5)', '0 0 20px rgba(255,105,180,0.5)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.h1 
              className="font-pixel text-4xl md:text-7xl sm:text-5xl text-white mb-4"
              style={{ textShadow: '6px 6px 0px rgba(0,0,0,0.3)' }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              HAPPY BIRTHDAY!
            </motion.h1>
            <motion.p 
              className="font-retro text-2xl md:text-4xl   text-yellow-300"
              style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}
            >
              FALAH LEVEL UP ! +1 YEAR
            </motion.p>
          </motion.div>

         <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex justify-center" // Added for center alignment
          >
              <Button
                  onClick={triggerConfetti}
                  className="font-pixel text-lg sm:text-xl px-6 py-4 sm:px-12 sm:py-8 
                             bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 
                             pixel-border shadow-[4px_4px_0px_rgba(0,0,0,0.3)] sm:shadow-[8px_8px_0px_rgba(0,0,0,0.3)]
                             max-w-xs sm:max-w-md w-auto" 
              >
                  🎉 SPAM CONFETTI 🎉
              </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-4 mt-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[Gamepad2, Music, Cake].map((Icon, i) => (
              <motion.div
                key={i}
                className="pixel-border p-4 bg-white/10 backdrop-blur-sm"
                whileHover={{ y: -10, scale: 1.1 }}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity 
                }}
              >
                <Icon className="text-white" size={48} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Retro Messages Section */}
        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-pixel text-4xl text-center text-white mb-12" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
            POWER-UPS UNLOCKED 
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {[
              { icon: "⭐", title: "System Update Required", text: "Selamat! Lu resmi naik versi. Bug masih banyak, fitur baru belum tentu berguna, tapi hey, setidaknya lu masih jalan tanpa eror." },
              { icon: "👑", title: "Achievement: Still Surviving", text: "Lu berhasil melewati 365 hari penuh drama, random anxiety, overthinking jam 10 malem, dan realitas yang kadang ga sesuai ekspektasi. Proud of you king👑" },
              { icon: "✨", title: "Worldwide Announcement", text: "Peneliti menemukan spesies langka yang tambah umur tapi tetep keliatan keren. Spoiler: itu lu. Humanity grateful, bumi aman." },
              { icon: "🌙", title: "Fun Fact of The Day", text: "Semakin tua lu, semakin gede value lu, kaya NFT tapi yang ga scam. Harganya naik karena personality nya, bukan hype doang." }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="pixel-border p-6 bg-gradient-to-br from-purple-500/80 to-pink-500/80 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer"
                whileHover={{ 
                  y: -10,
                  boxShadow: '12px 12px 0px rgba(0,0,0,0.3)'
                }}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
              >
                <div className="text-6xl mb-4 text-center">{item.icon}</div>
                <h3 className="font-pixel text-lg text-yellow-300 mb-2 text-center" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}>
                  {item.title}
                </h3>
                <p className="font-retro text-xl text-white text-center">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pixel Stats Section */}
        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-pixel text-4xl text-center text-white mb-12" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
            PLAYER STATS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { stat: "COOLNESS", value: 99, color: "from-pink-500 to-red-500" },
              { stat: "SASS LEVEL", value: 100, color: "from-purple-500 to-pink-500" },
              { stat: "HUMOR", value: 95, color: "from-blue-500 to-cyan-500" },
              { stat: "VIBES", value: 98, color: "from-yellow-500 to-orange-500" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="pixel-border p-6 bg-black/40 backdrop-blur-sm"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: "spring" }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-pixel text-white text-sm">{item.stat}</span>
                  <span className="font-pixel text-yellow-300 text-sm">{item.value}%</span>
                </div>
                <div className="h-6 bg-gray-700 pixel-border overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${item.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.3, duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Coin Collector Game */}
        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-pixel text-4xl text-center text-white mb-12" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
            COLLECT COINS!
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[...Array(10)].map((_, i) => (
              <motion.button
                key={i}
                onClick={collectCoin}
                className="pixel-border p-8 bg-yellow-400 hover:bg-yellow-300 text-6xl transition-colors"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.8 }}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity 
                }}
              >
                🪙
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Achievement Cards */}
        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-pixel text-4xl text-center text-white mb-12" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
            ACHIEVEMENTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Trophy, title: "Birthday Royalty", desc: "Resmi naik level lagi, tapi skill point masih misteri." },
              { icon: Target, title: "Goal Getter", desc: "Udah bikin target… terus lupa… terus bikin target baru. Siklus sehat." },
              { icon: Flame, title: "Streak Master", desc: "365 hari bertahan dari drama, overthinking, dan hidup. Speedrun-nya GG." },
              { icon: Gift, title: "Present Collector", desc: "Expert at looking surprised" },
              { icon: Wand2, title: "Magic Maker", desc: "Bikin hari biasa jadi chaos tapi unik. Literally spellcaster IRL." },
              { icon: Rocket, title: "Sky Reacher", desc: "Aimed for moon, hit ceiling fan" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="pixel-border p-6 bg-gradient-to-br from-blue-500/80 to-purple-500/80 backdrop-blur-sm"
                initial={{ rotateY: -90, opacity: 0 }}
                whileInView={{ rotateY: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring" }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '12px 12px 0px rgba(0,0,0,0.3)'
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <item.icon className="text-yellow-300 mx-auto mb-4" size={64} />
                </motion.div>
                <h3 className="font-pixel text-white text-center mb-2" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}>
                  {item.title}
                </h3>
                <p className="font-retro text-xl text-white/90 text-center">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Fortune Cookie Predictions */}
        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-pixel text-4xl text-center text-white mb-12" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
            BIRTHDAY PREDICTIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "🙏", prediction: "Tahun ini lu bakal niat mulai hidup produktif. Niatnya besar. Eksekusinya… ya nanti liat aja." },
              { icon: "📱", prediction: "Akan ada pesan penting masuk. Setelah dicek… promo marketplace. Lagi. Selalu." },
              { icon: "🎯", prediction: "Lu bakal mencapai sesuatu yang besar tahun ini. Masalahnya, kita semua belum tau apaan." },
              { icon: "📺", prediction: "To do list lu bakal makin panjang. Lu tambahin doang, Lakuinnya enggak." }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="pixel-border p-6 bg-gradient-to-br from-purple-500/80 to-pink-500/80 backdrop-blur-sm"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring" }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 3
                }}
              >
                <motion.div
                  className="text-6xl mb-4 text-center"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  {item.icon}
                </motion.div>
                <p className="font-retro text-xl text-white text-center leading-relaxed">
                  {item.prediction}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Birthday Wishes Section */}
        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-pixel text-4xl text-center text-white mb-8" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
            WISHES FOR YOU
          </h2>
          <motion.div
            className="max-w-3xl mx-auto pixel-border p-8 bg-gradient-to-br from-pink-500/80 to-blue-500/80 backdrop-blur-sm mb-12"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { emoji: "🌟", text: "Semoga tahun ini otak lu nge-load lebih cepet dari WiFi jam 2 pagi. Minimal ga ngelag pas belajar lah." },
              { emoji: "🎯", text: "Semoga lu akhirnya ngerti cara percaya diri tanpa harus didorong maju dulu😁." },
              { emoji: "💰", text: "Semoga saldo lu naik terus dan cicilan mental lu turun. Hidup udah susah, jangan ditambah beban sendiri." },
              { emoji: "😴", text: "Semoga lu bisa tidur bener. Bukan tidur jam 3, bangun jam 7, terus bilang 'kok pusing ya'." },
              { emoji: "🧠", text: "Semoga lu sadar kalo lu nggak se-'lemot' yang lu kira. Otak lu cuma suka warming up dulu kayak motor carb." },
              { emoji: "🍕", text: "Semoga semua makanan favorit lu auto nol kalori. Biar lu makan santai tanpa self-hate 5 menit setelahnya." },
              { emoji: "✨", text: "Semoga vibe lu tetep se-unik itu. Dunia butuh orang random tapi wholesome kayak lu." },
              { emoji: "🔥", text: "Semoga semangat lu nggak mati tengah jalan. Kalo mati? Yaudah tinggal gw jumper lagi." },
              { emoji: "🚀", text: "Semoga lu makin berani nyoba hal baru. Kalo takut? Tenang… lu kan udah biasa takut duluan." }
            ].map((wish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0]
                }}
                className="pixel-border p-6 bg-white/10 backdrop-blur-sm cursor-pointer"
              >
                <motion.div 
                  className="text-5xl mb-3 text-center"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {wish.emoji}
                </motion.div>
                <p className="font-retro text-xl text-white text-center leading-snug">
                  {wish.text}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.p
              className="font-retro text-2xl text-white text-center leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Semoga lu makin percaya sama diri lu sendiri. Karena kalo lu masih nggak percaya… ya gimana? Masa gw mulu yang percaya.
              <br />
              <span className="font-pixel text-yellow-300">
                (Im counting on you)
              </span>
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Reasons You're Awesome */}
        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-pixel text-4xl text-center text-white mb-12" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
            WHY YOU&apos;RE AWESOME
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Lu punya bakat spesial: bikin hidup chaos tapi somehow tetep jalan. Aneh, tapi works.",
              "Insting lu tuh 50% genius, 50% hoki. Persentasenya berubah tiap hari.",
              "Keputusan-keputusan lu selalu bikin gw mikir, 'ini jenius apa ngasal?'. Jawabannya: yes.",
              "Lu punya talent bikin situasi awkward jadi… slightly less awkward. Improvement is improvement.",
              "Sense of humor lu tuh kayak bug di software: ga masuk akal, tapi bikin orang ketawa.",
              "Energy lu tuh 'capek tapi tetep menang'. Respect, honestly."
            ].map((reason, i) => (
              <motion.div
                key={i}
                className="pixel-border p-6 bg-gradient-to-br from-yellow-400/80 to-orange-500/80 backdrop-blur-sm"
                initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-retro text-xl text-white text-center leading-relaxed">
                  {reason}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pixel Art Cake */}
        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="font-pixel text-4xl text-center text-white mb-12" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
            CLICK THE CAKE!
          </h2>
          <motion.div
            className="max-w-md mx-auto pixel-border p-12 bg-gradient-to-br from-pink-500/80 to-purple-500/80 backdrop-blur-sm cursor-pointer"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerConfetti}
          >
            <motion.div
              className="text-center text-9xl"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎂
            </motion.div>
            <div className="flex justify-center gap-4 mt-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="text-4xl"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{ 
                    duration: 1,
                    delay: i * 0.1,
                    repeat: Infinity 
                  }}
                >
                  🕯️
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Power-Up Items */}
        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-pixel text-4xl text-center text-white mb-12" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
            BIRTHDAY LOOT
          </h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {[Gift, Pizza, Coffee, Music, PartyPopper, Sparkles].map((Icon, i) => (
              <motion.div
                key={i}
                className="pixel-border p-8 bg-gradient-to-br from-yellow-400 to-orange-500 cursor-pointer"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  boxShadow: '12px 12px 0px rgba(0,0,0,0.3)'
                }}
                whileTap={{ scale: 0.8 }}
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity 
                }}
              >
                <Icon size={64} className="text-white" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Epic Finale */}
        <motion.section
          className="min-h-screen flex flex-col items-center justify-center space-y-12"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          <motion.div
            className="pixel-border p-12 bg-gradient-to-r from-pink-500/90 to-purple-500/90 backdrop-blur-sm max-w-3xl"
            animate={{ 
              boxShadow: [
                '0 0 40px rgba(255,105,180,0.8)',
                '0 0 80px rgba(135,206,235,0.8)',
                '0 0 40px rgba(255,105,180,0.8)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.h2 
              className="font-pixel text-3xl md:text-5xl text-center text-white mb-8"
              style={{ textShadow: '6px 6px 0px rgba(0,0,0,0.3)' }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              YOU&apos;RE LEGENDARY
            </motion.h2>
            
            <p className="font-retro text-2xl md:text-3xl text-center text-white leading-relaxed mb-6">
              Selamat datang di season baru hidup lu, masih ikonik, masih fabulous, masih bikin orang mikir &quot;gimana caranya lu tetep keren sambil chaos&quot;.
            </p>

            <p className="font-retro text-xl md:text-2xl text-center text-yellow-300 mb-6">
              Oh iya, 10 hari lagi UTS, jadi jangan terlalu shining shimmering splendid sampe lupa belajar, king.
            </p>

            <motion.p
              className="font-retro text-2xl md:text-3xl text-center text-yellow-300"
              /* style={{ color: 'hsl(var(--pixel-yellow))' }} */
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Now stop reading and go celebrate! Sorry for the Corny message tho 🎉✨
            </motion.p>
          </motion.div>

          <motion.div
            className="flex gap-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {[PartyPopper, Cake, StarIcon].map((Icon, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -30, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Infinity 
                }}
              >
                <Icon size={80} className="text-white" />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>

      <style>{`
        .pixel-border {
          border: 4px solid #fff;
          box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.3);
          image-rendering: pixelated;
        }
      `}</style>
    </div>
  );
};

export default BirthdayScreen;
