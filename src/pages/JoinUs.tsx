import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, GraduationCap, MapPin, Heart, Hash, Info,ArrowUp, ArrowDown,Clock, Calendar, AlertCircle, Link } from 'lucide-react';
import  db  from "../firebase"; // adjust path if needed
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from 'react';


interface FormDataType {
  fullName: string;
  enrollmentNumber: string;
  email: string;
  mobile: string;
  branch: string;
  batch: string;
  accommodation: string;
  domains: string[];
  driveLink: string;
}

const JoinUs = () => {
const [formData, setFormData] = useState<FormDataType>({
    fullName: '',
    enrollmentNumber: '',
    email: '',
    mobile: '',
    branch: '',
    batch: '',
    accommodation: '',
    domains: [],
    driveLink: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ADDED: Time-based form availability state
  const [formStatus, setFormStatus] = useState<'before' | 'active' | 'after'>('before');
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  // MODIFIED: Define recruitment period in IST (UTC+5:30)
  //put time in ist format
  const RECRUITMENT_START = new Date('2025-06-21T00:00:00+05:30'); // Start date in IST
  const RECRUITMENT_END = new Date('2025-06-27T23:59:59+05:30');   // End date in IST

  // MODIFIED: Helper function to get current time in IST
  const getCurrentISTTime = () => {
    const now = new Date();
    // Convert to IST by adding 5 hours and 30 minutes to UTC
    const istOffset = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    return new Date(utc + istOffset);
  };

  // MODIFIED: Format date for IST display
  const formatDateIST = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }) + ' IST';
  };

  // MODIFIED: Check form availability and update countdown using IST
  useEffect(() => {
    const checkFormAvailability = () => {
      const nowIST = getCurrentISTTime();
      
      if (nowIST < RECRUITMENT_START) {
        setFormStatus('before');
        // Calculate time until recruitment starts
        const timeDiff = RECRUITMENT_START.getTime() - nowIST.getTime();
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        setTimeRemaining(`${days}d ${hours}h ${minutes}m ` );
      } else if (nowIST >= RECRUITMENT_START && nowIST <= RECRUITMENT_END) {
        setFormStatus('active');
        // Calculate time until recruitment ends
        const timeDiff = RECRUITMENT_END.getTime() - nowIST.getTime();
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        setTimeRemaining(`${days}d ${hours}h ${minutes}m`);
      } else {
        setFormStatus('after');
        setTimeRemaining('');
      }
    };

    // Check immediately
    checkFormAvailability();
    
    // Update every minute
    const interval = setInterval(checkFormAvailability, 60000);
    
    return () => clearInterval(interval);
  }, []);


  const branches = [
    'CSE',
    'ECE',
    'Int. CSE',
    'ECM',
    'IT',
    'BCA',
    'EE-VLSI',
    'EC-ACT',
    'M&C',
    'BioTech',
    'BBA',
    'Other'
  ];
  const domains = [
    'Technical',
    'Management',
    'Creative',
    'Digital',
    'Marketing',
    'Cinematography'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleDomainRanking = (domain: string, action: 'add' | 'remove' | 'up' |'down') => {
    setFormData(prev => {
      const currentDomains = [...(prev.domains as string[])];
      
      switch (action) {
        case 'add':
          if (!currentDomains.includes(domain) && currentDomains.length < 6) {
            return { ...prev, domains: [...currentDomains, domain] };
          }
          break;
        case 'remove':
          return { ...prev, domains: currentDomains.filter(d => d !== domain) };
        case 'up':
          const upIndex = currentDomains.indexOf(domain);
          if (upIndex > 0) {
            [currentDomains[upIndex], currentDomains[upIndex - 1]] = [currentDomains[upIndex - 1], currentDomains[upIndex]];
            return { ...prev, domains: currentDomains };
          }
          break;
        case 'down':
          const downIndex = currentDomains.indexOf(domain);
          if (downIndex < currentDomains.length - 1 && downIndex !== -1) {
            [currentDomains[downIndex], currentDomains[downIndex + 1]] = [currentDomains[downIndex + 1], currentDomains[downIndex]];
            return { ...prev, domains: currentDomains };
          }
          break;
      }
      return prev;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  await new Promise(resolve => setTimeout(resolve, 2000));

  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    await addDoc(collection(db, "volunteerForms"), {
      ...formData,
      submittedAt: new Date().toISOString()
    });

    setIsSubmitting(false);
    setSubmitted(true); // this will trigger your success UI
  } catch (error) {
    console.error("Error adding document: ", error);
    setIsSubmitting(false);
    alert("Failed to submit the form."); // Keep this for error only
  }
};

useEffect(() => {
  if (submitted) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}, [submitted]);

  if (submitted) {
    return (

      <div className="pt-16 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto text-center space-y-6 p-8"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto flex items-center justify-center">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">Application Submitted!</h2>
          <p className="text-gray-400">
            Thank you for your interest in joining μCR. We'll review your application and get back to you soon.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                enrollmentNumber: '',
                email: '',
                mobile: '',
                branch: '',
                batch: '',
                accommodation: '',
                domains: [],
                driveLink: ''
              });
            }}
            className="px-6 py-3 bg-gradient-to-r from-violet-500 to-electric-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Submit Another Application
          </button>
        </motion.div>
      </div>
    );
  }

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
              Become a{' '}
              <span className="bg-gradient-to-r from-violet-400 to-electric-400 bg-clip-text text-transparent">
                μMentor
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Join our passionate community of innovators and help shape the future of robotics.
              Whether you're a beginner or an expert, there's a place for you at μCR.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MODIFIED: Recruitment Status Banner with IST times */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`rounded-lg p-6 border-2 ${
              formStatus === 'before' 
                ? 'bg-yellow-500/10 border-yellow-500/30' 
                : formStatus === 'active'
                ? 'bg-green-500/10 border-green-500/30'
                : 'bg-red-500/10 border-red-500/30'
            }`}
          >
            <div className="flex items-center justify-center space-x-4">
              {formStatus === 'before' && (
                <>
                  <Clock className="w-8 h-8 text-yellow-400" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-yellow-400 mb-2">Recruitment Opens Soon!</h3>
                    <p className="text-gray-300 mb-2">
                      Applications will open on <strong>{formatDateIST(RECRUITMENT_START)}</strong>
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-yellow-400">
                      <span className="text-lg font-mono bg-yellow-500/20 px-3 py-1 rounded">
                        {timeRemaining}
                      </span>
                      <span>remaining</span>
                    </div>
                  </div>
                </>
              )}
              
              {formStatus === 'active' && (
                <>
                  <Calendar className="w-8 h-8 text-green-400" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-green-400 mb-2">🎉 Recruitment is Now Open!</h3>
                    <p className="text-gray-300 mb-2">
                      Applications close on <strong>{formatDateIST(RECRUITMENT_END)}</strong>
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-green-400">
                      <span className="text-lg font-mono bg-green-500/20 px-3 py-1 rounded">
                        {timeRemaining}
                      </span>
                      <span>left to apply</span>
                    </div>
                  </div>
                </>
              )}
              
              {formStatus === 'after' && (
                <>
                  <AlertCircle className="w-8 h-8 text-red-400" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-red-400 mb-2">Recruitment Period Closed</h3>
                    <p className="text-gray-300 mb-2">
                      Applications closed on <strong>{formatDateIST(RECRUITMENT_END)}</strong>
                    </p>
                    <p className="text-gray-400">
                      Thank you for your interest! Stay tuned for our next recruitment cycle.
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Join μCR?
            </h2>
            <p className="text-xl text-gray-400">
              Discover the benefits of being part of our robotics community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Hands-on Learning",
                description: "Work on real projects and gain practical experience with cutting-edge robotics technology."
              },
              {
                icon: "🤝",
                title: "Collaborative Environment",
                description: "Join a supportive community of like-minded individuals passionate about innovation."
              },
              {
                icon: "🏆",
                title: "Competition Opportunities",
                description: "Participate in national and international robotics competitions and showcase your skills."
              },
              {
                icon: "👨‍🏫",
                title: "Expert Mentorship",
                description: "Learn from experienced faculty and industry professionals who guide your journey."
              },
              {
                icon: "🔬",
                title: "Research Projects",
                description: "Contribute to cutting-edge research in robotics and publish your findings."
              },
              {
                icon: "🌟",
                title: "Career Growth",
                description: "Build a strong portfolio and network that opens doors to exciting career opportunities."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-violet-500/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODIFIED: Conditional Application Form Section */}
    {formStatus === 'active' ? (
        // Application Form
        <section className="py-20 bg-gray-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-400">
                Fill out the form below to start your journey with μCR
              </p>
            </motion.div>
            {/* Application Guidelines Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="bg-gradient-to-r from-violet-500/10 to-electric-500/10 border border-violet-500/30 rounded-lg p-6 mb-8"
            >
              <div className="flex items-start space-x-3">
  <Info className="w-6 h-6 text-violet-400 mt-1 flex-shrink-0" />
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-white">Application Guidelines</h3>
    <div className="space-y-3 text-gray-300">
      <div className="flex items-start space-x-2">
        <span className="text-violet-400 font-bold">•</span>
        <p className="text-sm">Fill out all required fields marked with an asterisk (*) to ensure your application is processed.</p>
      </div>
      <div className="flex items-start space-x-2">
        <span className="text-violet-400 font-bold">•</span>
        <p className="text-sm">Use your <strong>personal email address</strong> instead of your university email—our responses often land in the spam folder of university inboxes.</p>
      </div>
      <div className="flex items-start space-x-2">
        <span className="text-violet-400 font-bold">•</span>
        <p className="text-sm">Enter your enrollment number exactly as it appears on your student ID card.</p>
      </div>
      <div className="flex items-start space-x-2">
        <span className="text-violet-400 font-bold">•</span>
        <p className="text-sm"><strong>Domain Preferences:</strong> Rank ALL {domains.length} domains in order of your preference (1 = Most Preferred, {domains.length} = Least Preferred). Use the arrow buttons to reorder your selections.</p>
      </div>
      <div className="flex items-start space-x-2">
        <span className="text-violet-400 font-bold">•</span>
        <p className="text-sm">Only one application per student is allowed. Multiple submissions may lead to disqualification.</p>
      </div>
      <div className="flex items-start space-x-2">
        <span className="text-violet-400 font-bold">•</span>
        <p className="text-sm"> Join the<a
    href="https://chat.whatsapp.com/Lx0UCvhKFwoHyMDu22YGiZ" 
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-400 hover:underline"
  >
    WhatsApp Helpdesk
  </a></p>
      </div>
      <div className="flex items-start space-x-2">
        <span className="text-violet-400 font-bold">•</span>
        <p className="text-sm">Drive link (portfolio/project showcase) is optional, but recommended for applicants interested in the <strong>Digital Domain</strong>, <strong>Cinematography</strong> or <strong>Technical Domain</strong> for showcasing past work and personal projects.</p>
      </div>
    </div>
  </div>
</div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-gray-800/50 p-8 rounded-lg border border-gray-700"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      <Hash className="w-4 h-4 inline mr-2" />
                      Enrollment Number *
                    </label>
                    <input
                      type="text"
                      name="enrollmentNumber"
                      value={formData.enrollmentNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                      placeholder="e.g., 24010XXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                      placeholder="98765 43XXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Accommodation *
                    </label>
                    <select
                      name="accommodation"
                      value={formData.accommodation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                    >
                      <option value="">Select accommodation</option>
                      <option value="hosteller">Hosteller</option>
                      <option value="dayscholar">Day Scholar</option>
                    </select>
                  </div>
               
               {/* Drive Link Input (Optional) */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    <Link className="w-4 h-4 inline mr-2" />
                    Drive Link to Past Work (optional)
                  </label>
                  <input
                    type="url"
                    name="driveLink"
                    value={formData.driveLink}
                    onChange={handleInputChange}
                    placeholder="https://drive.google.com/..."
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
                 </div>
                {/* Academic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <GraduationCap className="w-4 h-4 inline mr-2" />
                      Branch *
                    </label>
                    <select
                      name="branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                    >
                      <option value="">Select your branch</option>
                      {branches.map((branch) => (
                        <option key={branch} value={branch}>
                          {branch}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      <GraduationCap className="w-4 h-4 inline mr-2" />
                      Batch *
                    </label>
                    <input
                      type="text"
                      name="batch"
                      value={formData.batch}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your batch (e.g., B1, A2, FF1)"
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Domain Preferences */}
                <div>
  <label className="block text-white font-medium mb-4">
    Domain Preferences (Rank all {domains.length} domains in order of preference) *
  </label>

  {/* Available Domains */}
  <div className="mb-6">
    <h4 className="text-sm font-medium text-gray-300 mb-3">
      Available Domains <span className="text-xs text-gray-500">(Click to add):</span>
    </h4>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {domains
        .filter((domain) => !formData.domains.includes(domain))
        .map((domain) => (
          <button
            key={domain}
            type="button"
            onClick={() => handleDomainRanking(domain, 'add')}
            className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-gray-300 hover:border-violet-400 hover:bg-gray-600 transition-all duration-300 text-sm text-center"
          >
            {domain}
          </button>
        ))}
    </div>
  </div>

                  {/* Selected Domains with Ranking */}
                  {formData.domains.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-3">Your Preference Ranking:</h4>
                      <div className="space-y-3">
                        {formData.domains.map((domain, index) => (
                          <div
                            key={domain}
                            className="flex items-center justify-between p-4 bg-gradient-to-r from-violet-500/20 to-electric-500/20 border border-violet-500/30 rounded-lg"
                          >
                            <div className="flex items-center space-x-3 w-full">
  <div className="w-8 h-8 flex-shrink-0 bg-gradient-to-r from-violet-500 to-electric-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
    {index + 1}
  </div>
  <span className="text-white font-medium text-sm truncate max-w-[120px] sm:max-w-[180px] md:max-w-[220px]">
    {domain}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button
                                type="button"
                                onClick={() => handleDomainRanking(domain, 'up')}
                                disabled={index === 0}
                                className="p-1 rounded bg-gray-600 text-gray-300 hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                              >
                                <ArrowUp className="w-4 h-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDomainRanking(domain, 'down')}
                                disabled={index === formData.domains.length - 1}
                                className="p-1 rounded bg-gray-600 text-gray-300 hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                              >
                                <ArrowDown className="w-4 h-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDomainRanking(domain, 'remove')}
                                className="p-1 rounded bg-red-600 text-white hover:bg-red-500 transition-colors"
                              >
                                ×
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="text-sm text-gray-400 mt-3">
                    Selected: {formData.domains.length}/{domains.length} domains
                    {formData.domains.length < domains.length && (
                      <span className="text-yellow-400 ml-2">
                        (Please rank all {domains.length} domains to proceed)
                      </span>
                    )}
                  </p>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting || formData.domains.length !== domains.length}
                    className="px-8 py-4 bg-gradient-to-r from-violet-500 to-electric-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      ) : (
        // ADDED: Alternative content when form is not available
        <section className="py-20 bg-gray-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {formStatus === 'before' ? (
                <>
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mx-auto flex items-center justify-center">
                    <Clock className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Get Ready to{' '}
                    <span className="bg-gradient-to-r from-violet-400 to-electric-400 bg-clip-text text-transparent">
                      Apply Soon!
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Our recruitment process will begin soon. Use this time to prepare your application
                    and learn more about our various domains and ongoing projects.
                  </p>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-3">How to Prepare:</h3>
                    <ul className="text-left text-gray-300 space-y-2">
                      <li>• Explore our projects and understand different domains</li>
                      <li>• Prepare for your Interview in preferred domain</li>
                      <li>• Follow us on social media for updates</li>
                      <li>
  • Join the{" "}
  <a
    href="https://chat.whatsapp.com/Lx0UCvhKFwoHyMDu22YGiZ" // Replace with your actual WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-400 hover:underline"
  >
    WhatsApp Helpdesk
  </a>
</li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mx-auto flex items-center justify-center">
                    <AlertCircle className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Recruitment{' '}
                    <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                      Closed
                    </span>
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Thank you for your interest in joining μCR! Our recruitment period has ended,
                    but don't worry - we'll be back with new opportunities soon.
                  </p>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-400 mb-3">Stay Connected:</h3>
                    <ul className="text-left text-gray-300 space-y-2">
                      <li>• Follow our social media for next recruitment announcements</li>
                      <li>• Attend our events and workshops as a guest</li>
                      <li>• Connect with current members for guidance</li>
                    </ul>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </section>
      )}
          </div>
  );
};
export default JoinUs;