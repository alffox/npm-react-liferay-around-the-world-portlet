import React from "react";

import AtwNew from "./AtwNew.es";

class AtwNews extends React.Component {
  render() {
    return (
      <div>
        {this.props.newsData &&
          this.props.newsData.map((article, index) => {
            return (
              <AtwNew
                key={index}
                articleTitle={article.title}
                articleURL={article.url}
                imageURL={article.urlToImage}
                articleSource={article.source.name}
                newsType={this.props.newsType}
              />
            );
          })}
      </div>
    );
  }
}

export default AtwNews;
