import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState([]);

  const isPartialMatch = (jobValue, filterValue) => {
    if (typeof jobValue !== 'string' || typeof filterValue !== 'string') {
      return false;
    }
    const jobWords = jobValue.toLowerCase().split(/\s+/);
    const filterWords = filterValue.toLowerCase().split(/\s+/);
    return filterWords.some(word => jobWords.some(jobWord => jobWord.includes(word)));
  };

  useEffect(() => {
    if (allJobs.length) {
      const filteredJobs = allJobs.filter((job) => {
        // Check if any filter is applied
        const isFilterApplied = Object.values(searchedQuery).some(arr => arr.length > 0);

        // If no filter is applied, show all jobs
        if (!isFilterApplied) return true;

        const matchesLocation = searchedQuery.Location.length === 0 || 
          searchedQuery.Location.some(location => isPartialMatch(job.location, location));
        
        const matchesIndustry = searchedQuery.Industry.length === 0 || 
          searchedQuery.Industry.some(industry => isPartialMatch(job.industry, industry));
        
        const matchesSalary = searchedQuery.Salary.length === 0 || 
          searchedQuery.Salary.includes(job.salary);

        return matchesLocation && matchesIndustry && matchesSalary;
      });

      setFilterJobs(filteredJobs);
    }
  }, [allJobs, searchedQuery]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-1/4">
            <FilterCard />
          </div>
          <div className="md:flex-1 h-[88vh] overflow-y-auto pb-5">
            {filterJobs.length === 0 ? (
              <div className="text-center text-gray-500 mt-10">No jobs found</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <AnimatePresence>
                  {filterJobs.map((job) => (
                    <motion.div
                      key={job?._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Job job={job} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
















// import React, { useEffect, useState } from "react";
// import Navbar from "./shared/Navbar";
// import FilterCard from "./FilterCard";
// import Job from "./Job";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";

// const Jobs = () => {
//   const { allJobs, searchedQuery } = useSelector((store) => store.job);
//   const [filterJobs, setFilterJobs] = useState([]);

//   useEffect(() => {
//     if (allJobs.length) {
//       // Ensure searchedQuery is a string before using toLowerCase
//       const query = typeof searchedQuery === 'string' ? searchedQuery.toLowerCase() : '';
      
//       if (query) {
//         const filteredJobs = allJobs.filter((job) => {
//           return (
//             job.title.toLowerCase().includes(query) ||
//             job.description.toLowerCase().includes(query) ||
//             job.location.toLowerCase().includes(query)
//           );
//         });
//         setFilterJobs(filteredJobs);
//       } else {
//         setFilterJobs(allJobs);
//       }
//     }
//   }, [allJobs, searchedQuery]);

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-7xl mx-auto mt-5">
//         <div className="flex flex-col md:flex-row gap-5">
//           <div className="md:w-1/4">
//             <FilterCard />
//           </div>
//           <div className="md:flex-1 h-[88vh] overflow-y-auto pb-5">
//             {filterJobs.length === 0 ? (
//               <span>No jobs found</span>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//                 {filterJobs.map((job) => (
//                   <motion.div
//                     key={job?._id}
//                     initial={{ opacity: 0, x: 100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -100 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <Job job={job} />
//                   </motion.div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Jobs;











// import React, { useEffect, useState } from "react";
// import Navbar from "./shared/Navbar";
// import FilterCard from "./FilterCard";
// import Job from "./Job";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";

// const Jobs = () => {
//   const { allJobs, searchedQuery } = useSelector((store) => store.job);
//   const [filterJobs, setFilterJobs] = useState([]);

//   useEffect(() => {
//     if (allJobs.length) {
//       if (searchedQuery) {
//         const filteredJobs = allJobs.filter((job) => {
//           const query = searchedQuery.toLowerCase();
//           return (
//             job.title.toLowerCase().includes(query) ||
//             job.description.toLowerCase().includes(query) ||
//             job.location.toLowerCase().includes(query)
//           );
//         });
//         setFilterJobs(filteredJobs);
//       } else {
//         setFilterJobs(allJobs);
//       }
//     }
//   }, [allJobs, searchedQuery]);

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-7xl mx-auto mt-5">
//         <div className="flex flex-col md:flex-row gap-5">
//           <div className="md:w-1/4">
//             <FilterCard />
//           </div>
//           <div className="md:flex-1 h-[88vh] overflow-y-auto pb-5">
//             {filterJobs.length === 0 ? (
//               <span>No jobs found</span>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {filterJobs.map((job) => (
//                   <motion.div
//                     key={job?._id}
//                     initial={{ opacity: 0, x: 100 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -100 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <Job job={job} />
//                   </motion.div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Jobs;

///orginal waala

// import React, { useEffect, useState } from 'react'
// import Navbar from './shared/Navbar'
// import FilterCard from './FilterCard'
// import Job from './Job';
// import { useSelector } from 'react-redux';
// import { motion } from 'framer-motion';

// // const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

// const Jobs = () => {
//     const { allJobs, searchedQuery } = useSelector(store => store.job);
//     const [filterJobs, setFilterJobs] = useState(allJobs);

//     useEffect(() => {
//         if (searchedQuery) {
//             const filteredJobs = allJobs.filter((job) => {
//                 return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
//                     job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
//                     job.location.toLowerCase().includes(searchedQuery.toLowerCase())
//             })
//             setFilterJobs(filteredJobs)
//         } else {
//             setFilterJobs(allJobs)
//         }
//     }, [allJobs, searchedQuery]);

//     return (
//         <div>
//             <Navbar />
//             <div className='max-w-7xl mx-auto mt-5'>
//                 <div className='flex gap-5'>
//                     <div className='w-20%'>
//                         <FilterCard />
//                     </div>
//                     {
//                         filterJobs.length <= 0 ? <span>Job not found</span> : (
//                             <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
//                                 <div className='grid grid-cols-3 gap-4'>
//                                     {
//                                         filterJobs.map((job) => (
//                                             <motion.div
//                                                 initial={{ opacity: 0, x: 100 }}
//                                                 animate={{ opacity: 1, x: 0 }}
//                                                 exit={{ opacity: 0, x: -100 }}
//                                                 transition={{ duration: 0.3 }}
//                                                 key={job?._id}>
//                                                 <Job job={job} />
//                                             </motion.div>
//                                         ))
//                                     }
//                                 </div>
//                             </div>
//                         )
//                     }
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Jobs
