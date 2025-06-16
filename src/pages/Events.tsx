import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter } from 'lucide-react';
import FlipCard from "../components/FlipCard";
import { Link } from 'react-router-dom';
import interviewImg from '../assets/interview.png'; // Adjust the path as necessary
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
const Events = () => {
  const [filter, setFilter] = useState('all');
  const upcomingEvents = [
    // {
    //   id: 1,
    //   title: "Arduino Bootcamp for Beginners",
    //   date: "2024-02-15",
    //   time: "10:00 AM - 4:00 PM",
    //   location: "Robotics Lab, Block A",
    //   category: "workshop",
    //   participants: 30,
    //   description: "Comprehensive introduction to Arduino programming and basic electronics.",
    //   image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg"
    // },
     {
      id: 2,
      title: "Voulnteer Interviews ",
      date: "2025-07-01",
      time: "Will be informed",
      location: "Virtual" ,
      category: "interview",
      //participants: ,
      description: "Interviews to onboard passionate volunteers for the 2025-26 tenure for all departments.",
      image: interviewImg
    }
    // {
    //   id: 2,
    //   title: "National Robotics Championship",
    //   date: "2024-02-22",
    //   time: "9:00 AM - 6:00 PM",
    //   location: "Main Auditorium",
    //   category: "competition",
    //   participants: 150,
    //   description: "Annual robotics competition featuring line-following, obstacle avoidance, and autonomous navigation challenges.",
    //   image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg"
    // },
   
  ];

  const pastEvents = [
    {
      id: 10,
      title: "Orientation Workshop 2024",
      date: "2024-09-11",
      participants: 270,
      description: "The 3-day Orientation Workshop on Manual Robotics 2024 introduced freshers to the fundamentals of robotic design, mechanical systems, and control. With hands-on sessions and guided activities, participants gained practical experience in building and operating basic manually controlled robots.",
      gallery: {
      thumbnail: img1,
      driveLink: "https://photos.app.goo.gl/4rowTGxULbvVbJkE7"
      }
    },
      {
  id: 9,
  title: "Project Exhibition 2024",
  date: "2024-10-03",
  participants: 200,
  description: "Project Exhibition 2024 was a vibrant annual showcase where students presented innovative projects in robotics, automation, and embedded systems, demonstrating practical solutions, creative thinking, and technological advancement to peers, mentors, and industry experts.",
  gallery: {
    thumbnail: img2,
    driveLink: "https://drive.google.com/drive/folders/1s3uryVEJLJoMX222vyYGpg4_k4aMx96G?usp=sharing"
  }
},
    {
      id: 8,
      title: "Spectra 2024",
      date: "2024-11-17",
      participants: 300,
      description: "Spectra 2024 was an engaging hovercraft design and racing competition where teams engineered and raced their own crafts on a timed track. Pushpak Viman stood out with superior design and control, securing the first place in the challenge.",
      gallery: {
      thumbnail: img3,
      driveLink: "https://photos.app.goo.gl/9GcVX8SWcUhPTSm97"
      }
    },
    {
      id: 7,
      title: "Synergy 2025",
      date: "2025-03-01",
      participants: 250,
      description: "Synergy 2025 featured Circuit Rush, a time-based pick-and-place robotics challenge, and Machine Mirage, an innovative idea pitching event. The competition highlighted participants' engineering precision, creativity, and problem-solving abilities in a dynamic and engaging environment.",
      gallery: {
      thumbnail: img5,
      driveLink: "https://photos.app.goo.gl/GfWHXMVv28scDRNm6"
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'competition', name: 'Competitions' },
    { id: 'interview', name: 'Interviews' },
  ];

  const filteredEvents = filter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === filter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
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
              Upcoming{' '}
              <span className="bg-gradient-to-r from-violet-400 to-electric-400 bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Join us for workshops, competitions, seminars, and interviews designed to enhance
              your robotics skills and connect with fellow innovators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    filter === category.id
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

   {/* Events Grid */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {filteredEvents.length === 0 ? (
      <div className="text-center text-gray-400 text-lg py-20">
        No upcoming events found for this category.
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-violet-500/50 transition-all duration-300 group"
          >
            <div className="aspect-video bg-gray-700 relative overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  event.category === 'workshop' ? 'bg-violet-500 text-white' :
                  event.category === 'competition' ? 'bg-electric-500 text-white' :
                  event.category === 'seminar' ? 'bg-cyan-500 text-white' :
                  'bg-orange-500 text-white'
                }`}>
                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white group-hover:text-violet-400 transition-colors duration-300">
                {event.title}
              </h3>
              
              <p className="text-gray-400 text-sm">{event.description}</p>

              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-violet-400" />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-electric-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{event.location}</span>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-orange-400" />
                  <span>{event.participants} participants</span>
                </div> */}
              </div>

              <Link to="/joinus">
                <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-violet-500 to-electric-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>

            </div>
          </motion.div>
        ))}
      </div>
    )}
  </div>
</section>

      {/* Past Events Archive */}
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
        Past Events Archive
      </h2>
      <p className="text-xl text-gray-400">
        Highlights from our recent successful events
      </p>
       <p className="text-xl text-gray-400">
        Click to view galleries and learn more about each event
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {pastEvents.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <FlipCard
            frontContent={
              <div className="h-full flex flex-col justify-between">
                {event.gallery?.thumbnail && (
                  <img
                    src={event.gallery.thumbnail}
                    alt={`${event.title} thumbnail`}
                    className="rounded-md mb-3 w-full h-40 object-cover"
                  />
                )}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {event.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{formatDate(event.date)}</span>
                  <span>{event.participants}+ attended</span>
                </div>
              </div>
            }
            backContent={
              <div className="h-full flex flex-col justify-center items-center text-center text-white">
                <p className="text-sm mb-2 px-2">{event.description}</p>
                {event.gallery?.driveLink && (
                <a
                  href={event.gallery.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 transition duration-300"
>
                  🗂️ View Gallery
              </a>

                )}
              </div>
            }
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
};
export default Events;