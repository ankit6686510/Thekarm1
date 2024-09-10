import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="bg-gradient-to-b from-purple-100 to-white py-20 px-4 sm:px-6 lg:px-8">
      <style jsx>{`
        @keyframes fadeInSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          60% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-fade-in-slide-up {
          animation: fadeInSlideUp 1s ease-out forwards;
        }

        .animate-scale-fade-in {
          animation: scaleFadeIn 1.2s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-purple-200 text-black font-semibold text-sm mb-8 animate-scale-fade-in">
          Your Go-To Job Marketplace
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-8">
          <span className="block animate-fade-in-slide-up">
            Explore, Apply & 
          </span>
          <span className="block animate-fade-in-slide-up animation-delay-300">
            Earn While 
          </span>
          <span className="text-yellow-500 inline-block relative animate-fade-in-slide-up animation-delay-600">
            You Learn
            <svg
              className="absolute bottom-0 left-0 w-full"
              viewBox="0 0 300 12"
              preserveAspectRatio="none"
            >
              <path
                d="M0,11 C150,0 150,0 300,11"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Find flexible jobs that fit your schedule and skills.
        </p>
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Find Your First Job"
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-4 px-6 rounded-full shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
          />
          <Button
            onClick={searchJobHandler}
            className="absolute right-2 top-2 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200 py-2 px-6"
          >
            <Search className="h-6 w-6 mr-2" />
            <span>Search</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;



// will implement this code

// import React, { useState } from "react";
// import { Button } from "./ui/button";
// import { Search } from "lucide-react";
// import { useDispatch } from "react-redux";
// import { setSearchedQuery } from "@/redux/jobSlice";
// import { useNavigate } from "react-router-dom";

// const HeroSection = () => {
//   const [query, setQuery] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const searchJobHandler = () => {
//     dispatch(setSearchedQuery(query));
//     navigate("/browse");
//   };

//   return (
//     <div className="bg-gradient-to-b from-purple-100 to-white py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto text-center">
//         <span className="inline-block px-4 py-2 rounded-full bg-purple-200 text-purple-800 font-semibold text-sm mb-8 animate-pulse">
//           Your Go-To Job Marketplace
//         </span>
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-8">
//           Explore, Apply & <br className="hidden sm:inline" /> Earn While{" "}
//           <span className="text-purple-600 inline-block relative">
//             You Learn
//             <svg
//               className="absolute bottom-0 left-0 w-full"
//               viewBox="0 0 300 12"
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M0,11 C150,0 150,0 300,11"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="3"
//               />
//             </svg>
//           </span>
//         </h1>
//         <p className="text-xl text-gray-600 mb-12">
//           Find flexible jobs that fit your schedule and skills.
//         </p>
//         <div className="relative max-w-2xl mx-auto">
//           <input
//             type="text"
//             placeholder="Find Your First Job"
//             onChange={(e) => setQuery(e.target.value)}
//             className="w-full py-4 px-6 rounded-full shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-lg"
//           />
//           <Button
//             onClick={searchJobHandler}
//             className="absolute right-2 top-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors duration-200 py-2 px-6"
//           >
//             <Search className="h-6 w-6 mr-2" />
//             <span>Search</span>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


//the original one 

// import React, { useState } from "react";
// import { Button } from "./ui/button";
// import { Search } from "lucide-react";
// import { useDispatch } from "react-redux";
// import { setSearchedQuery } from "@/redux/jobSlice";
// import { useNavigate } from "react-router-dom";

// const HeroSection = () => {
//   const [query, setQuery] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const searchJobHandler = () => {
//     dispatch(setSearchedQuery(query));
//     navigate("/browse");
//   };

//   return (
//     <div className="text-center">
//       <div className="flex flex-col gap-5 my-10">
//         <span className=" mx-auto px-4 py-2 rounded-full bg-gray-100 text-[rgba(22,27,96,0.91)] font-medium">
//         Your Go-To Job Marketplace
//         </span>
//         <h1 className="text-5xl font-bold">
//         Explore, Apply & <br /> Earn While{" "}
//           <span className="text-[#6A38C2]"> You Learn</span>
//         </h1>
//         <p>
//         Find flexible jobs that fit your schedule and skills.
//         </p>
//         <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
//           <input
//             type="text"
//             placeholder="Find Your First Job"
//             onChange={(e) => setQuery(e.target.value)}
//             className="outline-none border-none w-full"
//           />
//           <Button
//             onClick={searchJobHandler}
//             className="rounded-r-full bg-[#6A38C2]"
//           >
//             <Search className="h-5 w-5" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
