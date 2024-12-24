import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { Button } from "../ui/button";

const CompaniesTable = () => {
  const { companies, searchCompanyByText } = useSelector(
    (store) => store.company
  );
  const [localCompanies, setLocalCompanies] = useState(companies);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const filteredCompanies = companies.filter((company) => {
      if (!searchCompanyByText) {
        return true;
      }
      return company?.name
        ?.toLowerCase()
        .includes(searchCompanyByText.toLowerCase());
    });
    setLocalCompanies(filteredCompanies);
  }, [companies, searchCompanyByText]);

  const handleDeleteCompany = async (companyId, companyName) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete ${companyName}? This action cannot be undone.`
    );

    if (isConfirmed) {
      try {
        const res = await axios.delete(
          `${COMPANY_API_END_POINT}/delete/${companyId}`,
          {
            withCredentials: true,
          }
        );
        if (res.data.success) {
          toast.success(res.data.message);
          
          // Update local state
          setLocalCompanies(prevCompanies => 
            prevCompanies.filter(company => company._id !== companyId)
          );

          // Dispatch an action to update the companies list in the Redux store
          dispatch({ type: "DELETE_COMPANY", payload: companyId });
        }
      } catch (error) {
        console.error("Error deleting company:", error);
        toast.error(
          error.response?.data?.message ||
            "An error occurred while deleting the company"
        );
      }
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>List of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {localCompanies.map((company) => (
            <TableRow key={company._id}>
              <TableCell>
                <Avatar>
                  <AvatarImage src={company.logo} />
                </Avatar>
              </TableCell>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.createdAt.split("T")[0]}</TableCell>
              <TableCell className="text-right">
                <Popover>
                  <PopoverTrigger>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40">
                    <div className="flex flex-col space-y-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center justify-start"
                        onClick={() =>
                          navigate(`/admin/companies/${company._id}`)
                        }
                      >
                        <Edit2 className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center justify-start text-red-500 hover:text-red-600"
                        onClick={() =>
                          handleDeleteCompany(company._id, company.name)
                        }
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </Button>
                    </div>
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

export default CompaniesTable;











// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Avatar, AvatarImage } from "../ui/avatar";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Edit2, MoreHorizontal, Trash2 } from "lucide-react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { COMPANY_API_END_POINT } from "@/utils/constant";
// import { toast } from "sonner";
// import { Button } from "../ui/button";

// const CompaniesTable = () => {
//   const { companies, searchCompanyByText } = useSelector(
//     (store) => store.company
//   );
//   const [filterCompany, setFilterCompany] = useState(companies);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const filteredCompany =
//       companies.length >= 0 &&
//       companies.filter((company) => {
//         if (!searchCompanyByText) {
//           return true;
//         }
//         return company?.name
//           ?.toLowerCase()
//           .includes(searchCompanyByText.toLowerCase());
//       });
//     setFilterCompany(filteredCompany);
//   }, [companies, searchCompanyByText]);

//   // delete company
//   const handleDeleteCompany = async (companyId, companyName) => {
//     const isConfirmed = window.confirm(
//       `Are you sure you want to delete ${companyName}? This action cannot be undone.`
//     );

//     if (isConfirmed) {
//       try {
//         const res = await axios.delete(
//           `${COMPANY_API_END_POINT}/delete/${companyId}`,
//           {
//             withCredentials: true,
//           }
//         );
//         if (res.data.success) {
//           toast.success(res.data.message);
//           // Dispatch an action to update the companies list in the Redux store
//           dispatch({ type: "DELETE_COMPANY", payload: companyId });
//         }
//       } catch (error) {
//         console.error("Error deleting company:", error);
//         toast.error(
//           error.response?.data?.message ||
//             "An error occurred while deleting the company"
//         );
//       }
//     }
//   };

//   return (
//     <div>
//       <Table>
//         <TableCaption>List of your recent registered companies</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Logo</TableHead>
//             <TableHead>Name</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {filterCompany?.map((company) => (
//             <TableRow key={company._id}>
//               <TableCell>
//                 <Avatar>
//                   <AvatarImage src={company.logo} />
//                 </Avatar>
//               </TableCell>
//               <TableCell>{company.name}</TableCell>
//               <TableCell>{company.createdAt.split("T")[0]}</TableCell>
//               <TableCell className="text-right">
//                 <Popover>
//                   <PopoverTrigger>
//                     <Button variant="ghost" size="sm">
//                       <MoreHorizontal className="h-4 w-4" />
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-40">
//                     <div className="flex flex-col space-y-2">
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         className="flex items-center justify-start"
//                         onClick={() =>
//                           navigate(`/admin/companies/${company._id}`)
//                         }
//                       >
//                         <Edit2 className="mr-2 h-4 w-4" />
//                         <span>Edit</span>
//                       </Button>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         className="flex items-center justify-start text-red-500 hover:text-red-600"
//                         onClick={() =>
//                           handleDeleteCompany(company._id, company.name)
//                         }
//                       >
//                         <Trash2 className="mr-2 h-4 w-4" />
//                         <span>Delete</span>
//                       </Button>
//                     </div>
//                   </PopoverContent>
//                 </Popover>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default CompaniesTable;










// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Avatar, AvatarImage } from "../ui/avatar";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Edit2, MoreHorizontal } from "lucide-react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const CompaniesTable = () => {
//   const { companies, searchCompanyByText } = useSelector(
//     (store) => store.company
//   );
//   const [filterCompany, setFilterCompany] = useState(companies);
//   const navigate = useNavigate();
//   useEffect(() => {
//     const filteredCompany =
//       companies.length >= 0 &&
//       companies.filter((company) => {
//         if (!searchCompanyByText) {
//           return true;
//         }
//         return company?.name
//           ?.toLowerCase()
//           .includes(searchCompanyByText.toLowerCase());
//       });
//     setFilterCompany(filteredCompany);
//   }, [companies, searchCompanyByText]);
//   return (
//     <div>
//       <Table>
//         <TableCaption> list of your recent registered companies</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Logo</TableHead>
//             <TableHead>Name</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {filterCompany?.map((company) => (
//             <tr>
//               <TableCell>
//                 <Avatar>
//                   <AvatarImage src={company.logo} />
//                 </Avatar>
//               </TableCell>
//               <TableCell>{company.name}</TableCell>
//               <TableCell>{company.createdAt.split("T")[0]}</TableCell>
//               <TableCell className="text-right cursor-pointer">
//                 <Popover>
//                   <PopoverTrigger>
//                     <MoreHorizontal />
//                   </PopoverTrigger>
//                   <PopoverContent className="w-32">
//                     <div
//                       onClick={() =>
//                         navigate(`/admin/companies/${company._id}`)
//                       }
//                       className="flex items-center gap-2 w-fit cursor-pointer"
//                     >
//                       <Edit2 className="w-4" />
//                       <span>Edit</span>
//                     </div>
//                   </PopoverContent>
//                 </Popover>
//               </TableCell>
//             </tr>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default CompaniesTable;

// import React, { useEffect, useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Avatar, AvatarImage } from "../ui/avatar";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Edit2, MoreHorizontal } from "lucide-react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const CompaniesTable = () => {
//   const { companies, searchCompanyByText } = useSelector(
//     (store) => store.company
//   );
//   const [filterCompany, setFilterCompany] = useState(companies);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const filteredCompany =
//       companies.length > 0 &&
//       companies.filter((company) => {
//         if (!searchCompanyByText) {
//           return true;
//         }
//         return company?.name
//           ?.toLowerCase()
//           .includes(searchCompanyByText.toLowerCase());
//       });
//     setFilterCompany(filteredCompany);
//   }, [companies, searchCompanyByText]);

//   return (
//     <div>
//       <Table>
//         <TableCaption>list of your recent registered companies</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Logo</TableHead>
//             <TableHead>Name</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {filterCompany?.map((company) => (
//             <TableRow key={company._id}>
//               <TableCell>
//                 <Avatar>
//                   <AvatarImage src={company.logo} />
//                 </Avatar>
//               </TableCell>
//               <TableCell>{company.name}</TableCell>
//               <TableCell>{company.createdAt.split("T")[0]}</TableCell>
//               <TableCell className="text-right cursor-pointer">
//                 <Popover>
//                   <PopoverTrigger>
//                     <MoreHorizontal />
//                   </PopoverTrigger>
//                   <PopoverContent className="w-32">
//                     <div
//                       onClick={() =>
//                         navigate(`/admin/companies/${company._id}`)
//                       }
//                       className="flex items-center gap-2 w-fit cursor-pointer"
//                     >
//                       <Edit2 className="w-4" />
//                       <span>Edit</span>
//                     </div>
//                   </PopoverContent>
//                 </Popover>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default CompaniesTable;
