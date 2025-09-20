// src/components/DependentDropdown.tsx
import React, { useEffect } from "react";

// Static data (for UI only, no logic yet)
const dropdownData = [
  {
    country: "India",
    states: [
      {
        name: "Maharashtra",
        areas: ["Mumbai", "Pune", "Nagpur"],
      },
      {
        name: "Delhi",
        areas: ["New Delhi", "Dwarka", "Rohini"],
      },
    ],
  },
  {
    country: "USA",
    states: [
      {
        name: "California",
        areas: ["Los Angeles", "San Francisco", "San Diego"],
      },
      {
        name: "Texas",
        areas: ["Houston", "Dallas", "Austin"],
      },
    ],
  },
];

type State = {
  name: string;
  areas: string[];
};

const DependentDropdown = () => {
  const [allDropdowns, setAllDropdowns] = React.useState({
    country: "",
    state: "",
    area: "",
  });
  const [allStates, setAllStates] = React.useState<State[]>([]);
  const [allAreas, setAllAreas] = React.useState<string[]>([]);

  console.log(allDropdowns.country);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAllDropdowns({ ...allDropdowns, country: e.target.value, state: "", area: "" });
  }

  useEffect(() => {
    const selectedCountry = dropdownData.find(
      (c) => c.country === allDropdowns.country
    );
    if (selectedCountry) {
      setAllStates(selectedCountry.states);
    } else {
      setAllStates([]);
    }
  }, [allDropdowns.country]);

  useEffect(() => {
    const selectedState = allStates.find((s) => s.name === allDropdowns.state);
    if (selectedState) {
      setAllAreas(selectedState.areas);
    } else {
      setAllAreas([]);
    }
  }, [allDropdowns.state]);

  console.log(allDropdowns);

  return (
    <div className="flex flex-col gap-6 w-full max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl border">
      {/* Label */}
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Dependent Dropdown Example
      </h2>

      {/* Country Dropdown */}
      <div className="flex flex-col gap-2">
        <label htmlFor="country" className="text-sm font-medium text-gray-700">
          Select Country
        </label>
        <select
          onChange={handleCountryChange}
          id="country"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Choose Country --</option>
          {dropdownData.map((c, idx) => (
            <option key={idx} value={c.country}>
              {c.country}
            </option>
          ))}
        </select>
      </div>

      {/* State Dropdown */}
      <div className="flex flex-col gap-2">
        <label htmlFor="state" className="text-sm font-medium text-gray-700">
          Select State
        </label>
        <select
          onChange={(e) =>
            setAllDropdowns({ ...allDropdowns, state: e.target.value })
          }
          id="state"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Choose State --</option>
          {allStates.map((s: State, idx: number) => (
            <option key={idx} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {/* Area Dropdown */}
      <div className="flex flex-col gap-2">
        <label htmlFor="area" className="text-sm font-medium text-gray-700">
          Select Area
        </label>
        <select
          onChange={(e) =>
            setAllDropdowns({ ...allDropdowns, area: e.target.value })
          }
          id="area"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Choose Area --</option>
          {allAreas.map((a, idx) => (
            <option key={idx} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DependentDropdown;
