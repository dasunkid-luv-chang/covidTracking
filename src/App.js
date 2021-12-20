import CountrySelector from "./components/CountrySelector";
import Summary from "./components/Summary";
import Highlight from "./components/Highlight";
import Footer from "./components/Footer";
import { getCountries, getReportByCountry } from "./api";
import { useState, useEffect } from "react";
import { sortBy } from "lodash";
import { Container, Typography } from "@material-ui/core";
import '@fontsource/roboto';
import moment from "moment";
import 'moment/locale/vi';

moment.locale('vi')

function App() {
  // state lay du lieu tu api
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  //call api lan dau tien
  useEffect(() => {
    getCountries().then((respone) => {
      // sap xep ten quoc gia theo a-z
      const countries = sortBy(respone.data, "Country");

      setCountries(countries);

      // chon mac dinh viet nam
      setSelectedCountryId("vn");
    });
  }, []);

  const handleOnChange = (e) => {
    // set country da chon
    setSelectedCountryId(e.target.value);
  };

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2 === selectedCountryId.toUpperCase()
      );
      getReportByCountry(Slug).then((res) => {
        setReport(res.data);
      });
    }
  }, [selectedCountryId, countries]);

  return (
    <>
      <Container style={{ marginTop: 10 }}>
        <Typography variant="h3" component="h3" style={{ textAlign: "center" }}>
          THEO DÕI SỐ LIỆU COVID
        </Typography>
        <CountrySelector
          countries={countries}
          handleOnChange={handleOnChange}
          value={selectedCountryId}
        />
        <Typography style={{margin: 10}}>Số liệu ngày: {moment().format('LLL')}</Typography>
        <Highlight report={report} />
        <Summary report={report} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
