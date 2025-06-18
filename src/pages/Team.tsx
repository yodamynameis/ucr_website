import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { Github, Linkedin,Instagram, Mail, Filter } from 'lucide-react';
import ujjawal from '../assets/ujjawal.png';
import ayush from '../assets/ayush.jpg';
import ananya from '../assets/ananya.jpg';
import ayush_agg from '../assets/ayush_agg.jpeg';
import ayush_pan from '../assets/ayush_pan.jpg';
import bhavyanshika from '../assets/bhavyanshika.jpg';
import krishna from '../assets/krishna.jpg';
import kushal from '../assets/kushal.jpg';
import maadhvan from '../assets/maadhvan.jpg';
import mahima from '../assets/mahima.jpg';
import manya from '../assets/manya.jpg';
import rishabh from '../assets/rishabh.jpg';
import shivansh from '../assets/shivansh.jpg';
import vaibhav from '../assets/vaibhav.webp';
import vanshika from '../assets/vanshika.jpg';
import hema from '../assets/hema.png';
import anshul from '../assets/anshul.jpg';
import arjun from '../assets/arjun.jpg';
const Team = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  
  const facultyCoordinator = {
      id: 5,
      name: "Dr.Hema Nagaraja",
      role: "Faculty Coordinator",
      category: "faculty",
      branch: "Computer Science",
      image: hema,
      bio: "Specializes in AI and machine learning applications in robotics.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "hema.n@jiit.ac.in"
  };
  const seniorAdvisors = [
   {
      id: 1,
      name: "Ujjawal Garg",
      role: "Senior Advisor",
      category: "advisor",
      branch: "Integrated Computer Science and Engineering",
      image: ujjawal, 
      bio: "Expert in embedded systems and robotics with 15+ years of experience.",
      github:"https://github.com/ujjawalgarg7",
      linkedin: "https://www.linkedin.com/in/ujjawal-garg-588585202 ",
      instagram: "https://www.instagram.com/ujjawal.garg7",
      email: "ujjawalgarg7@gmail.com"
    },
      {
      id: 2,
      name: "Ayush Dubey",
      role: "Senior Advisor",
      category: "advisor",
      branch: "Electronics & Communication Engineering",
      image: ayush, 
      bio: "Expert in embedded systems and robotics with 15+ years of experience.",
      github: "https://github.com/ayushdubey85",       //change
      linkedin: "http://www.linkedin.com/in/ayush-dubey-122a75271",
      instagram: "https://www.instagram.com/ayushdubey85",
      email: "ayushdubeyjal63@gmail.com"
    },
    {
      id: 3,
      name: "Ashwin S Deshpande",
      role: "Senior Advisor",
      category: "advisor",
      branch: "Electronics & Communication Engineering",
     image: ayush_pan, 
      bio: "Expert in embedded systems and robotics with 15+ years of experience.",
      github: "https://www.github.com/r1ashwin",       //change
      linkedin: "https://www.linkedin.com/in/r1ashwin ",
      instagram: "https://www.instagram.com/r1ashwin",
      email: "r1ashwindeshpande@gmail.com "
    },
       {
      id: 4,
      name: "Ayush Pandey",
      role: "Senior Advisor",
      category: "advisor",
      branch: "Information Technology Engineering",
      image: ayush_pan, 
      bio: "Expert in embedded systems and robotics with 15+ years of experience.",
      //github: "https://github.com",       //change
      linkedin: "https://www.linkedin.com/in/ayush-pandey-b86659291",
      instagram: "https://www.instagram.com/ayush_10.2",
      email: "ayush.pandeyy10.2@gmail.com "
    },
  ];

  const teamMembers = [
    // Leadership Team
    {
      id: 6,
      name: "Anshul Singh",
      role: "President",
      category: "leadership",
      branch: "Computer Science and Engineering",
      image: anshul,
      bio: "Leading with vision, patience, and unity to empower teams and inspire innovation.",
      github: "https://github.com/yodamynameis",
      linkedin: "http://www.linkedin.com/in/anshulsingh27",
      instagram: "https://www.instagram.com/unshul.singh/",
      email: "singhanshul2102@gmail.com"
    },
      {
      id: 7,
      name: "Shivansh Katiyar",
      role: "Vice President",
      category: "leadership",
      branch: "Electronics & Communication Engineering",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      bio: "Drives excellence with strategic insight, strong Technical skills, and unwavering commitment to growth.",
      github: "https://github.com/Shivansh-Katiyar",
      linkedin: "https://linkedin.com/in/shivanshkatiyar1245",
      instagram: "https://www.instagram.com/katiyar_shivansh_2k05/",
      email: "katiyarshivansh1245@gmail.com"
    },
    {
      id: 8,
      name: "Krishna Gupta",
      role: "Secretary",
      category: "leadership",
      branch: "Computer Science Engineering",
      image: krishna,       
      bio: "Ensures seamless coordination, clear communication, and efficient execution with dedication and precision.",
      github: "https://github.com/krishnagupta03",
      linkedin: "http://linkedin.com/in/krishna-gupta-031411303",
      instagram: "https://www.instagram.com/krishna.x18",
      email: "krishna30.k30@gmail.com"
    },
       {
      id: 15,
      name: "Kamna Thakur",
      role: "128 Head",
      category: "leadership",
      branch: "Computer Science Engineering",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      bio: "Mechanical design expert with focus on robotic kinematics and dynamics.",
      github: "https://github.com/Kamna22",
      linkedin: "https://www.linkedin.com/in/kamna-thakur-6037462a1/",
      instagram: "https://www.instagram.com/kamnaaa_22",
      email: "thakurkamna22@gmail.com"
    },
      // Finance Team
    {
      id: 9,
      name: "Sanskar Phougat",
      role: "Treasurer",
      category: "finance",
      branch: "Electronics & Communication Engineering",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      bio: "Manages finances with integrity, transparency, and precision, ensuring smooth operations and sustainable growth.",
      github: "https://github.com/sanskar-bot",
      linkedin: "https://www.linkedin.com/in/sanskar-phougat",
      instagram: "https://www.instagram.com/sanskar__phougat/",
      email: "sanskarphougat2004@gmail.com"
    },
     // Technical Team
    {
      id: 10,
      name: "Bhavyanshika Gupta",
      role: "Technical Head",
      category: "tech",
      branch: "Computer Science Engineering",
      image: bhavyanshika,
      bio: "Leads innovation with expertise, creativity, and passion, driving cutting-edge solutions and technical excellence.",
      github: "https://github.com/BhavyanshikaGupta",
      linkedin: "https://www.linkedin.com/in/bhavyanshika-gupta-8888bb284",
      instagram: "https://www.instagram.com/_bhavyanshikagupta_9453/",
      email: "bhavyanshikagupta@gmail.com"
    },
     {
      id: 11,
      name: "Rishabh Kapur",
      role: "Technical Head",
      category: "tech",
      branch: "Computer Science Engineering",
      image: rishabh,
      bio: "Innovates and engineers RC planes with precision, vision, and impact-driven design.",
      github: "https://github.com/Kapurrrishabh",
      linkedin: "https://www.linkedin.com/in/rishabh-kapur/",
      instagram: "https://www.instagram.com/rishabh.kapur/",
      email: "kapur.rishabh13102003@gmail.com"
    },
      {
      id: 12,
      name: "Ananya Priyadarshini",
      role: "Technical Head",
      category: "tech",
      branch: "Electronics & Communication Engineering",
      image: ananya,
      bio: "Drives innovation with sharp technical skills, creative vision, and a passion for impactful solutions.",
      github: "https://github.com/Annanya-pS",
      linkedin: "http://www.linkedin.com/in/annanya-priyadarshini-sahoo-4663972a1",
      instagram: "https://www.instagram.com/annanya_ps?igsh=ZzVub2E0cGdseHph",
      email: "annanyapsahoo2020@gmail.com"
    },
      {
      id: 13,
      name: "Maanya Gupta",
      role: "Technical Head",
      category: "tech",
      branch: "Computer Science Engineering",
      image: manya,
      bio: "Blends innovation and dedication to lead impactful tech initiatives with clarity, creativity, and precision.",
      github: "https://github.com/maanya14",
      linkedin: "http://www.linkedin.com/in/maanya14",
      instagram: "https://www.instagram.com/maanya.g14/",
      email: "maanya.g14@gmail.com"
    },
     {
      id: 14,
      name: "Ayush Agrawal",
      role: "Technical Head",
      category: "tech",
      branch: "Computer Science Engineering",
      image: ayush_agg,
      bio: "Leads with innovation, technical expertise, and a passion for building efficient, future-ready solutions.",
      github: "https://github.com/agrawalayush29",
      linkedin: "http://www.linkedin.com/in/ayush-agrawal-1825582a0",
      instagram: "https://www.instagram.com/ayushagrawal1839/",
      email: "ayush.2601agrawal@gmail.com"
    },
    // Management Team
    {
      id: 16,
      name: "Shivansh Agarwal",
      role: "Management Head",
      category: "management",
      branch: "Computer Science Engineering",
     image: shivansh,
      bio: "Supervises robotics initiatives, drives embedded systems excellence, and ensures smooth hub operations.",
      github: "https://github.com/Shivansh3127",
      linkedin: "https://www.linkedin.com/in/shivansh-agarwal-b79b802a6",
      instagram: "https://www.instagram.com/_shivansh.agarwal_/",
      email: "shivansh3127@gmail.com"
    },
        {
      id: 17,
      name: "Arjun Gupta",
      role: "Management Head",
      category: "management",
      branch: "Computer Science Engineering",
      image:arjun,
      bio: "Excels in organizing, streamlining operations, and ensuring smooth execution with sharp strategy and leadership.",
      github: "https://github.com/arjun-1703",
      linkedin: "https://www.linkedin.com/in/arjun-gupta-74b726286",
      instagram: "https://www.instagram.com/arjunn._.04/",
      email: "arjgupta05@gmail.com"
    },
        {
      id: 18,
      name: "Madhavan Verma",
      role: "Management Head",
      category: "management",
      branch: "Electronics & Communication Engineering",
      image:maadhvan,
      bio: "Guides technical direction, team collaboration, and project flow in robotics and microcontrollers hub.",
      github: "https://github.com/madhav-mvk",
      linkedin: "https://www.linkedin.com/in/madhavan-verma-70a71036b",
      instagram: "https://www.instagram.com/madhav_mvk/",
      email: "vermamadhav761@gmail.com"
    },
        {
      id: 19,
      name: "Vanshika Aggarwal",
      role: "Management Head",
      category: "management",
      branch: "Electronics & Communication Engineering",
      image: vanshika,
      bio: "Leads innovation and strategy in microcontrollers and robotics, ensuring efficient hub management and growth.",
      github: "https://github.com/vanshika7605",
      linkedin: "https://www.linkedin.com/in/vanshika-aggarwal-b25399355/",
      instagram: "https://www.instagram.com/vanshika_7605/",
      email: "aggarwalvanshika54@gmail.com"
    },
       // Digital Team
    {
      id: 20,
      name: "Himanshi Sharma",
      role: "Digital Head",
      category: "digital",
      branch: "Computer Science Engineering",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      bio: "Leads digital strategy, manages online presence, and promotes robotics innovations through engaging content.",
      github: "https://github.com/Himanshi-S09",
      linkedin: "https://www.linkedin.com/in/himanshisharma09",
      instagram: "https://www.instagram.com/himanshiiii._.s09/",
      email: "himanshi5sharma9@gmail.com"
    },
      {
      id: 21,
      name: "Nandini Verma",
      role: "Cinematography Head",
      category: "cinematography",
      branch: "Electronics & Communication Engineering",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      bio: "Drives creative direction in video, photography, and digital outreach for robotics hub activities.",
      github: "https://github.com/ic7400",
      linkedin: "http://www.linkedin.com/in/nandini-verma26712431",
      instagram: "https://www.instagram.com/nandini_v26/",
      email: "nnandinivermaa@gmail.com"
    },

    // Marketing Team
    {
      id: 22,
      name: "Kanika Gupta",
      role: "Marketing Head",
      category: "marketing",
      branch: "Computer Science Engineering",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      bio: "Leads strategic marketing to promote robotics innovation, technical workshops, and student engagement initiatives",
      github: "https://github.com/kaniikagupta",
      linkedin: "http://linkedin.com/in/kanika-gupta-276a13368",
      instagram: "https://www.instagram.com/_kaniikagupta_/",
      email: "kanikampr@gmail.com"
    },
        {
      id: 23,
      name: "Kushal Makkar",
      role: "Marketing Head",
      category: "marketing",
      branch: "Electronics & Communication Engineering",
     image: kushal,
      bio: "Directs all marketing efforts, enhancing public engagement with robotics events and technological achievements.",
      github: "https://github.com/kushal06-makkar",
      linkedin: "http://www.linkedin.com/in/kushal-makkar-ba3340342",
      instagram: "https://www.instagram.com/kushal_m_06/",
      email: "makkarkushal06@gmail.com"
    },
       {
      id: 24,
      name: "Vaibhav Suryavanshi",
      role: "Marketing Head",
      category: "marketing",
      branch: "Computer Science Engineering",
     image:vaibhav,
      bio: "Manages promotions, builds strategic collaborations, and expands reach for the robotics hub.",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "vaibhav.@student.edu"
    },
     
    // Creative Team
    {
      id: 25,
      name: "Mahima Ancy Verghese",
      role: "Creative Head",
      category: "creative",
      branch: "Electronics & Communication Engineering",
      image: mahima,
      bio: "Oversees design, aesthetics, and creative media for robotics events, workshops, and public engagement.",
      github: "https://github.com/Mahima9186",
      linkedin: "https://www.linkedin.com/in/mahima-ancy-verghese-75214b370",
      instagram: "https://www.instagram.com/ancy.mahima",
      email: "mahima.ancy@gmail.com"
    },
      {
      id: 26,
      name: "Anshika Aggarwal",
      role: "Creative Head",
      category: "creative",
      branch: "Computer Science Engineering",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      bio: "Crafts engaging visuals and creative assets that represent the hub's identity and innovation.",
      github: "https://github.com/aggarwalanshika",
      linkedin: "http://www.linkedin.com/in/anshika-aggarwal-207120228",
      instagram: "https://www.instagram.com/anshika.aggarwal.2804/",
      email: "aggarwalanshika4@gmail.com"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Members', count: teamMembers.length },
    { id: 'leadership', name: 'Leadership', count: teamMembers.filter(m => m.category === 'leadership').length },
    { id: 'tech', name: 'Technical', count: teamMembers.filter(m => m.category === 'tech').length },
    { id: 'finance', name: 'Finance', count: teamMembers.filter(m => m.category === 'finance').length },
    { id: 'management', name: 'Management', count: teamMembers.filter(m => m.category === 'management').length },
    { id: 'marketing', name: 'Marketing', count: teamMembers.filter(m => m.category === 'marketing').length },
    { id: 'digital', name: 'Digital', count: teamMembers.filter(m => m.category === 'digital').length },
    { id: 'cinematography', name: 'Cinematography', count: teamMembers.filter(m => m.category === 'cinematography').length },
    { id: 'creative', name: 'Creative', count: teamMembers.filter(m => m.category === 'creative').length },
  ];

  const filteredMembers = filter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === filter);

type Member = {
  name: string;
  image: string;
  github?: string;
  linkedin: string;
  instagram: string;
  email: string;
  role: string;
  branch?: string;
  bio: string;
  category:
    | 'faculty'
    | 'advisor'
    | 'leadership'
    | 'tech'
    | 'finance'
    | 'management'
    | 'marketing'
    | 'digital'
    | 'cinematography'
    | string; // optional fallback
};


// Define props for the component
type MemberCardProps = {
  member: Member;
  index?: number;
};


const MemberCard = ({ member, index = 0 }: MemberCardProps) => (      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.6 }}
        className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-violet-500/50 transition-all duration-300 group"
      >
        {/* Profile Image */}
        <div className="aspect-square bg-gray-700 relative overflow-hidden">
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="absolute bottom-4 left-4 right-4">
      <div className="flex space-x-2">
       {/* GitHub (optional) */}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <Github className="w-4 h-4 text-white" />
          </a>
        )}

        {/* LinkedIn */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <Linkedin className="w-4 h-4 text-white" />
        </a>

        {/* Instagram */}
        <a
          href={member.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <Instagram className="w-4 h-4 text-white" />
        </a>

        {/* Email */}
        <a
          href={`mailto:${member.email}`}
          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <Mail className="w-4 h-4 text-white" />
        </a>
      </div>
    </div>
  </div>
</div>

        {/* Member Info */}
        <div className="p-6 h-[260px] flex flex-col justify-between space-y-3">
  {/* Top section */}
  <div>
    <h3 className="text-lg font-semibold text-white group-hover:text-violet-400 transition-colors duration-300">
      {member.name}
    </h3>
    <p className="text-violet-400 font-medium text-sm">{member.role}</p>

    {member.branch && (
      <div className="text-sm text-gray-400 mt-1">
        <p>{member.branch}</p>
      </div>
    )}

    <p className="text-gray-400 text-xs leading-relaxed mt-2">{member.bio}</p>
  </div>

  {/* Badge pinned at the bottom */}
  <div>
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
      member.category === 'faculty' ? 'bg-cyan-500/20 text-cyan-400' :
      member.category === 'leadership' ? 'bg-violet-500/20 text-violet-400' :
      member.category === 'tech' ? 'bg-red-500/20 text-red-400' :
      member.category === 'finance' ? 'bg-green-500/20 text-green-400' :
      member.category === 'management' ? 'bg-blue-500/20 text-blue-400' :
      member.category === 'creative' ? 'bg-pink-500/20 text-pink-400' :
      member.category === 'digital' ? 'bg-teal-500/20 text-teal-400' :
      member.category === 'cinematography' ? 'bg-teal-500/20 text-teal-400' :
      'bg-yellow-500/20 text-yellow-400'
    }`}>
      {member.category.charAt(0).toUpperCase() + member.category.slice(1)}
    </span>
  </div>
</div>

      </motion.div>
    );
  
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
                Our{' '}
                <span className="bg-gradient-to-r from-violet-400 to-electric-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Meet the passionate individuals who drive innovation and excellence at μCR.
                Our diverse team brings together expertise from various domains to create amazing robotics solutions.
              </p>
            </motion.div>
          </div>
        </section>
  
        {/* Faculty Coordinator Section */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Faculty{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Coordinator
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                Academic leadership and guidance for μCR
              </p>
            </motion.div>
  
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <MemberCard member={facultyCoordinator} />
              </div>
            </div>
          </div>
        </section>
  
        {/* Senior Advisors Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Senior{' '}
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Advisors
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                Expert guidance and mentorship from experienced Seniors
              </p>
            </motion.div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {seniorAdvisors.map((advisor, index) => (
                <MemberCard key={advisor.id} member={advisor} index={index} />
              ))}
            </div>
          </div>
        </section>
  
        {/* Student Team Section */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Core{' '}
                <span className="bg-gradient-to-r from-violet-400 to-electric-400 bg-clip-text text-transparent">
                  Team
                </span>
              </h2>
              <p className="text-xl text-gray-400">
                The driving force behind μCR's innovation and success
              </p>
            </motion.div>
  
            {/* Filter Section */}
            <div className="mb-12">
              <div className="flex items-center justify-center mb-6">
                <Filter className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-400 font-medium">Filter by Role</span>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {filters.map((filterOption) => (
                  <button
                    key={filterOption.id}
                    onClick={() => setFilter(filterOption.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                      filter === filterOption.id
                        ? 'bg-gradient-to-r from-violet-500 to-electric-500 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <span>{filterOption.name}</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {filterOption.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
  
            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredMembers.map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

      {/* Join Team CTA */}
    

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
              Want to Join Our{' '}
              <span className="bg-gradient-to-r from-violet-400 to-electric-400 bg-clip-text text-transparent">
                Amazing Team?
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're always looking for passionate individuals who share our vision of innovation
              and excellence in robotics. Join us and be part of something extraordinary.
            </p>
            <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 bg-gradient-to-r from-violet-500 to-electric-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
  onClick={() => navigate("/joinus")} // 👈 this line does the redirection
>
  Apply to Join μCR
</motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;