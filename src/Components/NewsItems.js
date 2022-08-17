import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let {image,title,desc,url} = this.props;
        return (
            <>
                <div className="card m-4">
                    <img src={image?image:"https://img.etimg.com/thumb/msid-93401230,width-1070,height-580,imgsize-769730,overlay-economictimes/photo.jpg"} className="card-img-top" alt=".."/>
                        <div className="card-body">
                            <h5 className="card-title">{title?title.slice(0,40):""} ...</h5>
                            <p className="card-text">{desc?desc.slice(0,80):""} ...</p>
                            <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more..</a>
                        </div>
                </div>
            </>
        )
    }
}
