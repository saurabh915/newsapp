import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    //these props will be received from news
      let {title,description,imageUrl,url,author,date,source}=this.props;
    return (
      <div className = "my-3">
        <div className="card" /*style={{width: "18rem"}}*/ > 
        <div style={{
          display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:'0'
        }}>

        <span className='badge rounded-pill bg-success' style={{
          left:'90%',
          zIndex: '1'
        }}>{source}</span> 
        </div>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className='text-muted' >published by {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
    
    <a rel="noreferrer" href={url} target = "_blank" className="btn btn-sm btn-dark">VIEW</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
