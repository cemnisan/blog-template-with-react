import React, { Component } from 'react';
import bgPicture from '../image/8.jpg';
import profilePicture from '../image/9.png';
import articlePicture from '../image/10.png';

class ArticleDetail extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="article">
                    <div className="articleTitle mb-4 mt-5">
                        <h1 className="text-center fs-1">A few words about this blog platform, Ghost, and how this site was made</h1>
                        <p className="text-center fs-4">Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
                    </div>
                    <div className="article-img mb-4">
                        <img className="img-fluid" src={bgPicture} alt="..."></img>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile d-flex">
                                <div className="profilePicture">
                                    <img src={profilePicture} alt="..."></img>
                                </div>
                                <div className="profileTitle mx-3">
                                    <h6>MIKA MATIKAINEN</h6>
                                    <h6 className="justify-content-start">Apr 15, 2020 · 4 min read</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="profileSocial">
                                <div className="socialMedia d-flex">
                                    <div className="facebook">
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                    <div className="twitter">
                                        <i class="fab fa-facebook-f"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="articleContent mt-3">
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.</p>
                                <p className="mt-4 mb-4"> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.</p>
                            </div>
                            <div className="articlesTitle">
                                <h3>Next on the pipeline</h3>
                                <p>Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                                <p className ="mt-4 mb-4">Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.</p>
                            </div>
                            <div className="articlesImage">
                                <img className="img-fluid" src={articlePicture} alt="..."></img>
                                <figcaption>Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height.</figcaption>
                                <p className="mt-5">Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. </p> 
                                <p>In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.</p>
                                <p className="mt-5">Thanks for reading,<br></br>Mika</p>
                            </div>
                            <hr></hr>
                        </div>
                        <div className="col-md-4">
                            <div className="profile d-flex">
                                <div className="profilePicture">
                                    <img src={profilePicture} alt="..."></img>
                                </div>
                                <div className="profileTitle mx-3">
                                    <h6>Mika Matikainen is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.</h6>
                                    <h6 className="justify-content-start">Apr 15, 2020 · 4 min read</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="whatToNext d-flex">
                    <h1>What to read next</h1>
                    
                </div>
            </div>
        )
    }
}

export default ArticleDetail;
