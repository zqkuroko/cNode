import React, { Component } from "react";
import { Card } from "antd";

class PublicCard extends Component {
  render() {
  	const { data } = this.props;
  	return (
      <div className="wrap">
        {
          data.map((item, index)=> (
            <Card
              key={index}
              title={item.title}
              type="inner"
            >
              <div dangerouslySetInnerHTML={{__html: item.content}}></div>
            </Card>
          ))
        }
      </div>
  	)
  }
}

export default PublicCard;