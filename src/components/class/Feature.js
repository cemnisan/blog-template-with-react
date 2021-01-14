import React, { Component } from 'react'

class Feature extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div className="container mt-5">
                {
                    resumeData.feature.map(item =>{
                        let {picture,title,content} = item;
                        return(
                            <div className="cardFeature">
                                <img src={picture} className="cardImg" alt="..."></img>
                                <div className="bodyFeature">
                                    <h1 className="fw-bolder mb-2">{title}</h1>
                                    <p className="mt-3 fs-3">{content}</p>
                                    <hr></hr>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Feature;