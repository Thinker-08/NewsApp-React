import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
    let {title, description,img_url,newsUrl} = this.props;
    return (
      <div>
            <div className="card" style={{width: "20rem"}}>
            <img className="card-img-top" src={img_url} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="__blank" className="btn btn-primary">Read Me</a>
            </div>
            </div>
      </div>
    )
  }
}
