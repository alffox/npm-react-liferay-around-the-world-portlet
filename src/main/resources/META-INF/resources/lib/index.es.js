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
      wiki: {
        description:
          "The United States of America (USA), commonly known as the United States or America, is a country comprising 50 states, a federal district, five major self-governing territories, and various possessions. At 3.8 million square miles, the United States is the world's third or fourth largest country by total area and is slightly smaller than the entire continent of Europe. With a population of over 327 million people, the U.S. is the third most populous country. The capital is Washington, D.C., and the most populous city is New York City. Most of the country is located contiguously in North America between Canada and Mexico.",
        URL: "https://en.m.wikipedia.org/wiki/United_States"
      },
      location: {
        lat: 33.997762,
        lon: -117.814565
      },
      grow_URL: "https://grow.liferay.com/people/US+Office"
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
      wiki: {
        description:
          "The United States of America (USA), commonly known as the United States or America, is a country comprising 50 states, a federal district, five major self-governing territories, and various possessions. At 3.8 million square miles, the United States is the world's third or fourth largest country by total area and is slightly smaller than the entire continent of Europe. With a population of over 327 million people, the U.S. is the third most populous country. The capital is Washington, D.C., and the most populous city is New York City. Most of the country is located contiguously in North America between Canada and Mexico.",
        URL: "https://en.m.wikipedia.org/wiki/United_States"
      },
      location: {
        lat: 41.886448,
        lon: -87.634293
      },
      grow_URL: "https://grow.liferay.com/people/US+Office"
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
      wiki: {
        description:
          "The United States of America (USA), commonly known as the United States or America, is a country comprising 50 states, a federal district, five major self-governing territories, and various possessions. At 3.8 million square miles, the United States is the world's third or fourth largest country by total area and is slightly smaller than the entire continent of Europe. With a population of over 327 million people, the U.S. is the third most populous country. The capital is Washington, D.C., and the most populous city is New York City. Most of the country is located contiguously in North America between Canada and Mexico.",
        URL: "https://en.m.wikipedia.org/wiki/United_States"
      },
      location: {
        lat: 39.399105,
        lon: -84.56109
      },
      grow_URL: "https://grow.liferay.com/people/US+Office"
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
      wiki: {
        description:
          "The United States of America (USA), commonly known as the United States or America, is a country comprising 50 states, a federal district, five major self-governing territories, and various possessions. At 3.8 million square miles, the United States is the world's third or fourth largest country by total area and is slightly smaller than the entire continent of Europe. With a population of over 327 million people, the U.S. is the third most populous country. The capital is Washington, D.C., and the most populous city is New York City. Most of the country is located contiguously in North America between Canada and Mexico.",
        URL: "https://en.m.wikipedia.org/wiki/United_States"
      },
      location: {
        lat: 35.802156,
        lon: -78.708269
      },
      grow_URL: "https://grow.liferay.com/people/US+Office"
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
      wiki: {
        description:
          "Canada is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres, making it the world's second-largest country by total area. Its southern border with the United States, stretching some 8,891 kilometres (5,525 mi), is the world's longest bi-national land border. Canada's capital is Ottawa, and its three largest metropolitan areas are Toronto, Montreal, and Vancouver.",
        URL: "https://en.m.wikipedia.org/wiki/Canada"
      },
      location: {
        lat: 43.85006,
        lon: -79.363188
      },
      grow_URL: "https://grow.liferay.com/people/Canada+Office"
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
      wiki: {
        description:
          "Brazil, officially the Federative Republic of Brazil, is the largest country in both South America and Latin America. At 8.5 million square kilometers and with over 208 million people, Brazil is the world's fifth-largest country by area and the fifth most populous. Its capital is Brasília, and its most populated city is São Paulo. The federation is composed of the union of the 26 states, the Federal District, and the 5,570 municipalities. It is the largest country to have Portuguese as an official language and the only one in the Americas; it is also one of the most multicultural and ethnically diverse nations, due to over a century of mass immigration from around the world.",
        URL: "https://en.m.wikipedia.org/wiki/Brazil"
      },
      location: {
        lat: -8.034983,
        lon: -34.917969
      },
      grow_URL: "https://grow.liferay.com/people/Brazil+Office"
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
      wiki: {
        description:
          "Brazil, officially the Federative Republic of Brazil, is the largest country in both South America and Latin America. At 8.5 million square kilometers and with over 208 million people, Brazil is the world's fifth-largest country by area and the fifth most populous. Its capital is Brasília, and its most populated city is São Paulo. The federation is composed of the union of the 26 states, the Federal District, and the 5,570 municipalities. It is the largest country to have Portuguese as an official language and the only one in the Americas; it is also one of the most multicultural and ethnically diverse nations, due to over a century of mass immigration from around the world.",
        URL: "https://en.m.wikipedia.org/wiki/Brazil"
      },
      location: {
        lat: -23.557027,
        lon: -46.663198
      },
      grow_URL: "https://grow.liferay.com/people/Brazil+Office"
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
      wiki: {
        description:
          "Germany, officially the Federal Republic of Germany, is a country in Central and Western Europe, lying between the Baltic and North Seas to the north and the Alps, Lake Constance and the High Rhine to the south. It borders Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, France to the southwest, and Luxembourg, Belgium and the Netherlands to the west.",
        URL: "https://en.m.wikipedia.org/wiki/Germany"
      },
      location: {
        lat: 50.135794,
        lon: 8.571555
      },
      grow_URL: "https://grow.liferay.com/people/Germany+Office"
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
      wiki: {
        description:
          "Spain, officially the Kingdom of Spain, is a European country located in Southwestern Europe with some pockets of Spanish territory across the Strait of Gibraltar and the Atlantic Ocean. Its continental European territory is situated on the Iberian Peninsula. Its territory also includes two archipelagoes: the Canary Islands off the coast of Africa, and the Balearic Islands in the Mediterranean Sea. The African enclaves of Ceuta, Melilla, and Peñón de Vélez de la Gomera make Spain the only European country to have a physical border with an African country (Morocco). Several small islands in the Alboran Sea are also part of Spanish territory. The country's mainland is bordered to the south and east by the Mediterranean Sea except for a small land boundary with Gibraltar; to the north and northeast by France, Andorra, and the Bay of Biscay; and to the west and northwest by Portugal and the Atlantic Ocean.",
        URL: "https://en.m.wikipedia.org/wiki/Spain"
      },
      location: {
        lat: 40.476303,
        lon: -3.685699
      },
      grow_URL: "https://grow.liferay.com/people/Spain+Office"
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
      wiki: {
        description:
          "The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign country located off the north-western coast of the European mainland. The United Kingdom includes the island of Great Britain, the north-eastern part of the island of Ireland, and many smaller islands. Northern Ireland is the only part of the United Kingdom that shares a land border with another sovereign state, the Republic of Ireland. Apart from this land border, the United Kingdom is surrounded by the Atlantic Ocean, with the North Sea to the east, the English Channel to the south and the Celtic Sea to the south-west, giving it the 12th-longest coastline in the world. The Irish Sea separates Great Britain and Ireland. The United Kingdom's 242,500 square kilometres (93,600 sq mi) were home to an estimated 66.0 million inhabitants in 2017.",
        URL: "https://en.m.wikipedia.org/wiki/United_Kingdom"
      },
      location: {
        lat: 51.449215,
        lon: -0.329519
      },
      grow_URL: "https://grow.liferay.com/share/uk+office"
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
      wiki: {
        description:
          "Ireland is an island in the North Atlantic. It is separated from Great Britain to its east by the North Channel, the Irish Sea, and St George's Channel. Ireland is the second-largest island of the British Isles, the third-largest in Europe, and the twentieth-largest on Earth.",
        URL: "https://en.m.wikipedia.org/wiki/Ireland"
      },
      location: {
        lat: 53.338277,
        lon: -6.242025
      },
      grow_URL: "https://grow.liferay.com/people/Ireland+Office"
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
      wiki: {
        description:
          "Italy, officially the Italian Republic, is a European country located in Southern Europe consisting of a peninsula delimited by the Alps and surrounded by several islands. Located in the middle of the Mediterranean sea and traversed along its length by the Apennines, Italy has a largely temperate seasonal climate including Mediterranean and Alpine zones. The country covers a total area of 301,340 km2 (116,350 sq mi), and land area of 294,140 km2 (113,570 sq mi), and shares open land borders with France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino. Italy has a territorial exclave in Switzerland (Campione) and a maritime exclave in the Tunisian Sea (Lampedusa). With around 60 million inhabitants, Italy is the fourth-most populous member state of the European Union.",
        URL: "https://en.m.wikipedia.org/wiki/Italy"
      },
      location: {
        lat: 45.596258,
        lon: 9.325988
      },
      grow_URL: "https://grow.liferay.com/people/Italy+Office"
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
      wiki: {
        description:
          "Hungary is a country in Central Europe. Spanning 93,030 square kilometres (35,920 sq mi) in the Carpathian Basin, it borders Slovakia to the north, Ukraine to the northeast, Austria to the northwest, Romania to the east, Serbia to the south, Croatia to the southwest, and Slovenia to the west. With about 10 million inhabitants, Hungary is a medium-sized member state of the European Union. The official language is Hungarian, which is the most widely spoken Uralic language in the world, and among the few non-Indo-European languages to be widely spoken in Europe. Hungary's capital and largest city is Budapest; other major urban areas include Debrecen, Szeged, Miskolc, Pécs and Győr.",
        URL: "https://en.m.wikipedia.org/wiki/Hungary"
      },
      location: {
        lat: 47.553462,
        lon: 19.078457
      },
      grow_URL: "https://grow.liferay.com/people/Hungary+Office"
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
      wiki: {
        description:
          "Finland, officially the Republic of Finland, is a Nordic country in Northern Europe bordering the Baltic Sea, Gulf of Bothnia, and Gulf of Finland, between Norway to the north, Sweden to the northwest, and Russia to the east. The capital and largest city is Helsinki. Other major cities are Espoo, Vantaa, Tampere, Oulu and Turku.",
        URL: "https://en.m.wikipedia.org/wiki/Finland"
      },
      location: {
        lat: 60.169856,
        lon: 24.938379
      },
      grow_URL: "https://grow.liferay.com/people/Finland+Office"
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
      wiki: {
        description:
          "France, officially the French Republic, is a country whose territory consists of metropolitan France in Western Europe and several overseas regions and territories. The metropolitan area of France extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean. It is bordered by Belgium, Luxembourg and Germany to the northeast, Switzerland and Italy to the east, and Andorra and Spain to the south. The overseas territories include French Guiana in South America and several islands in the Atlantic, Pacific and Indian oceans. The country's 18 integral regions span a combined area of 643,801 square kilometres (248,573 sq mi) and a total population of 67.02 million. France is a unitary semi-presidential republic with its capital in Paris, the country's largest city and main cultural and commercial centre. Other major urban areas include Lyon, Marseille, Toulouse, Bordeaux, Lille and Nice.",
        URL: "https://en.m.wikipedia.org/wiki/France"
      },
      location: {
        lat: 48.873782,
        lon: 2.335101
      },
      grow_URL: "https://grow.liferay.com/people/France+Office"
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
      wiki: {
        description:
          "The Netherlands, sometimes informally called Holland, is a country located in Northwestern Europe with some overseas territories in the Caribbean. In Europe, it consists of 12 provinces that border Germany to the east, Belgium to the south, and the North Sea to the northwest, with maritime borders in the North Sea with those countries and the United Kingdom. Together with three island territories in the Caribbean Sea—Bonaire, Sint Eustatius and Saba—it forms a constituent country of the Kingdom of the Netherlands. The official language is Dutch, but a secondary official language in the province of Friesland is West Frisian. In the northern parts of the country, Low German is also spoken.",
        URL: "https://en.m.wikipedia.org/wiki/Netherlands"
      },
      location: {
        lat: 52.160285,
        lon: 4.512023
      },
      grow_URL: "https://grow.liferay.com/people/Netherlands+Office"
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
      wiki: {
        description:
          "Morocco, officially the Kingdom of Morocco, is a sovereign state located in the Maghreb region of North Africa. It overlooks the Mediterranean Sea to the north and the Atlantic Ocean to the west. Morocco claims the areas of Ceuta, Melilla and Peñón de Vélez de la Gomera, all of them under Spanish jurisdiction. The capital is Rabat and the largest city Casablanca. Morocco spans an area of 710,850 km2 (274,460 sq mi) and has a population of over 35 million.",
        URL: "https://en.m.wikipedia.org/wiki/Morocco"
      },
      location: {
        lat: 33.5866,
        lon: -7.632392
      },
      grow_URL: "https://grow.liferay.com/people/Morocco+Office"
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
      wiki: {
        description:
          "China, officially the People's Republic of China (PRC), is a country in East Asia and the world's most populous country, with a population of around 1.404 billion in 2017. Covering approximately 9,600,000 square kilometers (3,700,000 sq mi), it is the third or fourth largest country by total area. Governed by the Communist Party of China, the state exercises jurisdiction over 22 provinces, five autonomous regions, four direct-controlled municipalities, and the special administrative regions of Hong Kong and Macau.",
        URL: "https://en.m.wikipedia.org/wiki/China"
      },
      location: {
        lat: 38.864052,
        lon: 121.532561
      },
      grow_URL: "https://grow.liferay.com/people/China+Office"
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
      wiki: {
        description:
          "Japan is an island country in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian continent and stretches from the Sea of Okhotsk in the north to the East China Sea and the Philippine Sea in the south.",
        URL: "https://en.m.wikipedia.org/wiki/Japan"
      },
      location: {
        lat: 35.647141,
        lon: 139.715772
      },
      grow_URL: "https://grow.liferay.com/people/Japan+Office"
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
      wiki: {
        description:
          "India is a country in South Asia. It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west; China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.",
        URL: "https://en.m.wikipedia.org/wiki/India"
      },
      location: {
        lat: 13.027935,
        lon: 77.632167
      },
      grow_URL: "https://grow.liferay.com/people/India+Office"
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
      wiki: {
        description:
          "Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. It is the largest country in Oceania and the world's sixth-largest country by total area. The neighbouring countries are Papua New Guinea, Indonesia, and East Timor to the north; the Solomon Islands and Vanuatu to the north-east; and New Zealand to the south-east. The population of 26 million is highly urbanised and heavily concentrated on the eastern seaboard. Australia's capital is Canberra, and its largest city is Sydney. The country's other major metropolitan areas are Melbourne, Brisbane, Perth, and Adelaide.",
        URL: "https://en.m.wikipedia.org/wiki/Australia"
      },
      location: {
        lat: -33.874336,
        lon: 151.209425
      },
      grow_URL: "https://grow.liferay.com/people/Australia+Office"
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
      wiki: {
        description:
          "Singapore, officially the Republic of Singapore, is a sovereign island city-state in Southeast Asia. The country is situated one degree north of the equator, at the southern tip of the Malay Peninsula, with Indonesia's Riau Islands to the south and Peninsular Malaysia to the north. Singapore's territory consists of one main island along with 62 other islets. Since independence, extensive land reclamation has increased its total size by 23%.",
        URL: "https://en.m.wikipedia.org/wiki/Singapore"
      },
      location: {
        lat: 1.304029,
        lon: 103.834769
      },
      grow_URL: "https://grow.liferay.com/people/Singapore+Office"
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
      wiki: {
        description:
          "The United Arab Emirates, sometimes simply called the Emirates, is a country in Western Asia at the southeast end of the Arabian Peninsula on the Persian Gulf, bordering Oman to the east and Saudi Arabia to the south and west, as well as sharing maritime borders with Qatar to the west and Iran to the north. The sovereign constitutional monarchy is a federation of seven emirates consisting of Abu Dhabi, Ajman, Dubai, Fujairah, Ras Al Khaimah, Sharjah and Umm Al Quwain. Their boundaries are complex, with numerous enclaves within the various emirates. Each emirate is governed by a ruler; together, they jointly form the Federal Supreme Council. One of the rulers serves as the President of the United Arab Emirates. In 2013, the UAE's population was 9.2 million, of which 1.4 million are Emirati citizens and 7.8 million are expatriates.",
        URL: "https://en.m.wikipedia.org/wiki/United_Arab_Emirates"
      },
      location: {
        lat: 25.090228,
        lon: 55.152997
      },
      grow_URL: "https://grow.liferay.com/people/Dubai+Office"
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
    this.fetchGrowURL(locationsData.locations[0].grow_URL);
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
    this.fetchWikiData(
      locationsData.locations[0].wiki.description,
      locationsData.locations[0].wiki.URL
    );
    this.fetchPictures(locationsData.locations[0].country);
  }

  handleClick(
    currentLocation,
    currentCountry,
    currentLocationISO_3166_1_alpha_2,
    currentTimeZoneDBName,
    currentGrowURL,
    currentWikiDescription,
    currentWikiURL,
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
    this.fetchGrowURL(currentGrowURL);
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
    this.fetchWikiData(currentWikiDescription, currentWikiURL);
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

  fetchGrowURL(currentGrowURL) {
    this.setState({
      currentGrowURL: currentGrowURL
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

  fetchWikiData(currentWikiDescription, currentWikiURL) {
    // const wikiDataURL =
    //   "https://en.wikipedia.org/api/rest_v1/page/summary/" + currentCountry;

    // axios
    //   .get(wikiDataURL)
    //   .then(response => response.data)
    //   .then(data => {
    //     this.setState({
    //       wikiExtract: data.extract,
    //       wikiTitle: data.title,
    //       wikiUrl: data.content_urls.mobile.page
    //     });
    //   });
    this.setState({
      currentWikiDescription: currentWikiDescription,
      currentWikiURL: currentWikiURL
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
          currentGrowURL={this.state.currentGrowURL}
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
          currentCountry={this.state.currentCountry}
          currentWikiDescription={this.state.currentWikiDescription}
          currentWikiURL={this.state.currentWikiURL}
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
