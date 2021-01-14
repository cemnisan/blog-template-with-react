import React, { Component } from 'react'

class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div className="header">
                <div className="about">
                    <div className="container">
                        <div clas="aboutInfo">
                            <div className="aboutVersion">
                                <br></br>
                                <h6>Version 1.0 (Mar 25, 2020)</h6>
                            </div>
                            <div className="aboutTitle">
                                <h1 className="">About me</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="aboutContent">
                        {
                            resumeData.about.map(item=>{
                                let {title,content,sideTitle,sideContent,sideContentTwo} = item;
                                return(
                                    <div>
                                        <div className="title">
                                            <h1>{title}</h1>
                                            <div className="vr">
                                                <p>{content}</p> 
                                            </div>
                                        </div>
                                        <div className="title">
                                            <div className="vr">
                                                <h2>{sideTitle}</h2>
                                                <p>{sideContent}</p>
                                                <p>{sideContentTwo}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default About;