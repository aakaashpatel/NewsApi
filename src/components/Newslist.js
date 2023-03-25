import React, { Component, useState } from "react";
import Newsitem from "./Newsitem";
import PlaceholderImage from "../placeholderimage.png";
import Placeholder from "./Placeholder";

// const [first, setFirst] = useState(second)

export default class Newslist extends Component {
   constructor(){
    super()

      this.state ={
        loading : true,
        articles: [
          //this articles container is empty 
          // in future you want to add the value
        ],
        pageNumber:1
      }
      
   }


   async componentDidMount () {
    
     let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cd58427c5798424394b0997a9d8cf0c5&pageSize=${this.props.pageSize}&page=${this.state.pageNumber}`
     this.setState({loading:true})
     let responce = await fetch(url)
     let data = await responce.json()
     this.setState({loading: false, articles : data.articles, totalResults:data.totalResults})
   }

   nextPageHandler = async() =>{
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cd58427c5798424394b0997a9d8cf0c5&pageSize=${this.props.pageSize}&page=${this.state.pageNumber+1}`
    let responce = await fetch(url)
    let data = await responce.json()
    this.setState({loading: false, articles : data.articles, pageNumber: this.state.pageNumber+1,totalResults:data.totalResults})
   }

   prevPageHandler = async() =>{
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cd58427c5798424394b0997a9d8cf0c5&pageSize=${this.props.pageSize}&page=${this.state.pageNumber-1}`
    let responce = await fetch(url)
    let data = await responce.json()
    this.setState({loading: false, articles : data.articles, pageNumber: this.state.pageNumber-1,totalResults:data.totalResults})
   }          


  render() {
    return (
      <>
      <div className='row'>
        {this.state.loading && <Placeholder/>}
        {this.state.articles.map((element) => {
          return <div className="col-md-4 my-3 " key={element.title}>
          <Newsitem title ={element.title ? element.title.slice(0,38) : "title is not available"}
           description ={element.description ? element.description.slice(0,99) : "description is not available"}
           urlToImage ={element.urlToImage ? element.urlToImage : "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"} url={element.url}/>
        </div>})}
      </div>
      <div className="container d-flex justify-content-around my-5">
        <button className="btn btn-dark" onClick={this.prevPageHandler} disabled={this.state.pageNumber <=1}>&larr; Previous</button>
        <button className="btn btn-dark" onClick={this.nextPageHandler} disabled={this.state.pageNumber >=Math.ceil(this.state.totalResults/9)}>Next &rarr;</button>
        </div>
      </>
    );
  }
}
