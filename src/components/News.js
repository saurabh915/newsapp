
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


// ${this.props.apikey}
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    named: PropTypes.string,
    apikey:PropTypes.string
  };

  articles = [
  ];
capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props) {
  
    console.log("super run");
    super(props);
    this.state = {
     
      articles: [], 
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;
  };
  async updateNews(){
    //state is passed as prop
    console.log("updatenews runed");
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    });
    let data = await fetch(url);
    this.props.setProgress(20);
    let parsedData = await data.json();
    this.props.setProgress(40);
    console.log(parsedData); 
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
  console.log("componentdidmount runned");
    this.updateNews();
  }
  // handleNextClick = async () => {
  //   console.log("next is clicked");
   
  //   this.setState({
  //       page: this.state.page+1
  //   });
  //   this.updateNews();
  // };
  // handlePreviousClick = async () => {
  //   console.log("previous is hited");
  //   this.setState({
  //       page: this.state.page-1
  //   });
  //   this.updateNews();
  
  // };
  fetchMoreData = async() => {
    this.setState({
      page:this.state.page +1
      
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData); 
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
      
    })
  };

  render() {
    console.log("render is runned");
    return (
    <>
      <h2 className="text-center">NewsMonkey-Top {this.capitalizeFirstLetter(this.props.category)} Headlines   </h2>
       {this.state.loading && <Spinner className="text-center" />}
          <h3>{this.props.named}</h3>
            
        
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length+1 !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          <div className="row">
          

        
             { this.state.articles.map((element) => {
              
return <div  
className="col-md-4" key={element.url}>
                    <NewsItem
                      title={
                        element.title
                        ? element.title.length > 45
                            ? element.title.slice(0, 45) + "..."
                            : element.title
                          : ""
                      }
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                      description={
                        element.description
                        ? element.description.length > 88
                            ? element.description.slice(0, 88) + "..."
                            : element.description
                            : ""
                          } 
                      imageUrl={
                        element.urlToImage
                        ? element.urlToImage
                        : "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png"
                      }
                      url={element.url ? element.url : "/"}
                      />
                  </div>
                
              })}
              </div>
              </div>
              </InfiniteScroll>
              
         
        
      </>
    )
  }
}

export default News




















































