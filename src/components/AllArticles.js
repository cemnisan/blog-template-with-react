import React, { Component } from 'react'

class AllArticles extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div className="container">
                <div className="articles mt-5 mb-5">
                    <h2>All articles</h2>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="row d-flex">
                                {
                                    resumeData.allArticles.map(item =>{
                                        let {picture,content} = item;
                                        return(
                                            <div className="col-md-6">
                                                <div className="card border-0 mb-4">
                                                    <img src={picture} className="card-img-top" alt="..."></img>
                                                    <div className="card-body">
                                                        <h6 className="card-text fs-4">{content}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default AllArticles;