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
                                                <div class="card border-0 mb-4">
                                                    <img src={picture} class="card-img-top" alt="..."></img>
                                                    <div class="card-body">
                                                        <h6 class="card-text fs-4">{content}</h6>
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