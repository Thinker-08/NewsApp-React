import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
    let {title, description,img_url,newsUrl,author,date,source} = this.props;
    return (
      <div>
            <div className="card">
            <img className="card-img-top" src={img_url} alt="Carmage cap" height="200px" width="160"/>
            <div className="card-body">
            <span className="badge badge-pill badge-danger">{source}</span>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="__blank" className="btn btn-dark">Read More</a>
                <p className="card-text"><small className="text-muted">By {author} at {new Date(date).toGMTString()}</small></p>
            </div>
            </div>
      </div>
    )
  }
}
