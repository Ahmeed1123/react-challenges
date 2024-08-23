import logo from './logo.svg';
import './App.css';
import { Button, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';

// react
import { useEffect , useState } from 'react';
// Extrinal library
import axios from 'axios';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import  'moment/min/locales';
// import { Description } from '@mui/icons-material';

const theme = createTheme({
  typography: {
    fontFamily: ["IBM"]
  }
})
let cancelAxios = null;
function App() {
  const { t, i18n } = useTranslation();
  // states
  const  [locale, setLocale] =  useState('ar');
  
  // const [dataAndTime ,setDataAndTime] = moment().format('MMMM Do YYYY, h:mm:ss a'); // August 22nd 2024, 7:36:50 pm
  const [dataAndTime ,setDataAndTime] = useState(""); // August 22nd 2024, 7:36:50 pm

  const [temp, setTemp] = useState({
    number: null,
    description: "",
    min:null,
    max:null,
    icon: null,
  });
  // event handlers
  function handleLanguageClick() {
    if(locale === 'en') {

      setLocale('ar');
    moment.locale('ar');

    } else {
      setLocale('en');
      moment.locale('en');



    }
    // i18n.changeLanguage("en");

  }
  useEffect(() => {
    i18n.changeLanguage(locale);
    setDataAndTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
  
  } , [locale]);
  useEffect(() => {
    setDataAndTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
    // Make a request for a user with a given ID
      axios.get('https://api.openweathermap.org/data/2.5/weather?lat=21.38&lon=39.85&appid=9918174b11b233a318a0bec88b95ef00', {
        cancelToken: new axios.CancelToken( (c) => {
          cancelAxios = c;
        })
      })
      .then(function (response) {
        // handle success
        const responseTemp = Math.round(response.data.main.temp - 272.15);
        const min = Math.round(response.data.main.temp_min - 272.15) ;
        const max = Math.round(response.data.main.temp_max - 272.15) ;
        const description = response.data.weather[0].description ;
        const reesponseIcon = response.data.weather[0].icon ;
        console.log(responseTemp,  min , max , description);
        setTemp({
          number:responseTemp,
          min,
          max,
          description,
          icon: `https://openweathermap.org/img/wn/${reesponseIcon}@2x.png`,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    console.log("test");

    return () => {
      cancelAxios();
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        {/* content container */}
        <div style={{ width: "100%",height: "100vh" ,display: "flex",justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
          {/* card */}
          <div style={{ width: "100%", background: "rgb(28 52 91 /36%)", color: "white", padding:"10px", borderRadius:"10px" , boxShadow: "0px 11px 1px rgba(0,0,0,0.5)"}}>
            {/* content */}
            <div dir={locale == "ar" ? "rtl" : "ltr"}>
                {/* city & time */}
                <div style={{ display: "flex" , alignItems: "end",width: "100%" }} dir={locale == "ar" ? "rtl" : "ltr"}>
                  <Typography variant="h2" gutterBottom>
                    {t("Riyadh")}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                  {dataAndTime}
                  </Typography>
                </div>
                {/* == city & time == */}
                <hr />
                {/* container deggree icon */}
                <div style={{ display: "flex", justifyContent : "space-between" }}>
                  {/* degre & description */}
                  <div>
                    {/* temp */}
                    <div>
                      <div style={{ display:"flex", justifyContent: "center" , alignItems: "center"}}>
                      <Typography variant="h1" gutterBottom style={{ textAlign: "right" }}>
                        {temp.number}
                      </Typography>

                        <img src={temp.icon} />
                      </div>
                      <Typography variant="h6" gutterBottom style={{ textAlign: "right" }}>
                        {t(temp.description)}
                      </Typography>
                      {/* max && min */}
                      <div style={{ display: "flex",justifyContent:"space-between", alignItems:"center" }}>
                        <h5>{t('min')}: {temp.min}</h5>
                        <h5> | </h5>
                        <h5>{t('max')}: {temp.max}</h5>
                      </div>
                    </div>
                    {/* ==temp== */}
                  </div>
                  {/* == degre & description == */}
                  <CloudIcon style={{ fontSize:"200px",color: "white" }}/>
                </div>
                {/*== container deggree icon ==*/}

            </div>
            {/* == content == */}
          </div>
          {/* === card === */}
          {/* translation container */}
          <div dir={locale == "ar" ? "rtl" : "ltr"} style={{ display: "flex", justifyContent:"end" , width: "100%" }}>
            <Button onClick={handleLanguageClick} style={{ color:"white" }} variant="text">{locale == "en" ? "Arbic": "انجليزي"}</Button>
          </div>
          {/* ==translation container== */}

        </div>
        {/* ==content container== */}

        </Container>
    </ThemeProvider>
  );
}

export default App;
