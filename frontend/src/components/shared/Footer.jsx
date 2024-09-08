import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* About Section */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold text-gray-800">Karm.</h2>
            <p className="text-sm text-gray-600">© 2024 Karm. All rights reserved.</p>
            <p className="text-sm text-gray-600 mt-2">
              We help you find your first job. Discover your next career opportunity with us.
            </p>
          </div>
          
          {/* Links Section */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Karm</h3>
              <ul className="space-y-2 mt-2 text-sm text-gray-600">
                <li><a href="/about" className="hover:text-gray-800">About Us</a></li>
                <li><a href="/privacy-policy" className="hover:text-gray-800">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:text-gray-800">Terms of Service</a></li>
                <li><a href="/contact" className="hover:text-gray-800">Contact Us</a></li>
              </ul>
            </div>
            
            {/* Social Media Icons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Follow Us</h3>
              <div className="flex space-x-4 mt-2">
                <a href="https://facebook.com" className="text-gray-600 hover:text-gray-800" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" /></svg>
                </a>
                <a href="https://twitter.com" className="text-gray-600 hover:text-gray-800" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" /></svg>
                </a>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-800" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" /></svg>
                </a>
                <a href="https://instagram.com" className="text-gray-600 hover:text-gray-800" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.2 0 3.588.012 4.85.07 1.137.057 1.94.246 2.407.515.485.283.815.634 1.074 1.074.267.467.458 1.271.515 2.407.058 1.263.07 1.651.07 4.85 0 3.199-.012 3.587-.012 4.85-.07 1.136-.246 1.94-.515 2.407-.283.485-.634.815-1.074 1.074-.467.267-1.271.458-2.407.515-1.263.058-1.651.07-4.85.07-3.199 0-3.587-.012-4.85-.07-1.137-.057-1.94-.248-2.407-.515-.485-.283-.815-.634-1.074-1.074-.267-.467-.458-1.271-.515-2.407-.058-1.263-.07-1.651-.07-4.85 0-3.199.012-3.587.07-4.85.057-1.137.248-1.94.515-2.407.283-.485.634-.815 1.074-1.074.467-.267 1.271-.458 2.407-.515 1.263-.058 1.651-.07 4.85-.07zm0-2.163C8.695 0 8.227.014 7.783.042 6.506.073 5.352.338 4.409.756 3.515 1.169 2.804 1.887 2.263 2.791 1.643 3.804 1.238 5.101 1.023 6.512.896 7.177.791 8.021.791 12c0 4.68.057 5.225.071 6.278.171 1.41.563 2.68 1.177 3.788.62 1.114 1.434 2.085 2.782 2.791 1.347.711 2.75.981 4.419 1.046 1.264.037 1.82.037 6.491.037 4.68 0 5.226-.057 6.278-.071 1.41-.171 2.68-.563 3.788-1.177 1.114-.62 2.085-1.434 2.791-2.782.711-1.347.981-2.75 1.046-4.419.037-1.264.037-1.82.037-6.491 0-4.68-.057-5.226-.071-6.278-.171-1.41-.563-2.68-1.177-3.788-.62-1.114-1.434-2.085-2.782-2.791-1.347-.711-2.75-.981-4.419-1.046-1.264-.037-1.82-.037-6.491-.037zm0 5.837a4.438 4.438 0 1 0 0 8.876 4.438 4.438 0 0 0 0-8.876zm0 7.662a3.223 3.223 0 1 1 0-6.445 3.223 3.223 0 0 1 0 6.445zm4.826-8.228a1.072 1.072 0 1 0 0-2.144 1.072 1.072 0 0 0 0 2.144z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;








// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="border-t border-t-gray-200 py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <h2 className="text-xl font-bold">Job Hunt</h2>
//             <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
//           </div>
          
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" /></svg>
//             </a>
//             <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" /></svg>
//             </a>
//             <a href="https://linkedin.com" className="hover:text-gray-400" aria-label="LinkedIn">
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" /></svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;