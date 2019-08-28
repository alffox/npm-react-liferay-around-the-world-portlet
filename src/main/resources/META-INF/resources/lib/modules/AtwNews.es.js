import React from "react";

import AtwNew from "./AtwNew.es";

class AtwNews extends React.Component {
  render() {
    return (
      <section>
        <div className="news">
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
                  />
                );
              })}
          </div>
        </div>
      </section>
    );
  }
}

export default AtwNews;
