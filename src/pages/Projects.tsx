import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Github, ExternalLink, Award, Users, Calendar } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Autonomous Line Following Robot",
      category: "Autonomous Systems",
      status: "Completed",
      image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg",
      video: "https://example.com/video1.mp4",
      description: "An advanced line-following robot that uses computer vision and machine learning algorithms to navigate complex tracks with high precision and speed.",
      longDescription: "This project showcases our expertise in autonomous navigation systems. The robot features advanced computer vision capabilities using OpenCV for line detection, PID control systems for smooth movement, and machine learning algorithms for adaptive behavior. The system can handle various track conditions including intersections, gaps, and curved paths.",
      technologies: ["Arduino Uno", "OpenCV", "Python", "PID Control", "Computer Vision"],
      teamMembers: ["Arjun Patel", "Sneha Gupta", "Ravi Singh"],
      duration: "4 months",
      achievements: ["1st Place - National Robotics Championship 2024", "Best Innovation Award"],
      github: "https://github.com/ucr/line-following-robot",
      demo: "https://demo.ucr-robotics.com/line-follower",
      features: [
        "Real-time computer vision processing",
        "Adaptive PID control system",
        "Obstacle detection and avoidance",
        "Wireless monitoring and control",
        "High-speed navigation (up to 2 m/s)"
      ]
    },
    {
      id: 2,
      title: "Smart Home Automation System",
      category: "IoT",
      status: "In Progress",
      image: "https://images.pexels.com/photos/8566479/pexels-photo-8566479.jpeg",
      description: "IoT-based home automation system with voice control, mobile app integration, and energy monitoring capabilities.",
      longDescription: "A comprehensive smart home solution that integrates various IoT devices and sensors to create an intelligent living environment. The system features voice recognition, mobile app control, energy monitoring, and automated decision-making based on user preferences and environmental conditions.",
      technologies: ["Raspberry Pi", "Node.js", "React Native", "MQTT", "Voice Recognition"],
      teamMembers: ["Pooja Agarwal", "Amit Kumar", "Kavya Reddy"],
      duration: "6 months",
      achievements: ["Featured in Tech Innovation Showcase"],
      github: "https://github.com/ucr/smart-home-system",
      features: [
        "Voice-controlled device management",
        "Mobile app with intuitive interface",
        "Real-time energy consumption monitoring",
        "Automated scheduling and routines",
        "Security system integration"
      ]
    },
    {
      id: 3,
      title: "Robotic Arm with Computer Vision",
      category: "Manipulation",
      status: "Completed",
      image: "https://images.pexels.com/photos/8439116/pexels-photo-8439116.jpeg",
      description: "6-DOF robotic arm capable of object recognition, pick-and-place operations, and precise manipulation tasks.",
      longDescription: "A sophisticated robotic manipulation system that combines mechanical engineering excellence with advanced computer vision algorithms. The arm can identify, locate, and manipulate objects with high precision, making it suitable for industrial automation and research applications.",
      technologies: ["Arduino Mega", "Servo Motors", "Computer Vision", "Inverse Kinematics", "Python"],
      teamMembers: ["Ravi Singh", "Vikram Joshi", "Shreya Nair"],
      duration: "5 months",
      achievements: ["Best Engineering Design Award", "Industry Partnership Secured"],
      github: "https://github.com/ucr/robotic-arm-cv",
      demo: "https://demo.ucr-robotics.com/robotic-arm",
      features: [
        "6 degrees of freedom movement",
        "Object recognition and classification",
        "Precise pick-and-place operations",
        "Real-time motion planning",
        "Safety mechanisms and error handling"
      ]
    },
    {
      id: 4,
      title: "Autonomous Drone Delivery System",
      category: "Aerial Robotics",
      status: "In Progress",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg",
      description: "Autonomous drone system for package delivery with GPS navigation, obstacle avoidance, and automated landing.",
      longDescription: "An ambitious project to develop a fully autonomous drone delivery system. The drone can navigate complex urban environments, avoid obstacles, and deliver packages to specified locations with minimal human intervention.",
      technologies: ["Flight Controller", "GPS Module", "LIDAR", "Computer Vision", "ROS"],
      teamMembers: ["Ananya Iyer", "Rohit Malhotra", "Amit Kumar"],
      duration: "8 months",
      achievements: ["Prototype Successfully Tested"],
      github: "https://github.com/ucr/drone-delivery",
      features: [
        "Autonomous flight planning and execution",
        "Real-time obstacle detection and avoidance",
        "Precision landing system",
        "Package securing mechanism",
        "Emergency protocols and failsafes"
      ]
    },
    {
      id: 5,
      title: "Swarm Robotics System",
      category: "Multi-Robot Systems",
      status: "Research Phase",
      image: "https://images.pexels.com/photos/8439092/pexels-photo-8439092.jpeg",
      description: "Coordinated swarm of mini-robots capable of collective decision-making and collaborative task execution.",
      longDescription: "Exploring the fascinating world of swarm intelligence through a coordinated system of mini-robots. This research project investigates collective behavior, distributed decision-making, and emergent intelligence in multi-robot systems.",
      technologies: ["ESP32", "Swarm Intelligence", "Wireless Communication", "Distributed Systems"],
      teamMembers: ["Sneha Gupta", "Pooja Agarwal", "Vikram Joshi"],
      duration: "10 months",
      achievements: ["Research Paper Published"],
      github: "https://github.com/ucr/swarm-robotics",
      features: [
        "Distributed control architecture",
        "Inter-robot communication protocols",
        "Collective task allocation",
        "Emergent behavior patterns",
        "Scalable system design"
      ]
    },
    {
      id: 6,
      title: "Humanoid Robot Assistant",
      category: "Social Robotics",
      status: "Concept",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      description: "Interactive humanoid robot designed for educational and assistance purposes with natural language processing.",
      longDescription: "A next-generation humanoid robot designed to interact naturally with humans in educational and assistance scenarios. The robot features advanced AI capabilities, natural language processing, and expressive physical movements.",
      technologies: ["Advanced Actuators", "Natural Language Processing", "Computer Vision", "AI"],
      teamMembers: ["Research Team", "AI Specialists", "Mechanical Engineers"],
      duration: "12 months (planned)",
      achievements: ["Concept Design Completed"],
      features: [
        "Natural language conversation",
        "Emotional expression recognition",
        "Educational content delivery",
        "Assistance task execution",
        "Learning and adaptation capabilities"
      ]
    }
  ];

  const categories = [
    "All Projects",
    "Autonomous Systems", 
    "IoT",
    "Manipulation",
    "Aerial Robotics",
    "Multi-Robot Systems",
    "Social Robotics"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects = selectedCategory === "All Projects" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400';
      case 'In Progress': return 'bg-blue-500/20 text-blue-400';
      case 'Research Phase': return 'bg-yellow-500/20 text-yellow-400';
      case 'Concept': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

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
              Project{' '}
              <span className="bg-gradient-to-r from-violet-400 to-electric-400 bg-clip-text text-transparent">
                Showcase
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Explore our innovative robotics projects that push the boundaries of technology
              and demonstrate our commitment to excellence in engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-violet-500 to-electric-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {filteredProjects.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                Featured Project
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Project Media */}
                <div className="aspect-video lg:aspect-square bg-gray-700 relative overflow-hidden">
                  <img
                    src={filteredProjects[0].image}
                    alt={filteredProjects[0].title}
                    className="w-full h-full object-cover"
                  />
                  {filteredProjects[0].video && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(filteredProjects[0].status)}`}>
                        {filteredProjects[0].status}
                      </span>
                      <span className="text-violet-400 font-medium">{filteredProjects[0].category}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {filteredProjects[0].title}
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {filteredProjects[0].longDescription}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-electric-400" />
                      <span className="text-gray-300">{filteredProjects[0].teamMembers.length} Team Members</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{filteredProjects[0].duration}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {filteredProjects[0].technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3">
                    {filteredProjects[0].github && (
                      <a
                        href={filteredProjects[0].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    )}
                    {filteredProjects[0].demo && (
                      <a
                        href={filteredProjects[0].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-electric-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Projects Grid */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Projects
            </h2>
            <p className="text-xl text-gray-400">
              Discover the full range of our innovative robotics solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-violet-500/50 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                {/* Project Image */}
                <div className="aspect-video bg-gray-700 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  {project.video && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-violet-400 font-medium text-sm">{project.category}</span>
                    <h3 className="text-xl font-semibold text-white mt-1 group-hover:text-violet-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{project.teamMembers.length}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    {project.achievements.length > 0 && (
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4 text-yellow-400" />
                        <span>{project.achievements.length}</span>
                      </div>
                    )}
                  </div>

                  {/* Expanded Details */}
                  {selectedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-4 border-t border-gray-700 space-y-4"
                    >
                      {/* Team Members */}
                      <div>
                        <h4 className="text-white font-semibold mb-2">Team Members:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.teamMembers.map((member) => (
                            <span key={member} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                              {member}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-violet-500/20 text-violet-400 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      {project.achievements.length > 0 && (
                        <div>
                          <h4 className="text-white font-semibold mb-2">Achievements:</h4>
                          <ul className="space-y-1">
                            {project.achievements.map((achievement) => (
                              <li key={achievement} className="text-yellow-400 text-sm flex items-center space-x-2">
                                <Award className="w-3 h-3" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 px-3 py-1 bg-gray-700 text-white text-sm rounded hover:bg-gray-600 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-3 h-3" />
                            <span>Code</span>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 px-3 py-1 bg-violet-500 text-white text-sm rounded hover:bg-violet-600 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;