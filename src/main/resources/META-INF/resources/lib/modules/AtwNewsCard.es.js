import React from "react";

import AtwCardHeader from "./AtwCardHeader.es";
import AtwNews from "./AtwNews.es";

class AtwNewsCard extends React.Component {
  render() {
    return (
      <div className="card w-100 mt-1">
        <AtwCardHeader
          icon="far fa-newspaper"
          cardKey="News"
          APIAttribution="News API"
          APIURL="https://newsapi.org/"
        />
        <AtwNews newsData={this.props.englishNewsData} />
        <AtwNews newsData={this.props.regionalNewsData} />
        <AtwNews newsData={this.props.techNewsData} />
      </div>
    );
  }
}

export default AtwNewsCard;
