import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white text-center p-4">
      &copy; {new Date().getFullYear()} My Blog. All rights reserved.
    </footer>
  );
}

export default Footer;
