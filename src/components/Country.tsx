import React, { FunctionComponent } from "react";
import { CountryType } from "../types";

interface ICountryProps {
  country: CountryType;
}

const Country: FunctionComponent<ICountryProps> = (props) => {
  //Boyle tanimlarsak props icinde children kullanabiliriz
  const { country } = props; //destructor
  return (
    <div>
      <p>
        {country.name} - {country.capital}
      </p>
    </div>
  );
};
export default Country;
