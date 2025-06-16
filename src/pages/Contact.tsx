import React, { useState } from 'react';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaDiscord } from "react-icons/fa";
import { motion } from 'framer-motion';
import { MapPin, Clock, Mail, Phone, Send, MessageCircle, User } from 'lucide-react';
import { addDoc, collection } from "firebase/firestore";
import  db from "../firebase"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Only save subject and message anonymously
    await addDoc(collection(db, "ucrMessages"), {
      subject: formData.subject,
      message: formData.message,
      submittedAt: new Date().toISOString()
    });

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        subject: '',
        message: ''
      });
    }, 3000);
  } catch (error) {
    console.error("Error submitting anonymous feedback:", error);
    setIsSubmitting(false);
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
              Contact{' '}
              <span className="bg-gradient-to-r from-violet-400 to-electric-400 bg-clip-text text-transparent">
                & Connect
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Have questions, ideas, or feedback ? Reach out to μCR, we're excited to connect, collaborate, and welcome you into our robotics community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Whether you're interested in joining our team, collaborating on projects,
                  or just want to learn more about robotics, we'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-electric-500 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">
                      μCR Sac Room,<br />
                      Jaypee Institute of Information Technology,<br/> Sector 62, Noida
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-electric-500 to-cyan-500 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-400">
                      Monday - Friday: 10:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div> */}

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">
                       General: ucrjiit62@gmail.com<br />
                      Projects: projects@ucr-robotics.edu<br />
                      Events: events@ucr-robotics.edu 
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">
                      President: +91 98765 43210<br />
                      Secretary: +91 94140<br />
                      Treaseau: +91 98765 43212
                    </p>
                  </div>
                </div> */}
              </div>

              {/* Social Media Links */}
              <div>
  <h3 className="text-white font-semibold mb-4">Follow Us</h3>
  <div className="flex space-x-4">
    {[
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/ucrjiit',
        color: 'from-pink-500 to-purple-500',
        icon: <FaInstagram className="text-white w-5 h-5" />
      },
      {
        name: 'LinkedIn',
        href: 'http://www.linkedin.com/company/ucr-jiit',
        color: 'from-blue-500 to-blue-600',
        icon: <FaLinkedinIn className="text-white w-5 h-5" />
      },
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/uCR.jiit',
        color: 'from-blue-600 to-blue-800',
        icon: <FaFacebookF className="text-white w-5 h-5" />
      },
      {
        name: 'Discord',
        href: 'https://discord.gg/5rA6Mp7K',
        color: 'from-indigo-500 to-indigo-700',
        icon: <FaDiscord className="text-white w-5 h-5" />
      }
    ].map((social) => (
      <a
        key={social.name}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300`}
        aria-label={social.name}
      >
        {social.icon}
      </a>
    ))}
  </div>
</div>

            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 p-8 rounded-lg border border-gray-700"
            >
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="w-6 h-6 text-violet-400" />
                <h3 className="text-2xl font-bold text-white">Send us a Feedback</h3>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto flex items-center justify-center">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Message Sent!</h4>
                  <p className="text-gray-400">
                    Thank you for your Valuable Feedback. 
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    
                  </div> */}

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                      placeholder="Tell us more about your feedback or query..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-violet-500 to-electric-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;