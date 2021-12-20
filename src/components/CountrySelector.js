import React from "react";
import {
  FormControl,
  NativeSelect,
  InputLabel,
} from "@material-ui/core";

export default function CountrySelector({value, handleOnChange, countries}) {
  return (
    <FormControl style={{margin: 10}}>
      <InputLabel shrink htmlFor="country-selector" style={{fontSize: 20}}>
        Chọn một Quốc Gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map(country => (
          <option key={country.ISO2} value={country.ISO2.toLowerCase()}>
            {country.Country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
