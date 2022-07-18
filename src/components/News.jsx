import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export default class News extends Component {
    static defaultProps = {
        country:"in",
        pageSize: 6,
        category: "general"
    }
    static propTypes={
        name:PropTypes.string,
        page:PropTypes.number,
        category:PropTypes.string
    }
    capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    articles=[];
    constructor(props){
        super(props);
        this.state={
            articles: [],
            loading: true,
            page: 0,
            totalResults:0
        };
        document.title="MyNews - "+ this.capitalizeFirstLetter(this.props.category);
    }
    fetchMoreData=async ()=>{
        console.log("Fetch More")
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page:this.state.page+1,
            articles : this.state.articles.concat(parsedData.articles),
            totalResults:parsedData.totalResults
        })
    }
    async componentDidMount(){
        console.log("component Did Mount")
        this.props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(80);
        this.setState({articles : parsedData.articles,
            totalarticles:parsedData.totalResults,
            loading:false,
            page:this.state.page+1});
        this.props.setProgress(100);
    }
  render() {
    return (
        <>
            <h1 className="text-center" style={{margin:"40px",marginTop:"100px"}}>MyNews- Top Headlines from {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length!==this.state.totalResults} loader={<Spinner/>}>
                <div className="container">
                <div className="row">
                    {this.state.articles.map((ele)=>{
                    return(
                        <div className="col-lg-4 my-3" key={ele.url?ele.url:"/"}>
                            <NewsItem title={ele.title?ele.title:" "} description={ele.description?ele.description.slice(0,90):" "}
                            img_url={ele.urlToImage?ele.urlToImage:"https://c.ndtvimg.com/2022-06/jlikupmg_virat-kohli-806_625x300_22_June_22.jpg"} 
                            newsUrl={ele.url?ele.url:"/"} author={ele.author?ele.author:"Anonymous"} date={ele.publishedAt} source={ele.source.name}/>    
                        </div>)
                    })}
                </div>
                </div>
            </InfiniteScroll>
      </>
    )
  }
}
