import React, { useEffect, useState, useRef } from "react";
import bgVideo from "../../assets/curtain.mov";
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import './style.css';

export default function Home() {
    const videoRef = useRef(null);
  
    const handleVideoClick = () => {
      if (videoRef.current) {
        videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
      }
    };
  
    return (
      /* Added h-screen and overflow-y-scroll to ensure the snap container is the viewport */
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-gradient-to-b from-amber-50 to-rose-50 text-gray-800">
  
        {/* Hero Section - Added snap-start */}
        <section 
          className="h-screen w-full flex flex-col items-center justify-center text-center relative snap-start" 
          onClick={handleVideoClick}
        >
          <video ref={videoRef} muted playsInline className="background-video">
              <source src={bgVideo} type="video/mp4" />
          </video>
        </section>
  
        {/* Wedding Details - Added snap-start */}
        <section className="h-screen w-full flex items-center justify-center px-6 snap-start">
          <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 max-w-xl text-center border border-yellow-600">
            <h2 className="text-4xl font-serif text-rose-900 mb-4">Wedding Ceremony</h2>
            <div className="w-16 h-1 bg-yellow-600 mx-auto mb-6 rounded-full" />
            <p className="text-lg mb-2"><strong>Date:</strong> 6th April</p>
            <p className="text-lg mb-2"><strong>Venue:</strong> Sannidhi Kalakshetra</p>
            <p className="text-lg mb-6"><strong>City:</strong> Dharwad, Karnataka</p>
          </div>
        </section>
  
        {/* Location Section - Added snap-start */}
        <section className="h-screen w-full flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-yellow-100 to-rose-100 snap-start">
          <h2 className="text-4xl font-serif text-rose-900 mb-4">Venue Location</h2>
          <div className="map-container w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl">
              <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.123456789!2d75.0!3d15.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI0JzAwLjAiTiA3NcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v123456789" 
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
              ></iframe>
          </div>
        </section>
  
        {/* Footer - Added snap-start */}
        <footer className="h-screen flex flex-col items-center justify-center bg-rose-900 text-center text-white snap-start">
          <h2 className="text-3xl font-serif text-yellow-500 mb-4">
            We look forward to celebrating with you
          </h2>
          <p className="text-lg font-light">Sushet & Pooja</p>
        </footer>
      </div>
    );
  }