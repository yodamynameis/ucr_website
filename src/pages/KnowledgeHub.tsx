import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, BookOpen, FileText, Video, Code, Calendar, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import sensors from "../assets/resource/Sensors.pdf"; 
import diodes from "../assets/resource/diodes.pdf";
import bcr from "../assets/resource/BluetoothControlledRobot.pdf";
import hgr from "../assets/resource/HandGestureRobot.pdf";
import drone from "../assets/resource/IntroductionToDrones.pdf";
import oar from "../assets/resource/ObstacleAvoidingRobot.pdf";
import vcr from "../assets/resource/VoiceControlledRobot.pdf";
import ad from "../assets/resource/arduino_download.pdf";
import intro from "../assets/resource/Arduino_intro.pdf";
import boa from "../assets/resource/Basics_of_Arduino.pdf";
import advance from "../assets/resource/Advance_Ardunio.pdf";
import basicEle from "../assets/resource/basic_electronics.pdf";
import motor from "../assets/resource/Motors.pdf";


const KnowledgeHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const learningMaterials = [
    {
      id: 1,
      title: "Bluetooth Controlled Robot",
      type: "pdf",
      category: "robotics",
      description: "A beginner-friendly guide to building and programming a Bluetooth-controlled Arduino robot.",
      downloadUrl: bcr
    },
    {
      id: 2,
      title: "Diodes",
      type: "pdf", 
      category: "hardware",
      description: "A concise reference on diode behavior, types, and applications in PCB design.",
      downloadUrl: diodes
    },
    {
      id: 3,
      title: "Sensors",
      type: "pdf",
      category: "hardware",
      description: "An overview of essential sensors used in robotics with integration examples.",
      downloadUrl: sensors
    },
    {
      id: 4,
      title: "Hand Gesture Controlled Robot",
      type: "pdf",
      category: "robotics",
      description: "Learn to build a robot that responds to hand gestures using sensor input.",
      downloadUrl: hgr
    },
      {
      id: 5,
      title: "Introduction to Drones",
      type: "pdf",
      category: "robotics",
      description: "Foundational material on drone mechanics, control systems, and sensor usage.",
      downloadUrl: drone
    },
      {
      id: 6,
      title: "Obstacle Avoiding Robot",
      type: "pdf",
      category: "robotics",
      description: "A practical guide to designing robots that detect and avoid obstacles autonomously.",
      downloadUrl: oar
    },
      {
      id: 7,
      title: "Voice Controlled Robot",
      type: "pdf",
      category: "robotics",
      description: "Instructions to create a robot that moves based on voice command recognition.",
      downloadUrl: vcr
    },
    {
      id: 8,
      title: "How to Download Arduino IDE",
      type: "pdf",
      category: "programming",
      description: "Step-by-step guide to downloading and setting up the Arduino IDE for development.",
      downloadUrl: ad
    },
    {
      id: 9,
      title: "Introduction to Arduino",
      type: "pdf",
      category: "programming",
      description: "A beginner's introduction to Arduino boards, programming, and basic circuit interfacing.",
      downloadUrl: intro
    },
    {
      id: 10,
      title: "Basic Arduino Programming",
      type: "pdf",
      category: "programming",
      description: "An introductory guide to programming Arduino boards using basic code structures and logic.",
      downloadUrl: boa
    },
    {
      id: 11,
      title: "Advanced Arduino Programming",
      type: "pdf",
      category: "programming",
      description: "Covers advanced concepts in Arduino development including sensors, libraries, and complex logic.",
      downloadUrl: advance
    },
    {
      id: 12,
      title: "Basic Electronics",
      type: "pdf",
      category: "hardware",
      description: "Learn the fundamental concepts of voltage, current, resistance, and basic components like resistors and capacitors.",
      downloadUrl: basicEle
    },
    {
      id: 13,
      title: "Introduction to Motors",
      type: "pdf",
      category: "hardware",
      description: "Understand different types of motors and how to control them in robotic and electronic systems.",
      downloadUrl: motor
    }
  ];

  const techBlogs = [

    {
    id: 12,
    title: "LCD Display Module: Giving Your Projects a Voice",
    authors: [
      { name: "Ipsita Jain", insta: "https://www.instagram.com/me_pistaa/" },
    ],
    date: "2025-08-31",
    category: "Hardware",
  tags: ["LCD", "Displays", "I2C"],
    excerpt: "Character LCDs like the 16×2 and 20×4 make it easy to show sensor values, menus, and status messages. Learn pinouts, 4-bit wiring vs I²C backpacks, common libraries, and tips for contrast, backlight, and custom characters.",
    readTime: "8 min read",
    image: "https://docs.arduino.cc/static/7a7f1f877f04d48236ab166814aab58f/0a47e/lcd_photo.png"
  },
  {
    id: 11,
    title: "Brushed DC Motor Demystified: Reliable Power in Motion",
    authors: [
      { name: "Aadya Mudgal", insta: "https://www.instagram.com/aady4core/" },
      { name: "Shambhavi Sharma", insta: "https://www.instagram.com/sshhambhavii/" }
    ],
    date: "2025-08-24",
    category: "Hardware",
    tags: ["DC Motor", "Motion Control", "Robotics"],
    excerpt: "Brushed DC motors provide straightforward speed and torque control, making them ideal for robotics, automation, and low-cost motion systems.",
    readTime: "6 min read",
    image: "https://assunmotor.com/blog/wp-content/uploads/round_brushless_dc_motor-sideview.jpeg"
  },
  {
    id: 10,
    title: "Ultrasonic Sensors Demystified: Precision in Motion Detection",
    authors: [
      { name: "Sarthak Tripathi", insta: "https://www.instagram.com/_quarky/" }
    ],
    date: "2025-08-17",
    category: "Sensors",
    tags: ["Ultrasonic Sensor", "Distance", "IoT"],
    excerpt: "An ultrasonic sensor measures distance using sound waves, enabling precise obstacle detection and ranging in robotics, IoT devices, and automation systems.",
    readTime: "7 min read",
    image: "https://cdn.mos.cms.futurecdn.net/YSNQkvg6L6rcYC7vAQZLLa.jpg"
  },
  {
    id: 9,
    title: "ESP32: The Powerhouse of IoT and Embedded Innovation",
    authors: [
      { name: "Vedant Singh", insta: "https://www.instagram.com/_.vedant._77/" },
      { name: "Utkarsh Gupta", insta: "" }
    ],
    date: "2025-08-10",
    category: "Hardware",
    tags: ["ESP32", "IoT", "Wi-Fi", "Bluetooth"],
    excerpt: "The ESP32 microcontroller packs Wi-Fi, Bluetooth, and dual-core processing into a compact form, making it the go-to choice for IoT, automation, and embedded system projects.",
    readTime: "10 min read",
    image: "https://home-assistant-guide.com/wp-content/uploads/2021/08/esp32-thumbnail.png"
  },
  {
    id: 8,
    title: "Micro SD Card Modules: The Tiny Genius behind Big Data Storage",
    authors: [
      { name: "Bristi Bisai", insta: "https://www.instagram.com/ughbristiiiii/" },
      { name: "Amisha Mittal", insta: "https://www.instagram.com/amisha_m01/" }
    ],
    date: "2025-08-03",
    category: "Hardware",
    tags: ["Arduino", "Data Logging", "Sensors"],
    excerpt: "Micro SD card modules pack massive storage into a tiny form, enabling efficient data logging, storage, and transfer for electronics, IoT, and embedded projects.",
    readTime: "8 min read",
    image: "https://zbotic.in/wp-content/uploads/2020/06/IMG_6874.jpg"
  },
  {
    id: 7,
    title: "DPDT Switch Demystified: Wired Control, Twice the Power",
    authors: [
      { name: "Ayush Agrawal", insta: "https://www.instagram.com/ayushagrawal1839/" }
    ],
    date: "2025-07-27",
    category: "Hardware",
    tags: ["DPDT Switch", "Motor Reversal", "H-Bridge"],
    excerpt: "Demystify DPDT switches, essential components for controlling two independent circuits. Learn their working principles, types, practical applications in robotics and motor control",
    readTime: "10 min read",
    image: "https://cdn.sparkfun.com/assets/6/e/d/9/0/517edbabce395fd51d000000.png"
  },
  {
    id: 6,
    title: "NRF Modules: Tiny Radios for Big Wireless Projects",
    authors: [
      { name: "Annanya Priyadarshini", insta: "https://www.instagram.com/annanya_ps" },
      { name: "Kamna Thakur", insta: "https://www.instagram.com/kamnaaa_22/" }
    ],
    date: "2025-07-20",
    category: "Communication",
    tags: ["Wireless", "NRF24L01", "IoT", "Robotics"],
    excerpt: "Explore NRF modules, from the popular NRF24L01 to BLE-enabled NRF52 chips — learn how they work, how to use them in Arduino and IoT projects, and how to get the best performance.",
    readTime: "8 min read",
    image: "https://www.rcpano.net/wp-content/uploads/2024/02/Arduino-NRF24L01-Remote-Control-Connection-Problem-Why-do-not-work-RC.jpg"
  },
  {
    id: 5,
    title: "LiPo Batteries: Tiny Cells, Massive Power",
    authors: [
      { name: "Rishabh Kapur", insta: "https://www.instagram.com/rishabh.kapur/" }
    ],
    date: "2025-07-13",
    category: "Hardware",
    tags: ["Electronics", "Power", "Batteries", "LiPo"],
    excerpt: "Discover the fundamentals of Lithium Polymer (LiPo) batteries, their advantages for portable electronics and RC projects, and essential safety tips for charging and handling.",
    readTime: "7 min read",
    image: "https://robosynckits.in/wp-content/uploads/2021/06/or.png"
  },
  {
    id: 4,
    title: "7-Segment Displays: Illuminating Numbers with Ease",
    authors: [
      { name: "Shivansh Agarwal", insta: "https://www.instagram.com/_shivansh.agarwal_/" }
    ],
    date: "2025-07-06",
    category: "Hardware",
    tags: ["Electronics", "Displays", "7-Segment"],
    excerpt: "Learn how 7-segment displays work to show numbers and characters, and explore practical wiring techniques to integrate them with microcontrollers.",
    readTime: "8 min read",
    image: "https://external-preview.redd.it/i-made-a-7-segment-display-module-that-allows-you-to-add-v0-Oys86qV1ClNmLsjpou8ZTD6HjmEaP4uvWuQW91HofFo.jpg?auto=webp&s=99075413144134b559de67677d5db5c9f5482034"
  },
  {
    id: 3,
    title: "Servo Motors: A Beginner's Guide",
    authors: [
      { name: "Bhavyanshika Gupta", insta: "https://www.instagram.com/_bhavyanshikagupta_9453/" },
      { name: "Maanya Gupta", insta: "https://www.instagram.com/maanya.g14/" }
    ],
    date: "2025-06-29",
    category: "Hardware",
    tags: ["Electronics", "Servo Motors"],
    excerpt: "Discover how servo motors enable precise motion control in robotics and automation, and how to connect them with your microcontroller.",
    readTime: "12 min read",
    image: "https://soldered.com/productdata/2015/02/DSC_2916-Edit.jpg"
  },
  {
    id: 2,
    title: "Infrared Sensors in Robotics",
    authors: [
      { name: "Kushal Makkar", insta: "https://www.instagram.com/kushal_m_06/" },
      { name: "Vanshika Aggarwal", insta: "https://www.instagram.com/vanshika_7605/" }
    ],
    date: "2025-06-22",
    category: "Sensors",
    tags: ["Arduino", "Electronics", "Infrared Sensors"],
    excerpt: "Discover how IR sensors enable object detection and line following in robots, and how to connect them with Arduino.",
    readTime: "10 min read",
    image: "https://srituhobby.com/wp-content/uploads/2021/04/1-36.jpg"
  },
  {
    id: 1,
    title: "Working with Arduino",
    authors: [
      { name: "Sanskar Phougat", insta: "https://www.instagram.com/sanskar__phougat/" }
    ],
    date: "2025-06-15",
    category: "Robotics",
    tags: ["Arduino", "Sensor", "Autonomous Navigation"],
    excerpt: "Learn about Ardunio programming and its applications in robotics. This tutorial covers the basics of Arduino, sensor integration, and building autonomous robots.",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJkdWlub3xlbnwwfHwwfHx8MA%3D%3D"
  }


  
    // {
    //   id: 2,
    //   title: "Introduction to ROS (Robot Operating System)",
    //   author: "Sneha Gupta", 
    //   date: "2024-01-22",
    //   category: "Software",
    //   tags: ["ROS", "Linux", "Robot Programming"],
    //   excerpt: "Discover the power of ROS for robotics development. This beginner-friendly tutorial introduces you to ROS concepts, node communication, and building your first robotic application.",
    //   readTime: "12 min read",
    //   image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg"
    // }
];
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'programming', name: 'Programming' },
    { id: 'hardware', name: 'Hardware' },
    { id: 'robotics', name: 'Robotics' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'iot', name: 'IoT' }
  ];

  const filteredMaterials = learningMaterials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || material.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredBlogs = techBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

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
              Knowledge{' '}
              <span className="bg-gradient-to-r from-violet-400 to-electric-400 bg-clip-text text-transparent">
                Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Access our comprehensive collection of learning materials, tutorials, and tech blogs
              to enhance your robotics knowledge and skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search materials and blogs..."
                className="w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-violet-500 to-electric-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

     {/* Learning Materials */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <div className="flex items-center space-x-3 mb-6">
        <BookOpen className="w-8 h-8 text-violet-400" />
        <h2 className="text-3xl md:text-4xl font-bold text-white">Learning Materials</h2>
      </div>
      <p className="text-xl text-gray-400">
        Download comprehensive guides, tutorials, and reference materials
      </p>
    </motion.div>

    {filteredMaterials.length === 0 ? (
      <div className="text-center text-white/70 py-20">
        <h2 className="text-2xl font-bold mb-2 text-white">No material found in this category</h2>
        <p className="text-base">Try selecting a different category or using the search bar.</p>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material, index) => (
          <motion.div
            key={material.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-violet-500/50 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {material.type === 'pdf' ? (
                  <FileText className="w-8 h-8 text-red-400" />
                ) : material.type === 'video' ? (
                  <Video className="w-8 h-8 text-blue-400" />
                ) : (
                  <Code className="w-8 h-8 text-green-400" />
                )}
                <div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      material.category === 'programming'
                        ? 'bg-blue-500/20 text-blue-400'
                        : material.category === 'hardware'
                        ? 'bg-orange-500/20 text-orange-400'
                        : material.category === 'robotics'
                        ? 'bg-violet-500/20 text-violet-400'
                        : 'bg-green-500/20 text-green-400'
                    }`}
                  >
                    {material.category}
                  </span>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
              {material.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{material.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-500" />
              <a
                href={material.downloadUrl}
                download
                className="px-4 py-2 bg-gradient-to-r from-violet-500 to-electric-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    )}
  </div>
</section>


      {/* Tech Blogs */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-8 h-8 text-electric-400" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Tech Blogs</h2>
            </div>
            <p className="text-xl text-gray-400">
              Insights and tutorials written by our community members
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-violet-500/50 transition-all duration-300 group"
              >
                <div className="aspect-video bg-gray-700 relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-violet-500 text-white text-xs font-medium rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(blog.date).toLocaleDateString("en-GB")}</span>
                      </div>
                      
                    </div>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white group-hover:text-violet-400 transition-colors duration-300">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">{blog.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center space-x-1 px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                        >
                          <Tag className="w-3 h-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex felx-wrap items-center justify-between gap-2 pt-4 border-t border-gray-700">
                    <div className="text-sm text-gray-400">
                      By{" "}
                      {blog.authors.map((author, index) => (
                        <span key={index}>
                          <a
                            href={author.insta}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-violet-400 hover:underline"
                          >
                            {author.name}
                          </a>
                          {index < blog.authors.length - 2 && ", "}
                          {index === blog.authors.length - 2 && " & "}

                        </span>
                      ))}
                    </div>

 <Link
  to={`/blog/${blog.id}`}
  className="flex items-center space-x-2 text-violet-400 hover:text-violet-300 transition-colors">
  <span>Read More</span>
  <ArrowRight className="w-4 h-4" />
</Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeHub;