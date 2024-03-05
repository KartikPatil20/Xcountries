import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((country) => setCountries(country));
  }, []);

  return (
    <>
      {countries.map((country) => (
        <div className="country" key={country.cca3}>
          <img src={country.flags.png} alt={country.flags.alt} />
          <h1>{country.name.common}</h1>
        </div>
      ))}
    </>
  );
}