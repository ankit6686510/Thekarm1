import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Bihar", "Uttar Pradesh", "Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai", "Noida", "Gurugram"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer", "Data Scientist", "Data Analyst", "DevOps Engineer", "Product Manager", "UI Designer", "Data Engineer", "Cloud Architect"],
  },
  {
    filterType: "Salary",
    array: ["0-20k", "20-40k", "42k-1lakh", "1lakh to 5lakh", "5lakh+"],
  },
];

const FilterCard = () => {
  const [filters, setFilters] = useState({
    Location: [],
    Industry: [],
    Salary: []
  });
  const dispatch = useDispatch();

  const changeHandler = (filterType, value) => {
    setFilters(prevFilters => {
      const updatedFilter = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter(item => item !== value)
        : [...prevFilters[filterType], value];

      return { ...prevFilters, [filterType]: updatedFilter };
    });
  };

  useEffect(() => {
    dispatch(setSearchedQuery(filters));
  }, [filters, dispatch]);

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      {filterData.map((data, index) => (
        <div key={index} className="mb-4">
          <h2 className="font-bold text-lg">{data.filterType}</h2>
          {data.array.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2 my-2">
              <input
                type="checkbox"
                checked={filters[data.filterType].includes(item)}
                onChange={() => changeHandler(data.filterType, item)}
                id={`checkbox-${index}-${idx}`}
              />
              <Label htmlFor={`checkbox-${index}-${idx}`}>{item}</Label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FilterCard;









// import React, { useEffect, useState } from "react";
// import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
// import { Label } from "./ui/label";
// import { useDispatch } from "react-redux";
// import { setSearchedQuery } from "@/redux/jobSlice";

// const fitlerData = [
//   {
//     fitlerType: "Location",
//     array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
//   },
//   {
//     fitlerType: "Industry",
//     array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
//   },
//   {
//     fitlerType: "Salary",
//     array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
//   },
// ];

// const FilterCard = () => {
//   const [selectedValue, setSelectedValue] = useState("");
//   const dispatch = useDispatch();
//   const changeHandler = (value) => {
//     setSelectedValue(value);
//   };
//   useEffect(() => {
//     dispatch(setSearchedQuery(selectedValue));
//   }, [selectedValue]);
//   return (
//     <div className="w-full bg-white p-3 rounded-md">
//       <h1 className="font-bold text-lg">Filter Jobs</h1>
//       <hr className="mt-3" />
//       <RadioGroup value={selectedValue} onValueChange={changeHandler}>
//         {fitlerData.map((data, index) => (
//           <div>
//             <h1 className="font-bold text-lg">{data.fitlerType}</h1>
//             {data.array.map((item, idx) => {
//               const itemId = `id${index}-${idx}`;
//               return (
//                 <div className="flex items-center space-x-2 my-2">
//                   <RadioGroupItem value={item} id={itemId} />
//                   <Label htmlFor={itemId}>{item}</Label>
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </RadioGroup>
//     </div>
//   );
// };

// export default FilterCard;
