import React from 'react';

// Component for the ChefCloud Footer
const ChefCloudFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="chefcloud-footer">
      <div className="footer-content">
        <div className="website-name">
          Chef<strong>Cloud</strong>
        </div>
        <p className="tagline">
          Your Culinary Canvas.
        </p>
        <p className="copyright">
          &copy; <span id="current-year"></span> ChefCloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default ChefCloudFooter;