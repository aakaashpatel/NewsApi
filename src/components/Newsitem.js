import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    const {title,description,urlToImage,url}= this.props
    return (
        <>
        <div className="card mx-1" >
        <img src={urlToImage} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}..</h5>
          <p className="card-text">{description}..</p>
          <a href={url} className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </>
    )
  }
}
