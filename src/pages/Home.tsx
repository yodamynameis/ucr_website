import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Trophy, Calendar, Cpu, Zap } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import NewsTicker from '../components/NewsTicker';
import { useNavigate } from 'react-router-dom';
import JoinUs from '../pages/JoinUs';
import projectVideo from '../assets/project_vid.mp4'; // 👈 correct import path


const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const navigate = useNavigate();

  const stats = [
    { icon: Users, value: 200, label: 'Proud Alumni', suffix: '+' },
    { icon: Calendar, value: 50, label: 'Past Events', suffix: '+' }, //changes 
    { icon: Trophy, value: 20, label: 'Competitions Conquered', suffix: '+' }, // 20+ Achievements
    { icon: Zap, value: 20, label: 'Years of Excellence', suffix: '+' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-violet-900/20 to-electric-900/20">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, violet 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, electric 0%, transparent 50%)',
                'radial-gradient(circle at 40% 50%, violet 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-violet-400 via-electric-400 to-cyan-400 bg-clip-text text-transparent">
                μCR
              </span>
              <br />
              <span className="text-white text-3xl md:text-4xl lg:text-5xl">
                Microcontroller-Based Systems
              </span>
              <br />
              <span className="text-white text-3xl md:text-4xl lg:text-5xl">
                & Robotics Hub
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              More than a hub,<br />
              No less than a legacy.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/joinus')}
            className="px-8 py-4 bg-gradient-to-r from-violet-500 to-electric-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join Our Community
            </motion.button>

              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/projects')} // 👈 Add this line
                className="px-8 py-4 border-2 border-violet-500 text-violet-400 font-semibold rounded-lg hover:bg-violet-500/10 transition-all duration-300"
            >
          Explore Projects
</motion.button> */}
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-violet-500 rounded-full opacity-60"
          animate={{ y: [0, -20, 0], rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-electric-500 rounded-full opacity-60"
          animate={{ y: [0, 30, 0], rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-500 rounded-full opacity-60"
          animate={{ y: [0, -15, 0], rotate: 180 }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </section>

      {/* News Ticker */}
      <NewsTicker />

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-400">
              Building a thriving robotics community one project at a time
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-electric-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {statsInView && (
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Where Innovation Meets{' '}
                <span className="bg-gradient-to-r from-violet-400 to-electric-400 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <p className="text-lg text-gray-400">
                At μCR, we're not just building robots – we're building the future. Our community
                of passionate engineers, programmers, and innovators work together to push the
                boundaries of what's possible in robotics and embedded systems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  <span className="text-gray-300">Hands-on experience through Robotics competitions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-electric-500 rounded-full"></div>
                  <span className="text-gray-300">Building real-world skills via inter-college Robotics Battles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-300">Collaborative project-based learning</span>
                </div>
              </div>
            </motion.div>

          <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative"
>
  <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
    <video
  src={projectVideo}
  controls
  loop
  muted
  className="w-full h-full object-cover"
/>
  </div>
</motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;