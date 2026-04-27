import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { name } = useParams();
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryData(data[0]);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <>
        <h1>Country Details</h1>
        <div className="">
          <div className="card_container">
            {loading ? (
              <p>Loading....</p>
            ) : (
              <div className="card">
                <h1>{countryData?.name?.common}</h1>
                <img src={countryData?.flags?.svg} alt="" />
                <h4>{countryData?.capital?.[0]}</h4>
                <h3>{countryData?.name?.common}</h3>
              </div>
            )}
          </div>
        </div>
      </>
    </>
  );
};

export default CountryDetails;
