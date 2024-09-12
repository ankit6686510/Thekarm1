//code fot freelancer
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/"); // redirect to home page
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error); // log the error
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <div className="text-4xl font-bold">
          <span className="text-[#9A6735]">Free</span>
          <span className="text-[#55883B]">Lancer.</span>
        </div>
        <ul className="flex items-center gap-6 font-medium">
          {user && user.role === "recruiter" ? (
            <>
              <li><Link className="nav-link" to="/admin/companies">Companies</Link></li>
              <li><Link className="nav-link" to="/admin/jobs">Jobs</Link></li>
            </>
          ) : (
            <>
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/jobs">Jobs</Link></li>
              <li><Link className="nav-link" to="/browse">Browse</Link></li>
              <li><Link className="nav-link" to="/services">Services</Link></li>
            </>
          )}
        </ul>
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#55883B] hover:bg-[#38225d]">
                  Signup
                </Button>
              </Link>
            </>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="User profile"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-64 md:w-80">
                <div className="flex items-center gap-3 p-4">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="User profile"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-gray-600">{user?.profile?.bio}</p>
                  </div>
                </div>
                <div className="flex flex-col p-4 text-gray-600 space-y-2">
                  {user && user.role === "student" && (
                    <Link to="/profile" className="flex items-center gap-2">
                      <User2 />
                      <Button variant="link">View Profile</Button>
                    </Link>
                  )}
                  <button onClick={logoutHandler} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <LogOut />
                    <span>Logout</span>
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;










// import React from "react";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Button } from "../ui/button";
// import { Avatar, AvatarImage } from "../ui/avatar";
// import { LogOut, User2 } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { USER_API_END_POINT } from "@/utils/constant";
// import { setUser } from "@/redux/authSlice";
// import { toast } from "sonner";

// const Navbar = () => {
//   const { user } = useSelector((store) => store.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   console.log(user);

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${USER_API_END_POINT}/logout`, {
//         withCredentials: true,
//       });
//       if (res.data.success) {
//         dispatch(setUser(null));
//         navigate("/"); // redirect to home page
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       console.log(error); // log the error
//       toast.error(error.response.data.message);
//     }
//   };
//   return (
//     <div className="bg-white">
//       <style jsx>{`
//         .nav-link {
//           position: relative;
//           display: inline-block;
//           color: inherit;
//           text-decoration: none;
//           transition: color 0.3s ease;
//         }

//         .nav-link::after {
//           content: "";
//           position: absolute;
//           width: 100%;
//           height: 2px;
//           bottom: 0;
//           left: 0;
//           background-color: #6a38c2;
//           transform: scaleX(0);
//           transform-origin: bottom right;
//           transition: transform 0.3s ease;
//         }

//         .nav-link:hover {
//           color: #6a38c2; /* Change text color on hover */
//         }

//         .nav-link:hover::after {
//           transform: scaleX(1);
//           transform-origin: bottom left;
//         }
//       `}</style>
//       <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
//         <div>
//           <h1 className="text-4xl font-bold">
//             <span className="text-[#12343b]">Kar</span>
//             <span className="text-[#FFEA00]">m.</span>
//           </h1>
//         </div>
//         <div className="flex items-center gap-12">
//           <ul className="flex font-medium items-center gap-5">
//             {user && user.role === "recruiter" ? (
//               <>
//                 <li>
//                   <Link className="nav-link" to="/admin/companies">Companies</Link>
//                 </li>
//                 <li>
//                   <Link className="nav-link" to="/admin/jobs">Jobs</Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link className="nav-link" to="/">Home</Link>
//                 </li>
//                 <li>
//                   <Link className="nav-link" to="/jobs">Jobs</Link>
//                 </li>
//                 <li>
//                   <Link className="nav-link" to="/browse">Browse</Link>
//                 </li>
//                 <li>
//                   <Link className="nav-link" to="/services">Services</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//           {!user ? (
//             <div className="flex items-center gap-3">
//               <Link to="/login">
//                 <Button variant="outline">Login</Button>
//               </Link>
//               <Link to="/signup">
//                 <Button className="bg-[#6A38C2] hover:bg-[#38225d]">
//                   Signup
//                 </Button>
//               </Link>
//             </div>
//           ) : (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className="cursor-pointer">
//                   <AvatarImage
//                     src={user?.profile?.profilePhoto}
//                     alt="@shadcn"
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className="w-80">
//                 <div className="">
//                   <div className="flex gap-2 space-y-2">
//                     <Avatar className="cursor-pointer">
//                       <AvatarImage
//                         src={user?.profile?.profilePhoto}
//                         alt="@shadcn"
//                       />
//                     </Avatar>
//                     <div>
//                       <h4 className="font-medium">{user?.fullname}</h4>
//                       <p className="text-sm text-muted-foreground">
//                         {user?.profile?.bio}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col my-2 text-gray-600">
//                     {user && user.role === "student" && (
//                       <div className="flex w-fit items-center gap-2 cursor-pointer">
//                         <User2 />
//                         <Button variant="link">
//                           <Link to="/profile">View Profile</Link>
//                         </Button>
//                       </div>
//                     )}

//                     <div className="flex w-fit items-center gap-2 cursor-pointer">
//                       <LogOut />
//                       <Button onClick={logoutHandler} variant="link">
//                         Logout
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;






// import React from "react";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Button } from "../ui/button";
// import { Avatar, AvatarImage } from "../ui/avatar";
// import { LogOut, User2 } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { USER_API_END_POINT } from "@/utils/constant";
// import { setUser } from "@/redux/authSlice";
// import { toast } from "sonner";

// const Navbar = () => {
//   const { user } = useSelector((store) => store.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${USER_API_END_POINT}/logout`, {
//         withCredentials: true,
//       });
//       if (res.data.success) {
//         dispatch(setUser(null));
//         navigate("/"); // redirect to home page
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       console.log(error); // log the error
//       toast.error(error.response.data.message);
//     }
//   };
//   return (
//     <div className="bg-white">
//       <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
//         <div>
//           <h1 className="text-4xl font-bold">
//             <span className="text-[#7A1CAC]">Kar</span>
//             <span className="text-[#edd737]">m.</span>
//           </h1>
//         </div>
//         <div className="flex items-center gap-12">
//           <ul className="flex font-medium items-center gap-5">
//             {user && user.role === "recruiter" ? (
//               <>
//                 <li>
//                   <Link to="/admin/companies">Companies</Link>
//                 </li>
//                 <li>
//                   <Link to="/admin/jobs">Jobs</Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                   <Link to="/jobs">Jobs</Link>
//                 </li>
//                 <li>
//                   <Link to="/browse">Browse</Link>
//                 </li>
//                 <li>
//                   <Link to="/services">services</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//           {!user ? (
//             <div className="flex items-center gap-3">
//               <Link to="/login">
//                 <Button variant="outline">Login</Button>
//               </Link>
//               <Link to="/signup">
//                 <Button className="bg-[#6A38C2] hover:bg-[#38225d]">
//                   Signup
//                 </Button>
//               </Link>
//             </div>
//           ) : (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar className="cursor-pointer">
//                   <AvatarImage
//                     src={user?.profile?.profilePhoto}
//                     alt="@shadcn"
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent className="w-80">
//                 <div className="">
//                   <div className="flex gap-2 space-y-2">
//                     <Avatar className="cursor-pointer">
//                       <AvatarImage
//                         src={user?.profile?.profilePhoto}
//                         alt="@shadcn"
//                       />
//                     </Avatar>
//                     <div>
//                       <h4 className="font-medium">{user?.fullname}</h4>
//                       <p className="text-sm text-muted-foreground">
//                         {user?.profile?.bio}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col my-2 text-gray-600">
//                     {user && user.role === "student" && (
//                       <div className="flex w-fit items-center gap-2 cursor-pointer">
//                         <User2 />
//                         <Button variant="link">
//                           {" "}
//                           <Link to="/profile">View Profile</Link>
//                         </Button>
//                       </div>
//                     )}

//                     <div className="flex w-fit items-center gap-2 cursor-pointer">
//                       <LogOut />
//                       <Button onClick={logoutHandler} variant="link">
//                         Logout
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </PopoverContent>
//             </Popover>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
