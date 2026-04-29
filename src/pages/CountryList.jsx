import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export const CountryList = () => {
  const [countryDatas, setCountryDatas] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((res) => res.json())
      .then((data) => {
        setCountryDatas(data);
        setLoading(false)
      });
  }, []);

  return (
    <>
      <h1>Countries</h1>
      <Link to={"/contact"}>Conatct</Link>
      {
        loading ? <p>Loading....</p> :
         <div className="card_container">
        {countryDatas.map((country, index) => (
          <Link to={`/country/${country.name.common}`} className="card" key={index}>
            <img
              src={country.flags.svg}
              alt={country.name.common}
            />
            <h3>{country.name.common}</h3>
          </Link>
        ))}
      </div>
      }
    </>
  );
};

export default CountryList;
