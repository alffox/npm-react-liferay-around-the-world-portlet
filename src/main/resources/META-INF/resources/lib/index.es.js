import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";

import AtwHeader from "./modules/AtwHeader.es";
import AtwFlags from "./modules/AtwFlags.es";
import AtwTimeDate from "./modules/AtwTimeDate.es";
import AtwNavbar from "./modules/AtwNavbar.es";
import AtwLocalData from "./modules/AtwLocalData.es";
import AtwFooter from "./modules/AtwFooter.es";

const RESTAPIServer = "https://around-the-world-backend.herokuapp.com";

const locationsData = {
  locations: [
    {
      title: "Diamond Bar",
      continent: "Americas",
      country: "USA",
      ISO_3166_1_alpha_2: "us",
      timezone_database_name: "America/Los_Angeles",
      state_name: "California",
      state_code: "CA",
      language: "en",
      location: {
        lat: 33.997762,
        lon: -117.814565
      }
    },
    {
      title: "Chicago",
      continent: "Americas",
      country: "USA",
      ISO_3166_1_alpha_2: "us",
      timezone_database_name: "America/Chicago",
      state_name: "Illinois",
      state_code: "IL",
      language: "en",
      location: {
        lat: 41.886448,
        lon: -87.634293
      }
    },
    {
      title: "Hamilton",
      continent: "Americas",
      country: "USA",
      ISO_3166_1_alpha_2: "us",
      timezone_database_name: "America/Chicago",
      state_name: "Ohio",
      state_code: "OH",
      language: "en",
      location: {
        lat: 39.399105,
        lon: -84.56109
      }
    },
    {
      title: "Raleigh",
      continent: "Americas",
      country: "USA",
      ISO_3166_1_alpha_2: "us",
      timezone_database_name: "America/Chicago",
      state_name: "North Carolina",
      state_code: "NC",
      language: "en",
      location: {
        lat: 35.802156,
        lon: -78.708269
      }
    },
    {
      title: "Markham",
      continent: "Americas",
      country: "Canada",
      ISO_3166_1_alpha_2: "ca",
      timezone_database_name: "America/Toronto",
      state_name: "Ontario",
      state_code: "ON",
      language: "en",
      location: {
        lat: 43.85006,
        lon: -79.363188
      }
    },
    {
      title: "Recife",
      continent: "Americas",
      country: "Brazil",
      ISO_3166_1_alpha_2: "br",
      timezone_database_name: "America/Recife",
      state_name: "Pernambuco",
      state_code: "PE",
      language: "pt",
      location: {
        lat: -8.034983,
        lon: -34.917969
      }
    },
    {
      title: "São Paulo",
      continent: "Americas",
      country: "Brazil",
      ISO_3166_1_alpha_2: "br",
      timezone_database_name: "America/Sao_Paulo",
      state_name: "São Paulo",
      state_code: "SP",
      language: "pt",
      location: {
        lat: -23.557027,
        lon: -46.663198
      }
    },
    {
      title: "Eschborn",
      continent: "Europe",
      country: "Germany",
      ISO_3166_1_alpha_2: "de",
      timezone_database_name: "Europe/Berlin",
      state_name: "Hesse",
      state_code: "",
      language: "de",
      location: {
        lat: 50.135794,
        lon: 8.571555
      }
    },
    {
      title: "Madrid",
      continent: "Europe",
      country: "Spain",
      ISO_3166_1_alpha_2: "es",
      timezone_database_name: "Europe/Madrid",
      state_name: "Community of Madrid",
      state_code: "",
      language: "es",
      location: {
        lat: 40.476303,
        lon: -3.685699
      }
    },
    {
      title: "London",
      continent: "Europe",
      country: "United Kingdom",
      ISO_3166_1_alpha_2: "gb",
      timezone_database_name: "Europe/London",
      state_name: "London",
      state_code: "",
      language: "en",
      location: {
        lat: 51.449215,
        lon: -0.329519
      }
    },
    {
      title: "Dublin",
      continent: "Europe",
      country: "Ireland",
      ISO_3166_1_alpha_2: "ie",
      timezone_database_name: "Europe/Dublin",
      state_name: "Leinster",
      state_code: "",
      language: "en",
      location: {
        lat: 53.338277,
        lon: -6.242025
      }
    },
    {
      title: "Concorezzo",
      continent: "Europe",
      country: "Italy",
      ISO_3166_1_alpha_2: "it",
      timezone_database_name: "Europe/Rome",
      state_name: "Monza Brianza",
      state_code: "MB",
      language: "it",
      location: {
        lat: 45.596258,
        lon: 9.325988
      }
    },
    {
      title: "Budapest",
      continent: "Europe",
      country: "Hungary",
      ISO_3166_1_alpha_2: "hu",
      timezone_database_name: "Europe/Budapest",
      state_name: "Budapest",
      state_code: "",
      language: "hu",
      location: {
        lat: 47.553462,
        lon: 19.078457
      }
    },
    {
      title: "Helsinki",
      continent: "Europe",
      country: "Finland",
      ISO_3166_1_alpha_2: "fi",
      timezone_database_name: "Europe/Helsinki",
      state_name: "",
      state_code: "",
      language: "fi",
      location: {
        lat: 60.169856,
        lon: 24.938379
      }
    },
    {
      title: "Paris",
      continent: "Europe",
      country: "France",
      ISO_3166_1_alpha_2: "fr",
      timezone_database_name: "Europe/Paris",
      state_name: "Île-de-France",
      state_code: "",
      language: "fr",
      location: {
        lat: 48.873782,
        lon: 2.335101
      }
    },
    {
      title: "Leiden",
      continent: "Europe",
      country: "The Netherlands",
      ISO_3166_1_alpha_2: "nl",
      timezone_database_name: "Europe/Amsterdam",
      state_name: "South Holland",
      state_code: "",
      language: "nl",
      location: {
        lat: 52.160285,
        lon: 4.512023
      }
    },
    {
      title: "Casablanca",
      continent: "Africa",
      country: "Morocco",
      ISO_3166_1_alpha_2: "ma",
      timezone_database_name: "Africa/Casablanca",
      state_name: "Casablanca-Settat",
      state_code: "",
      language: "ar",
      location: {
        lat: 33.5866,
        lon: -7.632392
      }
    },
    {
      title: "Dalian",
      continent: "Asia-Pacific",
      country: "China",
      ISO_3166_1_alpha_2: "cn",
      timezone_database_name: "Asia/Shanghai",
      state_name: "Liaoning",
      state_code: "",
      language: "cn",
      location: {
        lat: 38.864052,
        lon: 121.532561
      }
    },
    {
      title: "Tokyo",
      continent: "Asia-Pacific",
      country: "Japan",
      ISO_3166_1_alpha_2: "jp",
      timezone_database_name: "Asia/Tokyo",
      state_name: "",
      state_code: "",
      language: "jp",
      location: {
        lat: 35.647141,
        lon: 139.715772
      }
    },
    {
      title: "Bangalore",
      continent: "Asia-Pacific",
      country: "India",
      ISO_3166_1_alpha_2: "in",
      timezone_database_name: "Asia/Kolkata",
      state_name: "Karnataka",
      state_code: "KA",
      language: "en",
      location: {
        lat: 13.027935,
        lon: 77.632167
      }
    },
    {
      title: "Sydney",
      continent: "Asia-Pacific",
      country: "Australia",
      ISO_3166_1_alpha_2: "au",
      timezone_database_name: "Australia/Sydney",
      state_name: "New South Wales",
      state_code: "NSW",
      language: "en",
      location: {
        lat: -33.874336,
        lon: 151.209425
      }
    },
    {
      title: "Singapore",
      continent: "Asia-Pacific",
      country: "Singapore",
      ISO_3166_1_alpha_2: "sg",
      timezone_database_name: "Asia/Singapore",
      state_name: "",
      state_code: "",
      language: "en",
      location: {
        lat: 1.304029,
        lon: 103.834769
      }
    },
    {
      title: "Dubai",
      continent: "Asia-Pacific",
      country: "United Arab Emirates",
      ISO_3166_1_alpha_2: "ae",
      timezone_database_name: "Asia/Dubai",
      state_name: "",
      state_code: "",
      language: "ar",
      location: {
        lat: 25.090228,
        lon: 55.152997
      }
    }
  ]
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.setCelsius = this.setCelsius.bind(this);
    this.setFahrenheit = this.setFahrenheit.bind(this);
  }

  componentDidMount() {
    this.fetchCurrentLocation(locationsData.locations[0].title);
    this.fetchCurrentCountry(locationsData.locations[0].country);
    this.fetchCurrentLocationISO_3166_1_alpha_2(
      locationsData.locations[0].ISO_3166_1_alpha_2
    );
    this.fetchTime(locationsData.locations[0].timezone_database_name);
    this.fetchHeadlinesNews(locationsData.locations[0].ISO_3166_1_alpha_2);
    this.fetchEnglishNews(locationsData.locations[0].country);
    this.fetchTechNews(locationsData.locations[0].ISO_3166_1_alpha_2);
    this.fetchWeather(
      locationsData.locations[0].country,
      locationsData.locations[0].location.lat,
      locationsData.locations[0].location.lon
    );
    this.fetchWeatherForecast(
      locationsData.locations[0].country,
      locationsData.locations[0].location.lat,
      locationsData.locations[0].location.lon
    );
    this.fetchMapCoordinates(
      locationsData.locations[0].location.lat,
      locationsData.locations[0].location.lon
    );
    this.fetchWebCamData(
      locationsData.locations[0].location.lat,
      locationsData.locations[0].location.lon,
      locationsData.locations[0].ISO_3166_1_alpha_2
    );
    this.fetchWikiData(locationsData.locations[0].country);
    this.fetchPictures(locationsData.locations[0].country);
  }

  handleClick(
    currentLocation,
    currentCountry,
    currentLocationISO_3166_1_alpha_2,
    currentTimeZoneDBName,
    currentLatitude,
    currentLongitude
  ) {
    this.fetchCurrentLocation(currentLocation);
    this.fetchCurrentCountry(currentCountry);
    this.fetchCurrentLocationISO_3166_1_alpha_2(
      currentLocationISO_3166_1_alpha_2
    );
    this.fetchTime(currentTimeZoneDBName);
    this.fetchHeadlinesNews(currentLocationISO_3166_1_alpha_2);
    this.fetchEnglishNews(currentCountry);
    this.fetchTechNews(currentLocationISO_3166_1_alpha_2);
    this.fetchWeather(currentCountry, currentLatitude, currentLongitude);
    this.fetchWeatherForecast(
      currentCountry,
      currentLatitude,
      currentLongitude
    );
    this.fetchMapCoordinates(currentLatitude, currentLongitude);
    this.fetchWebCamData(
      currentLatitude,
      currentLongitude,
      currentLocationISO_3166_1_alpha_2
    );
    this.fetchWikiData(currentCountry);
    this.fetchPictures(currentCountry);
  }

  setCelsius() {
    if (!this.state.isCelsius)
      this.setState({
        isCelsius: true
      });
  }

  setFahrenheit() {
    if (this.state.isCelsius)
      this.setState({
        isCelsius: false
      });
  }

  fetchCurrentLocation(currentLocation) {
    this.setState({
      currentLocation: currentLocation
    });
  }

  fetchCurrentCountry(currentCountry) {
    this.setState({
      currentCountry: currentCountry
    });
  }

  fetchCurrentLocationISO_3166_1_alpha_2(currentLocationISO_3166_1_alpha_2) {
    this.setState({
      currentLocationISO_3166_1_alpha_2: currentLocationISO_3166_1_alpha_2
    });
  }

  fetchTime(currentTimeZoneDBName) {
    const URL =
      RESTAPIServer +
      "/TimeDateEndpoint?format=json&by=zone&zone=" +
      currentTimeZoneDBName;

    axios
      .get(URL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          date: data.formatted.substr(0, data.formatted.indexOf(" ")),
          time: data.formatted.substr(data.formatted.indexOf(" ") + 1)
        });
      });
  }

  fetchHeadlinesNews(currentLocationISO_3166_1_alpha_2) {
    const regionalNewsURL =
      RESTAPIServer +
      "/topHeadlinesEndpoint?pageSize=6&country=" +
      currentLocationISO_3166_1_alpha_2;

    axios
      .get(regionalNewsURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          regionalNewsData: data.articles
        });
      });
  }

  fetchEnglishNews(currentCountry) {
    const englishNewsURL =
      RESTAPIServer +
      "/everythingNewsEndpoint?domains=nytimes.com,bbc.co.uk,reuters.com&excludeDomains=jpost.com&sortBy=popularity&pageSize=8&q=" +
      currentCountry;

    axios
      .get(englishNewsURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          englishNewsData: data.articles
        });
      });
  }

  fetchTechNews(currentLocationISO_3166_1_alpha_2) {
    const techNewsURL =
      RESTAPIServer +
      "/topHeadlinesEndpoint?category=technology&pageSize=4&country=" +
      currentLocationISO_3166_1_alpha_2;

    axios
      .get(techNewsURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          techNewsData: data.articles
        });
      });
  }

  fetchWeather(currentCountry, currentLatitude, currentLongitude) {
    const weatherURL =
      RESTAPIServer +
      "/weatherEndpoint?lat=" +
      currentLatitude +
      "&lon=" +
      currentLongitude +
      "&units=metric";

    axios
      .get(weatherURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          currentWeatherCountry: currentCountry,
          currentTemperatureCelsius: Math.round(data.main.temp),
          currentTemperatureFahrenheit: Math.round(
            (data.main.temp * 9) / 5 + 32
          ),
          isCelsius: true,
          currentWeatherDescription: data.weather[0].main,
          currentIconURL:
            "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        });
      });
  }

  fetchWeatherForecast(currentCountry, currentLatitude, currentLongitude) {
    const weatherForecastURL =
      RESTAPIServer +
      "/forecastEndpoint?lat=" +
      currentLatitude +
      "&lon=" +
      currentLongitude +
      "&units=metric";

    axios
      .get(weatherForecastURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          currentForecastCountry: currentCountry,
          forecastData: data.list.filter(item =>
            item.dt_txt.includes("12:00:00")
          )
        });
      });
  }

  fetchMapCoordinates(currentLatitude, currentLongitude) {
    this.setState({
      currentLatitude: currentLatitude,
      currentLongitude: currentLongitude
    });
  }

  fetchWebCamData(
    currentLatitude,
    currentLongitude,
    currentLocationISO_3166_1_alpha_2
  ) {
    const webCamDataURL =
      RESTAPIServer +
      "/webcamEndpoint?countryCode=" +
      currentLocationISO_3166_1_alpha_2 +
      "&lat=" +
      currentLatitude +
      "&lon=" +
      currentLongitude;

    axios
      .get(webCamDataURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          webCamData: data.result.webcams
        });
      });
  }

  fetchWikiData(currentCountry) {
    const wikiDataURL =
      "https://en.wikipedia.org/api/rest_v1/page/summary/" + currentCountry;

    axios
      .get(wikiDataURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          wikiExtract: data.extract,
          wikiTitle: data.title,
          wikiUrl: data.content_urls.mobile.page
        });
      });
  }

  fetchPictures(currentCountry) {
    const randomPicturesPageNumber = Math.floor(Math.random() * 20); //helps to display mostly new pictures upon refreshing the page

    const picturesDataURL =
      RESTAPIServer +
      "/picturesEndpoint?page=" +
      randomPicturesPageNumber +
      "&query=" +
      currentCountry;

    axios
      .get(picturesDataURL)
      .then(response => response.data)
      .then(data => {
        this.setState({
          picturesData: data.results
        });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <AtwHeader />
        <AtwFlags
          locationsData={locationsData}
          handleClick={this.handleClick}
        />
        <AtwTimeDate date={this.state.date} time={this.state.time} />
        <AtwNavbar
          currentLocation={this.state.currentLocation}
          currentCountry={this.state.currentCountry}
          currentLocationISO_3166_1_alpha_2={
            this.state.currentLocationISO_3166_1_alpha_2
          }
          locationsData={locationsData}
          handleClick={this.handleClick}
        />
        <AtwLocalData
          currentLocation={this.state.currentLocation}
          englishNewsData={this.state.englishNewsData}
          regionalNewsData={this.state.regionalNewsData}
          techNewsData={this.state.techNewsData}
          currentWeatherCountry={this.state.currentWeatherCountry}
          currentTemperatureCelsius={this.state.currentTemperatureCelsius}
          currentTemperatureFahrenheit={this.state.currentTemperatureFahrenheit}
          setCelsius={this.setCelsius}
          setFahrenheit={this.setFahrenheit}
          isCelsius={this.state.isCelsius}
          currentWeatherDescription={this.state.currentWeatherDescription}
          currentIconURL={this.state.currentIconURL}
          currentForecastCountry={this.state.currentForecastCountry}
          forecastData={this.state.forecastData}
          currentLatitude={this.state.currentLatitude}
          currentLongitude={this.state.currentLongitude}
          webCamData={this.state.webCamData}
          wikiExtract={this.state.wikiExtract}
          wikiTitle={this.state.wikiTitle}
          wikiUrl={this.state.wikiUrl}
          picturesData={this.state.picturesData}
        />
        <AtwFooter />
      </div>
    );
  }
}

export default function(elementId) {
  ReactDOM.render(<App />, document.getElementById(elementId));
}
