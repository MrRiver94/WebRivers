// ProfileImage.js
import React from 'react';
import './ProfileImage.css'
import { motion } from "framer-motion";

function ProfileImage({ src, alt }) {
  return (
    <div className="image-container">
      <motion.div
        
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <img src={src} alt={alt} className="profile-pic" />
      </motion.div>
        </div>
    
    
  );
}

export default ProfileImage;