import React, { Component } from 'react';
import ArticleConsumer from '../data/context';


class ArticleDetail extends Component {
    render() {
        return(
            <ArticleConsumer>
                {
                    value =>{
                        const {articleContent,articles,author} = value;
                        
                        return (
                            <div className="container-fluid">
                                <div className="article">
                                    {
                                        articles.map(item =>{
                                            let {title,content,picture} = item;
                                            return(
                                                <>
                                                    <div className="articleTitle mb-4 mt-5">
                                                        <h1 className="text-center fs-1">{title}</h1>
                                                        <p className="text-center fs-4">{content}</p>
                                                    </div>
                                                    <div className="article-img mb-4">
                                                        <img className="img-fluid" src={picture} alt="..."></img>
                                                    </div>
                                                </> 
                                            )
                                        })
                                    }
                                    <hr></hr>
                                    <div className="row">
                                        {
                                            author.map(item=>{
                                                let {fullName,date,picture} = item;
                                                return(
                                                    <>
                                                        <div className="col-md-4">
                                                            <div className="profile d-flex">
                                                                <div className="profilePicture">
                                                                    <img src={picture} alt="..."></img>
                                                                </div>
                                                                <div className="profileTitle mx-3">
                                                                    <h6>{fullName}</h6>
                                                                    <h6 className="justify-content-start">{date}</h6>
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
                                                                        <i class="fab fa-facebook"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                        {
                                            articleContent.map(item=>{
                                                let {
                                                    introContent,title,content,picture,
                                                    pictureFig,contentContinue,
                                                    author,authorPic
                                                } = item;
                                                return(
                                                    <div className="articleContent mt-3">
                                                        <div className="content">
                                                            <p className="mt-4 mb-4">{introContent}</p>
                                                        </div>
                                                        <div className="articlesTitle">
                                                            <h3>{title}</h3>
                                                            <p className ="mt-4 mb-4">{content}</p>
                                                        </div>
                                                        <div className="articlesImage">
                                                            <img className="img-fluid" src={picture} alt="..."></img>
                                                            <figcaption>{pictureFig}</figcaption>
                                                            <p className="mt-5">{contentContinue}</p> 
                                                                
                                                        </div>
                                                        <hr></hr>
                                                        <div className="profile d-flex" id="profileId">
                                                            <div className="profilePicture">
                                                                <img src={authorPic} alt="..."></img>
                                                            </div>
                                                            <div className="profileTitle mx-3">
                                                                <p>{<b>{author}</b>}</p>
                                                                
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
            </ArticleConsumer>
        )                       
    }
}

export default ArticleDetail;
