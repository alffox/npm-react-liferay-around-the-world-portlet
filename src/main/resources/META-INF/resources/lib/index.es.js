import React from "react";
import ReactDOM from "react-dom";

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
  componentDidMount() {
    console.log(locationsData);
  }

  render() {
    return <div className="container mytest">Ciao</div>;
  }
}

export default function(elementId) {
  ReactDOM.render(<App />, document.getElementById(elementId));
}
