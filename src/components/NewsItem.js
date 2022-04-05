import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageurl, newsurl, author, date, source} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: '18rem'}}>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}<span className="visually-hidden">unread messages</span></span>
                    <img src={imageurl?imageurl:"https://deadline.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-02-at-9.36.12-PM-e1648962987666.png?w=891"} className="card-img-top" alt="..."/>
                    {/* <img src={imageurl} className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toLocaleTimeString()}</small></p>
                            <a href={newsurl} className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;