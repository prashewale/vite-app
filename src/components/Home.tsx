import React, { useEffect, useState } from "react";

type Props = {};

// type Country = {
//   id: number;
//   name: string;
// };

// type State = {
//   id: number;
//   name: string;
// };

type OptionItem = {
  id: number;
  name: string;
};

const Home = (props: Props) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const [countries, setCountries] = useState<OptionItem[]>([]);
  const [states, setStates] = useState<OptionItem[]>([]);

  const fetchCountries = async () => {
    try {
      const response = await fetch("http://localhost:3000/countries");

      const data = await response.json();

      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchStates = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/states?country_id=${selectedCountry}`
      );

      const data = await response.json();

      setStates(data);
    } catch (error) {
      setStates([]);
    }
  };

  useEffect(() => {
    if (selectedCountry) {
      fetchStates();
    }
  }, [selectedCountry]);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const countryId = event.target.value;
    setSelectedCountry(countryId);

    console.log("Selected Country Code:", countryId);
  };

  return (
    <div className="d-flex justify-content-center">
      <select onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <select>
          <option value="">Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state.id}>
              {state.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Home;
