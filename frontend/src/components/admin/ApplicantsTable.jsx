import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "sonner";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";

const shortlistingStatus = ["accepted", "rejected"];

const statusColors = {
  accepted: "bg-green-100 text-green-600",
  rejected: "bg-red-100 text-red-600",
  pending: "bg-gray-100 text-gray-600",
};

const ApplicantsTable = () => {
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);
  const [localApplicants, setLocalApplicants] = useState(
    applicants?.applications || []
  );

  const statusHandler = async (status, id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/status/${id}/update`,
        { status }
      );
      if (res.data.success) {
        toast.success(res.data.message);

        // Update local state
        setLocalApplicants((prevApplicants) =>
          prevApplicants.map((applicant) =>
            applicant._id === id ? { ...applicant, status } : applicant
          )
        );

        // Update Redux store (assuming you have an action to update applicant status)
        dispatch({ type: "UPDATE_APPLICANT_STATUS", payload: { id, status } });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>List of your recent applied users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {localApplicants.map((item) => (
            <TableRow
              key={item._id}
              className={statusColors[item.status] || "bg-purple-50"}
            >
              <TableCell>{item?.applicant?.fullname}</TableCell>
              <TableCell>{item?.applicant?.email}</TableCell>
              <TableCell>{item?.applicant?.phoneNumber}</TableCell>
              <TableCell>
                {item.applicant?.profile?.resume ? (
                  <a
                    className="text-blue-600 cursor-pointer"
                    href={item?.applicant?.profile?.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item?.applicant?.profile?.resumeOriginalName}
                  </a>
                ) : (
                  <span>N/A</span>
                )}
              </TableCell>
              <TableCell>{item?.applicant.createdAt.split("T")[0]}</TableCell>
              <TableCell>
                <span
                  className={`inline-block px-2 py-1 rounded-full ${
                    statusColors[item?.status]
                  }`}
                >
                  {item?.status.charAt(0).toUpperCase() + item?.status.slice(1)}
                </span>
              </TableCell>
              <TableCell className="float-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                  <PopoverContent className="w-32">
                    {shortlistingStatus.map((status, index) => (
                      <div
                        onClick={() => statusHandler(status, item?._id)}
                        key={index}
                        className={`flex w-fit items-center my-2 cursor-pointer ${
                          status === "accepted"
                            ? "text-green-600"
                            : status === "rejected"
                            ? "text-red-600"
                            : "text-gray-600"
                        }`}
                      >
                        <span>
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </span>
                      </div>
                    ))}
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;









// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { MoreHorizontal } from "lucide-react";
// import { useSelector } from "react-redux";
// import { toast } from "sonner";
// import { APPLICATION_API_END_POINT } from "@/utils/constant";
// import axios from "axios";

// const shortlistingStatus = ["accepted", "rejected", ];

// const statusColors = {
//   accepted: "bg-green-100 text-green-600",
//   rejected: "bg-red-100 text-red-600",
//   pending: "bg-gray-100 text-gray-600",
// };

// const ApplicantsTable = () => {
//   const { applicants } = useSelector((store) => store.application);
//   const [statusColorsState, setStatusColorsState] = useState({}); // Track status colors for each row

//   const statusHandler = async (status, id) => {
//     try {
//       axios.defaults.withCredentials = true;
//       const res = await axios.post(
//         `${APPLICATION_API_END_POINT}/status/${id}/update`,
//         { status }
//       );
//       if (res.data.success) {
//         toast.success(res.data.message);

//         // Update the status color
//         setStatusColorsState((prevColors) => ({
//           ...prevColors,
//           [id]: statusColors[status],
//         }));
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <Table>
//         <TableCaption>List of your recent applied users</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Full Name</TableHead>
//             <TableHead>Email</TableHead>
//             <TableHead>Contact</TableHead>
//             <TableHead>Resume</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead>Status</TableHead> {/* New Status Column */}
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {applicants &&
//             applicants?.applications?.map((item) => (
//               <TableRow
//                 key={item._id}
//                 className={statusColorsState[item._id] || "bg-purple-50"} // Apply dynamic background color
//               >
//                 <TableCell>{item?.applicant?.fullname}</TableCell>
//                 <TableCell>{item?.applicant?.email}</TableCell>
//                 <TableCell>{item?.applicant?.phoneNumber}</TableCell>
//                 <TableCell>
//                   {item.applicant?.profile?.resume ? (
//                     <a
//                       className="text-blue-600 cursor-pointer"
//                       href={item?.applicant?.profile?.resume}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {item?.applicant?.profile?.resumeOriginalName}
//                     </a>
//                   ) : (
//                     <span>N/A</span>
//                   )}
//                 </TableCell>
//                 <TableCell>{item?.applicant.createdAt.split("T")[0]}</TableCell>
//                 <TableCell>
//                   <span
//                     className={`inline-block px-2 py-1 rounded-full ${statusColors[item?.status]}`}
//                   >
//                     {item?.status.charAt(0).toUpperCase() + item?.status.slice(1)}
//                   </span>
//                 </TableCell>
//                 <TableCell className="float-right cursor-pointer">
//                   <Popover>
//                     <PopoverTrigger>
//                       <MoreHorizontal />
//                     </PopoverTrigger>
//                     <PopoverContent className="w-32">
//                       {shortlistingStatus.map((status, index) => (
//                         <div
//                           onClick={() => statusHandler(status, item?._id)}
//                           key={index}
//                           className={`flex w-fit items-center my-2 cursor-pointer ${
//                             status === "accepted"
//                               ? "text-green-600"
//                               : status === "rejected"
//                               ? "text-red-600"
//                               : "text-gray-600"
//                           }`}
//                         >
//                           <span>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
//                         </div>
//                       ))}
//                     </PopoverContent>
//                   </Popover>
//                 </TableCell>
//               </TableRow>
//             ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default ApplicantsTable;

// import React, { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { MoreHorizontal } from "lucide-react";
// import { useSelector } from "react-redux";
// import { toast } from "sonner";
// import { APPLICATION_API_END_POINT } from "@/utils/constant";
// import axios from "axios";

// const shortlistingStatus = ["accepted", "rejected","pending"];

// const ApplicantsTable = () => {
//   const { applicants } = useSelector((store) => store.application);
//   const [statusColors, setStatusColors] = useState({}); // Track status colors for each row

//   const statusHandler = async (status, id) => {
//     try {
//       axios.defaults.withCredentials = true;
//       const res = await axios.post(
//         `${APPLICATION_API_END_POINT}/status/${id}/update`,
//         { status }
//       );
//       if (res.data.success) {
//         toast.success(res.data.message);

//         // Update the status color
//         setStatusColors((prevColors) => ({
//           ...prevColors,
//           [id]: status === "Accepted" ? "bg-green-100" : "bg-red-100",
//         }));
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <Table>
//         <TableCaption>list of your recent applied user</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>FullName</TableHead>
//             <TableHead>Email</TableHead>
//             <TableHead>Contact</TableHead>
//             <TableHead>Resume</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {applicants &&
//             applicants?.applications?.map((item) => (
//               <tr
//                 key={item._id}
//                 className={statusColors[item._id] || ""} // Apply dynamic background color
//               >
//                 <TableCell>{item?.applicant?.fullname}</TableCell>
//                 <TableCell>{item?.applicant?.email}</TableCell>
//                 <TableCell>{item?.applicant?.phoneNumber}</TableCell>
//                 <TableCell>
//                   {item.applicant?.profile?.resume ? (
//                     <a
//                       className="text-blue-600 cursor-pointer"
//                       href={item?.applicant?.profile?.resume}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {item?.applicant?.profile?.resumeOriginalName}
//                     </a>
//                   ) : (
//                     <span>N/A</span>
//                   )}
//                 </TableCell>
//                 <TableCell>{item?.applicant.createdAt.split("T")[0]}</TableCell>
//                 <TableCell className="float-right cursor-pointer">
//                   <Popover>
//                     <PopoverTrigger>
//                       <MoreHorizontal />
//                     </PopoverTrigger>
//                     <PopoverContent className="w-32">
//                       {shortlistingStatus.map((status, index) => (
//                         <div
//                           onClick={() => statusHandler(status, item?._id)}
//                           key={index}
//                           className={`flex w-fit items-center my-2 cursor-pointer ${
//                             status === "Accepted"
//                               ? "text-green-600"
//                               : "text-red-600"
//                           }`}
//                         >
//                           <span>{status}</span>
//                         </div>
//                       ))}
//                     </PopoverContent>
//                   </Popover>
//                 </TableCell>
//               </tr>
//             ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default ApplicantsTable;

// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { MoreHorizontal } from "lucide-react";
// import { useSelector } from "react-redux";
// import { toast } from "sonner";
// import { APPLICATION_API_END_POINT } from "@/utils/constant";
// import axios from "axios";

// const shortlistingStatus = ["Accepted", "Rejected"];

// const ApplicantsTable = () => {
//   const { applicants } = useSelector((store) => store.application);

//   const statusHandler = async (status, id) => {
//     console.log("called");
//     try {
//       axios.defaults.withCredentials = true;
//       const res = await axios.post(
//         `${APPLICATION_API_END_POINT}/status/${id}/update`,
//         { status }
//       );
//       console.log(res);
//       if (res.data.success) {
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <Table>
//         <TableCaption>list of your recent applied user</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>FullName</TableHead>
//             <TableHead>Email</TableHead>
//             <TableHead>Contact</TableHead>
//             <TableHead>Resume</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {applicants &&
//             applicants?.applications?.map((item) => (
//               <tr key={item._id}>
//                 <TableCell>{item?.applicant?.fullname}</TableCell>
//                 <TableCell>{item?.applicant?.email}</TableCell>
//                 <TableCell>{item?.applicant?.phoneNumber}</TableCell>
//                 <TableCell>
//                   {item.applicant?.profile?.resume ? (
//                     <a
//                       className="text-blue-600 cursor-pointer"
//                       href={item?.applicant?.profile?.resume}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       {item?.applicant?.profile?.resumeOriginalName}
//                     </a>
//                   ) : (
//                     <span>N/A</span>
//                   )}
//                 </TableCell>
//                 <TableCell>{item?.applicant.createdAt.split("T")[0]}</TableCell>
//                 <TableCell className="float-right cursor-pointer">
//                   <Popover>
//                     <PopoverTrigger>
//                       <MoreHorizontal />
//                     </PopoverTrigger>
//                     <PopoverContent className="w-32">
//                       {shortlistingStatus.map((status, index) => {
//                         return (
//                           <div
//                             onClick={() => statusHandler(status, item?._id)}
//                             key={index}
//                             className="flex w-fit items-center my-2 cursor-pointer"
//                           >
//                             <span>{status}</span>
//                           </div>
//                         );
//                       })}
//                     </PopoverContent>
//                   </Popover>
//                 </TableCell>
//               </tr>
//             ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default ApplicantsTable;
