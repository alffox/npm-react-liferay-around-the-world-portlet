import React from "react";

import AtwCardHeader from "./AtwCardHeader.es";
import AtwNews from "./AtwNews.es";

class AtwNewsCard extends React.Component {
  render() {
    return (
      <div className="card w-100 mt-1 news">
        <AtwCardHeader
          iconName="blogs"
          cardKey="Tech News"
          APIAttribution="News API"
          APIURL="https://newsapi.org/"
        />
        {/* <AtwNews
          newsData={this.props.regionalNewsData}
          newsType="regional-news"
          iconName="geolocation"
        /> */}
        {/* <AtwNews
          newsData={this.props.englishNewsData}
          newsType="english-news"
          iconName="globe"
        /> */}
        <AtwNews
          newsData={this.props.techNewsData}
          newsType="tech-news"
          iconName="chip"
        />
      </div>
    );
  }
}

export default AtwNewsCard;
