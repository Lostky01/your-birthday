import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { Heart, Sparkles, Star, Cake, PartyPopper, Crown, TrendingUp, Zap, Coffee, Music, Smile, Gift, Flame, Trophy, Target, Wand2, Rocket, Moon, MoonStarIcon } from "lucide-react";

const BirthdayScreen = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const fire = () => {
      confetti({ 
        particleCount: 80, 
        spread: 60, 
        origin: { y: 0.7 },
        colors: ['#FF69B4', '#87CEEB', '#DDA0DD', '#FFB6C1', '#B0E0E6']
      });
    };
    fire();
    const interval = setInterval(fire, 4000);
    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 120,
      origin: { y: 0.6 },
      colors: ['#FF69B4', '#87CEEB', '#DDA0DD', '#FFB6C1', '#B0E0E6', '#F5DEB3']
    });
  };

  const sarcasticMessages = [
    { 
      title: "System Update Required",
      desc: "Selamat! Lu resmi naik versi. Bug masih banyak, fitur baru belum tentu berguna, tapi hey, setidaknya lu masih jalan tanpa eror. ",
      icon: <Star className="w-12 h-12" />
    },
    { 
      title: "Achievement: Still Surviving",
      desc: "Lu berhasil melewati 365 hari penuh drama, random anxiety, overthinking jam 10 malem, dan realitas yang kadang ga sesuai ekspektasi. Proud of you king👑",
      icon: <Crown className="w-12 h-12" />
    },
    { 
      title: "Worldwide Announcement",
      desc: "Peneliti menemukan spesies langka yang tambah umur tapi tetep keliatan keren. Spoiler: itu lu. Humanity grateful, bumi aman.",
      icon: <Sparkles className="w-12 h-12" />
    },
    { 
      title: "Fun Fact of The Day",
      desc: "Semakin tua lu, semakin gede value lu, kaya NFT tapi yang ga scam. Harganya naik karena personality nya, bukan hype doang.",
      icon: <MoonStarIcon className="w-12 h-12" />
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100"
    >
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
        style={{ 
          background: 'radial-gradient(circle, hsl(var(--hot-pink)), transparent)',
          y: backgroundY 
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{ 
          background: 'radial-gradient(circle, hsl(var(--baby-blue)), transparent)',
          y: useTransform(backgroundY, v => `${parseFloat(v as string) * -1}%`)
        }}
      />

      {/* Sparkle cursor follower */}
      <motion.div 
        className="pointer-events-none fixed w-64 h-64 rounded-full blur-2xl opacity-40"
        style={{
          background: 'radial-gradient(circle, hsl(var(--lavender)), transparent)',
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Floating hearts and stars */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          {i % 2 === 0 ? (
            <Heart className="w-6 h-6" style={{ color: 'hsl(var(--hot-pink))' }} fill="currentColor" />
          ) : (
            <Sparkles className="w-5 h-5" style={{ color: 'hsl(var(--baby-blue))' }} />
          )}
        </motion.div>
      ))}

      <div className="relative z-10 px-4 md:px-8 py-16 md:py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ scale: 0, opacity: 0, y: -50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Cake className="w-20 h-20 md:w-32 md:h-32" style={{ color: 'hsl(var(--hot-pink))', filter: 'drop-shadow(0 0 20px hsl(var(--hot-pink)))' }} />
          </motion.div>
          
          <h1 className="font-poppins font-black text-5xl md:text-8xl lg:text-9xl mb-6 md:mb-8 leading-tight">
            <motion.span 
              className="block mb-4"
              animate={{ 
                scale: [1, 1.03, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                background: 'linear-gradient(135deg, hsl(var(--hot-pink)), hsl(var(--baby-blue)), hsl(var(--lavender)))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(255, 105, 180, 0.3))'
              }}
            >
              HAPPY
            </motion.span>
            <motion.span 
              className="block"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              style={{
                background: 'linear-gradient(135deg, hsl(var(--baby-blue)), hsl(var(--lavender)), hsl(var(--pastel-pink)))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(135, 206, 235, 0.3))'
              }}
            >
              BIRTHDAY! 
            </motion.span>
          </h1>

          <motion.p 
            className="text-2xl md:text-4xl font-poppins font-light mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{ color: 'hsl(var(--lavender))' }}
          >
            Oh look, it's Falah's special day! 
          </motion.p>
          
          <motion.button
            onClick={triggerConfetti}
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            whileTap={{ scale: 0.9 }}
            className="relative px-10 py-5 text-xl md:text-2xl font-bold font-poppins rounded-full overflow-hidden group cursor-pointer border-4 border-white shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--hot-pink)), hsl(var(--baby-blue)))',
            }}
          >
            <motion.span 
              className="relative z-10 flex items-center gap-3 text-white"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <PartyPopper className="w-6 h-6" />
              SPAM CONFETTI!
              <PartyPopper className="w-6 h-6" />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Sarcastic Messages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 max-w-6xl mx-auto"
        >
          {sarcasticMessages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: '0 25px 60px rgba(255, 105, 180, 0.4)',
              }}
              className="relative group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div 
                className="relative p-8 rounded-3xl backdrop-blur-xl border-3 transition-all duration-300 overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  borderColor: 'rgba(255, 200, 255, 0.5)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* Gradient glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: index % 2 === 0 
                      ? 'linear-gradient(135deg, hsl(var(--hot-pink)), hsl(var(--baby-blue)))' 
                      : 'linear-gradient(135deg, hsl(var(--lavender)), hsl(var(--pastel-pink)))'
                  }}
                />

                <div className="relative z-10">
                  <motion.div 
                    className="mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    style={{ color: index % 2 === 0 ? 'hsl(var(--hot-pink))' : 'hsl(var(--baby-blue))' }}
                  >
                    {msg.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-3"
                    style={{ 
                      color: index % 2 === 0 ? 'hsl(var(--hot-pink))' : 'hsl(var(--baby-blue))'
                    }}
                  >
                    {msg.title}
                  </h3>
                  
                  <p className="text-base md:text-lg font-poppins text-gray-700 leading-relaxed">
                    {msg.desc}
                  </p>
                </div>

                {/* Corner sparkle */}
                <motion.div
                  className="absolute top-3 right-3"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="w-6 h-6" style={{ color: 'hsl(var(--sparkle-gold))' }} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Quote Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <motion.div 
            className="relative p-10 md:p-16 rounded-[3rem] backdrop-blur-xl border-4 overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            style={{
              background: 'rgba(255, 255, 255, 0.6)',
              borderColor: 'rgba(255, 255, 255, 0.8)',
              boxShadow: '0 20px 60px rgba(255, 105, 180, 0.2)'
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--baby-blue)), hsl(var(--lavender)), hsl(var(--pastel-pink)))'
              }}
            />
            
            <div className="relative z-10 text-center">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="mb-6 inline-block"
              >
                <Crown className="w-16 h-16" style={{ color: 'hsl(var(--sparkle-gold))', filter: 'drop-shadow(0 0 20px hsl(var(--sparkle-gold)))' }} />
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-poppins font-black mb-6"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--hot-pink)), hsl(var(--lavender)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Real Talk Tho
              </h2>
              
              <p className="text-xl md:text-2xl font-poppins leading-relaxed text-gray-800 mb-4">
                Sure, we joke around. But honestly? 
              </p>
              
              <motion.p 
                className="text-2xl md:text-3xl font-poppins font-bold leading-relaxed"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--hot-pink)), hsl(var(--baby-blue)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                You're kind of amazing, keep believing on yourself! 
              </motion.p>

              <p className="text-lg md:text-xl font-poppins text-gray-700 mt-4 italic">
                (Fight your self doubt and procrastination, king.) 😝
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Birthday Wishes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-poppins font-black mb-12"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--baby-blue)), hsl(var(--hot-pink)), hsl(var(--lavender)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Wishes For You 
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { emoji: "🌟", text: "Semoga tahun ini otak lu nge-load lebih cepet dari WiFi kosan jam 2 pagi. Minimal ga ngelag pas belajar lah." },
              { emoji: "🎯", text: "Semoga lu akhirnya ngerti cara percaya diri tanpa harus gw tendang dulu mental lu biar maju." },
              { emoji: "💰", text: "Semoga saldo lu naik terus dan cicilan mental lu turun. Hidup udah susah, jangan ditambah beban sendiri." },
              { emoji: "😴", text: "Semoga lu bisa tidur bener. Bukan tidur jam 3, bangun jam 7, terus bilang 'kok pusing ya'." },
              { emoji: "🧠", text: "Semoga lu sadar kalo lu nggak se-'lemot' yang lu kira. Otak lu cuma suka warming up dulu kayak motor carb." },
              { emoji: "🍕", text: "Semoga semua makanan favorit lu auto nol kalori. Biar lu makan santai tanpa self-hate 5 menit setelahnya." },
              { emoji: "✨", text: "Semoga vibe lu tetep se-unik itu. Dunia butuh orang random tapi wholesome kayak lu." },
              { emoji: "🔥", text: "Semoga semangat lu nggak mati tengah jalan. Kalo mati? Yaudah tinggal gw jumper lagi." },
              { emoji: "🚀", text: "Semoga lu makin berani nyoba hal baru. Kalo takut? Tenang… lu kan udah biasa takut duluan." },
            ].map((wish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -3, 3, 0],
                  boxShadow: '0 20px 40px rgba(135, 206, 235, 0.3)'
                }}
                className="p-6 rounded-2xl backdrop-blur-xl cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  border: '2px solid rgba(255, 200, 255, 0.3)'
                }}
              >
                <motion.div 
                  className="text-5xl mb-3"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {wish.emoji}
                </motion.div>
                <p className="text-base md:text-lg font-poppins text-gray-700 leading-snug">
                  {wish.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Epic Finale */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center py-16 mb-20"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-8"
          >
            <PartyPopper className="w-24 h-24 mx-auto" style={{ color: 'hsl(var(--hot-pink))', filter: 'drop-shadow(0 0 30px hsl(var(--hot-pink)))' }} />
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-7xl font-poppins font-black mb-6"
            animate={{ 
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              background: 'linear-gradient(90deg, hsl(var(--hot-pink)), hsl(var(--baby-blue)), hsl(var(--lavender)), hsl(var(--pastel-pink)), hsl(var(--hot-pink)))',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(255, 105, 180, 0.3))'
            }}
          >
            TODAY, YOU'RE THE MAIN CHARACTER, KING.
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-3xl font-poppins font-light max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            style={{ color: 'hsl(var(--lavender))' }}
          >
            Semoga lu makin percaya sama diri lu sendiri. Karena kalo lu masih nggak percaya… ya gimana? Masa gw mulu yang percaya. 
            <br />
            <span className="font-bold" style={{ color: 'hsl(var(--hot-pink))' }}>
              (Im counting on you) 
            </span>
          </motion.p>
        </motion.div>

        {/* Stats Counter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-poppins font-black mb-12 text-center"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--hot-pink)), hsl(var(--baby-blue)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Your Year In Numbers 
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <Coffee />, value: "365", label: "Cups of Coffee", suffix: "+" },
              { icon: <Music />, value: "1,247", label: "Songs Played" },
              { icon: <Smile />, value: "892", label: "Laughs Shared" },
              { icon: <Zap />, value: "∞", label: "Main Character Moments" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(255, 105, 180, 0.4)'
                }}
                className="relative p-8 rounded-3xl backdrop-blur-xl text-center group cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  border: '3px solid rgba(255, 200, 255, 0.4)'
                }}
              >
                <motion.div
                  className="mb-4 mx-auto w-fit"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  style={{ color: index % 2 === 0 ? 'hsl(var(--hot-pink))' : 'hsl(var(--baby-blue))' }}
                >
                  {React.cloneElement(stat.icon, { className: "w-12 h-12" })}
                </motion.div>

                <motion.div 
                  className="text-4xl md:text-5xl font-poppins font-black mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--hot-pink)), hsl(var(--baby-blue)))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}{stat.suffix}
                </motion.div>

                <div className="text-sm md:text-base font-poppins font-semibold text-gray-700">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personality Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-poppins font-black mb-12 text-center"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--lavender)), hsl(var(--pastel-pink)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Character Stats 
          </h2>

          <div className="space-y-6">
            {[
              { label: "Charisma", value: 95, icon: <Sparkles className="w-6 h-6" /> },
              { label: "Humor", value: 88, icon: <Smile className="w-6 h-6" /> },
              { label: "Intelligence", value: 92, icon: <Star className="w-6 h-6" /> },
              { label: "Kindness", value: 97, icon: <Heart className="w-6 h-6" /> },
              { label: "Energy", value: 85, icon: <Zap className="w-6 h-6" /> },
              { label: "Main Character Energy", value: 100, icon: <Crown className="w-6 h-6" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span style={{ color: 'hsl(var(--hot-pink))' }}>
                      {stat.icon}
                    </span>
                    <span className="text-lg md:text-xl font-poppins font-bold text-gray-800">
                      {stat.label}
                    </span>
                  </div>
                  <span className="text-lg md:text-xl font-poppins font-bold"
                    style={{ color: 'hsl(var(--baby-blue))' }}
                  >
                    {stat.value}%
                  </span>
                </div>

                <div className="h-4 rounded-full overflow-hidden"
                  style={{ background: 'rgba(200, 200, 255, 0.3)' }}
                >
                  <motion.div
                    className="h-full rounded-full relative overflow-hidden"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                    style={{
                      background: 'linear-gradient(90deg, hsl(var(--hot-pink)), hsl(var(--baby-blue)), hsl(var(--lavender)))'
                    }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        backgroundPosition: ['0% 0%', '100% 0%']
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                        backgroundSize: '50% 100%'
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fortune Cookie Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-poppins font-black mb-12 text-center"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--baby-blue)), hsl(var(--hot-pink)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Birthday Predictions 
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                prediction: "Tahun ini lu bakal niat mulai hidup produktif. Niatnya besar. Eksekusinya… ya nanti liat aja.",
                emoji: "🙏"
              },
              { 
                prediction: "Akan ada pesan penting masuk. Setelah dicek… promo marketplace. Lagi. Selalu.",
                emoji: "📱"
              },
              { 
                prediction: "Lu bakal mencapai sesuatu yang besar tahun ini. Masalahnya, kita semua belum tau apaan.",
                emoji: "🎯"
              },
              { 
                prediction: "To do list lu bakal makin panjang. Lu tambahin doang, Lakuinnya enggak.",
                emoji: "📺"
              }
            ].map((fortune, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: -180 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                whileHover={{ 
                  rotateY: 10,
                  scale: 1.05,
                  boxShadow: '0 25px 50px rgba(135, 206, 235, 0.4)'
                }}
                className="relative p-8 rounded-3xl backdrop-blur-xl cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  border: '3px solid rgba(255, 200, 255, 0.5)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <motion.div 
                  className="text-6xl mb-4 text-center"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {fortune.emoji}
                </motion.div>

                <p className="text-base md:text-lg font-poppins text-gray-700 text-center leading-relaxed">
                  {fortune.prediction}
                </p>

                <motion.div
                  className="absolute top-2 right-2"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5" style={{ color: 'hsl(var(--sparkle-gold))' }} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Unlocked */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-poppins font-black mb-12 text-center"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--pastel-pink)), hsl(var(--lavender)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
             Achievements Unlocked 
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <Trophy />, title: "Birthday Royalty", desc: "Survived another year of chaos" },
              { icon: <Target />, title: "Goal Getter", desc: "Set goals. Forgot them. Set new ones." },
              { icon: <Flame />, title: "Streak Master", desc: "365 consecutive days of existing" },
              { icon: <Gift />, title: "Present Collector", desc: "Expert at looking surprised" },
              { icon: <Wand2 />, title: "Magic Maker", desc: "Made everyday moments legendary" },
              { icon: <Rocket />, title: "Sky Reacher", desc: "Aimed for moon, hit ceiling fan" },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotateZ: [0, -5, 5, 0],
                  boxShadow: '0 20px 40px rgba(255, 105, 180, 0.4)'
                }}
                className="relative p-6 rounded-2xl backdrop-blur-xl text-center group cursor-pointer overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.6)',
                  border: '3px solid rgba(255, 200, 255, 0.4)'
                }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 105, 180, 0.2), rgba(135, 206, 235, 0.2))'
                  }}
                />

                <motion.div
                  className="relative z-10 mb-4 mx-auto w-fit p-4 rounded-full"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(var(--hot-pink)), hsl(var(--baby-blue)))',
                    boxShadow: '0 0 20px rgba(255, 105, 180, 0.5)'
                  }}
                >
                  {React.cloneElement(achievement.icon, { 
                    className: "w-10 h-10",
                    color: "white"
                  })}
                </motion.div>

                <h3 className="relative z-10 text-xl md:text-2xl font-poppins font-bold mb-2"
                  style={{ color: 'hsl(var(--hot-pink))' }}
                >
                  {achievement.title}
                </h3>

                <p className="relative z-10 text-sm md:text-base font-poppins text-gray-700">
                  {achievement.desc}
                </p>

                <motion.div
                  className="absolute -bottom-2 -right-2"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Star className="w-8 h-8" style={{ color: 'hsl(var(--sparkle-gold))' }} fill="currentColor" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reasons You're Awesome */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-poppins font-black mb-12 text-center"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--baby-blue)), hsl(var(--hot-pink)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Why You're Actually Amazing 
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Lu punya bakat spesial: bikin hidup chaos tapi somehow tetep jalan. Aneh, tapi works.",
              "Insting lu tuh 50% genius, 50% hoki. Persentasenya berubah tiap hari.",
              "Keputusan-keputusan lu selalu bikin gue mikir, ‘ini jenius apa ngasal?’. Jawabannya: yes.",
              "Lu punya talent bikin situasi awkward jadi… slightly less awkward. Improvement is improvement.",
              "Sense of humor lu tuh kayak bug di software: ga masuk akal, tapi bikin orang ketawa.",
              "Energy lu tuh ‘capek tapi tetep menang’. Respect, honestly."
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateZ: index % 2 === 0 ? -2 : 2
                }}
                className="relative p-6 rounded-2xl backdrop-blur-xl cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  border: '3px solid rgba(255, 200, 255, 0.4)'
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, hsl(var(--hot-pink)), hsl(var(--baby-blue)))' }}
                >
                  <Sparkles className="w-4 h-4 text-white" fill="white" />
                </motion.div>

                <p className="text-lg md:text-xl font-poppins text-gray-800 pl-4">
                  {reason}
                </p>

                {index === 5 && (
                  <p className="text-sm font-poppins text-gray-500 italic mt-2 pl-4">
                    *walau hobi procrastinate sama self doubt but whatever
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Virtual Birthday Cake */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-poppins font-black mb-12"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--lavender)), hsl(var(--pastel-pink)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Make a Wish! 
          </h2>

          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Cake 
                className="w-48 h-48 md:w-64 md:h-64 mx-auto cursor-pointer" 
                style={{ 
                  color: 'hsl(var(--hot-pink))',
                  filter: 'drop-shadow(0 0 40px hsl(var(--hot-pink)))'
                }} 
                onClick={triggerConfetti}
              />

              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${30 + i * 10}%`,
                    top: '10%',
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [1, 0.5, 1],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                >
                  <Flame className="w-6 h-6" style={{ color: 'hsl(var(--peach))' }} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl font-poppins mt-8 text-gray-700"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click the cake to blow out the candles! 🕯️
          </motion.p>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center py-20"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="mb-8"
          >
            <Crown className="w-32 h-32 mx-auto" 
              style={{ 
                color: 'hsl(var(--sparkle-gold))', 
                filter: 'drop-shadow(0 0 40px hsl(var(--sparkle-gold)))' 
              }} 
            />
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-8xl font-poppins font-black mb-8"
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              background: 'linear-gradient(90deg, hsl(var(--hot-pink)), hsl(var(--baby-blue)), hsl(var(--lavender)), hsl(var(--hot-pink)))',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 50px rgba(255, 105, 180, 0.4))'
            }}
          >
            YOU'RE LEGENDARY
          </motion.h2>
          
          <motion.p
            className="text-2xl md:text-4xl font-poppins font-light max-w-4xl mx-auto mb-8"
            style={{ color: 'hsl(var(--lavender))' }}
          >
            Here's to another year of being absolutely iconic, completely unforgettable, and ridiculously fabulous.
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl font-poppins max-w-3xl mx-auto"
            style={{ color: 'hsl(var(--hot-pink))' }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Now stop reading and go celebrate! Sorry for the Corny message tho 🎉✨
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default BirthdayScreen;
