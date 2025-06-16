import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Wrench, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const activities = [
    {
      icon: Wrench,
      title: "Hands-on Workshops",
      description: "From blinking LEDs to autonomous bots — explore robotics through regular workshops centered on Arduino, Raspberry Pi, and real-world applications. No lectures, just hands-on tech."
    },
    {
      icon: Users,
      title: "Project Exhibitons", 
      description: "Showcasing member built robots and systems, from intelligent bots to autonomous tech, at campus wide exhibitions."
    },
    {
      icon: Award,
      title: "Competitions",
      description: "Engaging in national-level robotics competitions that challenge technical expertise, innovation, and effective team collaboration."
    },
   {
  icon: Lightbulb,
  title: "Knowledge Sharing",
  description: "Peer-led tutorials and discussions to strengthen core robotics concepts, programming, and embedded skills within the team."
}

  ];


  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-violet-900/20 to-electric-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              About{' '}
              <span className="bg-gradient-to-r from-violet-400 to-electric-400 bg-clip-text text-transparent">
                μCR
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Microcontroller-Based Systems and Robotics Hub<br/> Dream. Build. Innovate. Repeat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={missionRef}
            initial={{ opacity: 0, y: 50 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-violet-500 to-electric-500 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed">
                To empower students to innovate, create, and lead in the world of robotics and embedded systems.
We strive to bridge the gap between classroom theory and real-world application by fostering hands-on learning, creative problem-solving, and a spirit of collaboration.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-electric-500 to-cyan-500 rounded-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed">
                To become a nationally recognized robotics collective known for student-led innovation, breakthrough engineering, and collaborative excellence. We envision a legacy where every project, prototype, and idea born here contributes meaningfully to the evolution of intelligent systems and the next era of tech leadership.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Activities
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive learning experiences designed to build expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-violet-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-electric-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{activity.title}</h3>
                    <p className="text-gray-400">{activity.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  

      {/* Impact Statement */}
      <section className="py-20 bg-gradient-to-r from-violet-600/20 to-electric-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
             Where Curiosity{' '}
  <span className="bg-gradient-to-r from-violet-400 to-electric-400 bg-clip-text text-transparent">
    Powers Creation
  </span>
            </h2>
           <p className="text-xl text-gray-300 leading-relaxed">
  μCR isn't just a hub — it's a workshop of minds. We bring together tinkerers, coders, builders, and dreamers
  to design and deploy real tech solutions. From tackling hardware challenges to writing intelligent control code,
  our members learn by building, not just by reading. Whether it's a maze-solving robot or a homegrown AI system,
  every project is a step closer to engineering something that matters.
</p>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;