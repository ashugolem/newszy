import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NewsCard extends Component {
    
    render(props) {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="card my-3 mx-2" style={{borderRadius:"30px"}} >
        <img className="card-img-top" style={{height:"180px"}} src={imageUrl?imageUrl:"https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=2000"} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}...
          </p>
          <Link to={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read more
          </Link>
        </div>
      </div>
    );
  }
}
export default NewsCard;
