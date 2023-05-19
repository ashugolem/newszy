import React, { Component } from 'react'
import NewsCard from './NewsCard'
import Footer from './Footer'
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';

export class Headlines extends Component {
    
    constructor(){
        super();
        this.state ={
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=72902c552850479d89ebdd1c12e13db7&page=${this.state.page}&pageSize=9`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults})
    }
    
    handleNext = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=72902c552850479d89ebdd1c12e13db7&page=${this.state.page+1}&pageSize=9`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page+1,
            articles: parsedData.articles
            });
    }
    handlePrev = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=72902c552850479d89ebdd1c12e13db7&page=${this.state.page-1}&pageSize=9`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles
        });
    }
  render() {
    document.title = 'NewsZy - Headlines'
    return (
        <>
        <div className=" container" style={{marginTop:"6rem"}} >
        <h1 className="text-center display-6 fw-bold mb-5"><span className="underline pb-1"><strong>NewsZy </strong></span>  - Headlines</h1>
            <div className="d-flex justify-content-center">
                <div className="newsContainer row d-flex justify-content-between" style={{width:getSpaceUntilMaxLength}}>
                    {this.state.articles.map((element)=>{
                    return  <div className="col-md-3 mx-3 py-2" key={element.url}>
                                <NewsCard  title={element.title? (element.title.length<35? element.title.slice(0,35) :element.title.slice(0,35)+'...') :"null"} description={element.description?element.description.slice(0,60):"null"} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                    })}                  
                </div>
            </div>
        </div>
        <div className="container d-flex justify-content-between p-5">
            <button 
                type='button' 
                disabled={this.state.page<=1} 
                style={{background:"#24285b", color:"white", borderRadius:"10px"}} 
                className="btn "
                onClick={this.handlePrev}>
                    &larr; Prev
            </button>

            <button 
                type='button' 
                style={{background:"#24285b", color:"white", borderRadius:"10px"}} 
                className="btn "
                disabled={Math.ceil(this.state.totalResults/9)<this.state.page+1}
                onClick={this.handleNext}>
                    Next &rarr;
            </button>
        </div>
            <Footer />
        </>
    )
  }
}

export default Headlines