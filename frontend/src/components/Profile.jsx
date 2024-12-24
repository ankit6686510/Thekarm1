import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const isResume = user?.profile?.resume && user?.profile?.resumeOriginalName;

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 shadow-lg">
        <div className="flex items-center gap-6">
          {/* <Avatar className="h-24 w-24">
            <AvatarImage
              src={
                user?.profile?.avatar ||
                "/assets/avatar.png"
              }
              alt="Profile Avatar"
              className="rounded-full"
            />
          </Avatar> */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold text-gray-800">
              {user?.fullname}
            </h1>
            <p className="text-gray-600 mt-1">
              {user?.profile?.bio || "No bio available"}
            </p>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="ml-auto"
            variant="outline"
          >
            <Pen className="h-5 w-5" />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2 text-gray-600">
            <Mail className="h-5 w-5" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2 text-gray-600">
            <Contact className="h-5 w-5" />
            <span>{user?.phoneNumber || "No phone number provided"}</span>
          </div>
        </div>
        <div className="my-5">
          <h2 className="text-lg font-bold text-gray-800">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {user?.profile?.skills && user.profile.skills.length > 0 ? (
              user.profile.skills.map((item, index) => (
                <Badge key={index} className="bg-gray-200 text-gray-800">
                  {item}
                </Badge>
              ))
            ) : (
              <span className="text-gray-600">NA</span>
            )}
          </div>
        </div>
        <div className="my-5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={user?.profile?.resume}
              className="text-blue-500 hover:underline"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span className="text-gray-600">NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="font-bold text-lg text-gray-800 mb-5">Applied Jobs</h1>
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;

// import React, { useState } from "react";
// import Navbar from "./shared/Navbar";
// import { Avatar, AvatarImage } from "./ui/avatar";
// import { Button } from "./ui/button";
// import { Contact, Mail, Pen } from "lucide-react";
// import { Badge } from "./ui/badge";
// import { Label } from "./ui/label";
// import AppliedJobTable from "./AppliedJobTable";
// import UpdateProfileDialog from "./UpdateProfileDialog";
// import { useSelector } from "react-redux";
// import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

// const isResume = true;

// const Profile = () => {
//   useGetAppliedJobs();
//   const [open, setOpen] = useState(false);
//   const { user } = useSelector((store) => store.auth);

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
//         <div className="flex justify-between">
//           <div className="flex items-center gap-4">
//             <Avatar className="h-24 w-24">
//               <AvatarImage
//                 src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
//                 alt="profile"
//               />
//             </Avatar>
//             <div>
//               <h1 className="font-medium text-xl">{user?.fullname}</h1>
//               <p>{user?.profile?.bio}</p>
//             </div>
//           </div>
//           <Button
//             onClick={() => setOpen(true)}
//             className="text-right"
//             variant="outline"
//           >
//             <Pen />
//           </Button>
//         </div>
//         <div className="my-5">
//           <div className="flex items-center gap-3 my-2">
//             <Mail />
//             <span>{user?.email}</span>
//           </div>
//           <div className="flex items-center gap-3 my-2">
//             <Contact />
//             <span>{user?.phoneNumber}</span>
//           </div>
//         </div>
//         <div className="my-5">
//           <h1>Skills</h1>
//           <div className="flex items-center gap-1">
//             {user?.profile?.skills.length !== 0 ? (
//               user?.profile?.skills.map((item, index) => (
//                 <Badge key={index}>{item}</Badge>
//               ))
//             ) : (
//               <span>NA</span>
//             )}
//           </div>
//         </div>
//         <div className="grid w-full max-w-sm items-center gap-1.5">
//           <Label className="text-md font-bold">Resume</Label>
//           {isResume ? (
//             <a
//               target="blank"
//               href={user?.profile?.resume}
//               className="text-blue-500 w-full hover:underline cursor-pointer"
//             >
//               {user?.profile?.resumeOriginalName}
//             </a>
//           ) : (
//             <span>NA</span>
//           )}
//         </div>
//       </div>
//       <div className="max-w-4xl mx-auto bg-white rounded-2xl">
//         <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
//         {/* Applied Job Table   */}
//         <AppliedJobTable />
//       </div>
//       <UpdateProfileDialog open={open} setOpen={setOpen} />
//     </div>
//   );
// };

// export default Profile;
