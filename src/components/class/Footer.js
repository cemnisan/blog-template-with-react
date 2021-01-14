import React, { Component } from 'react'
class Footer extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div className="container-fluid" id="footer-cont">
                <footer className="footer">
                   <ul className="d-flex">
                       {
                           resumeData.element.map(item=>{
                               return(
                                    <li>{item}</li>
                                    
                               )
                           })
                       }
                   </ul>
                   {
                       resumeData.footerInfo.map(item=>{
                           let {title,content} = item;
                           return(
                               <div>
                                    <div className="footerTitle d-flex">
                                        <h1>{title}</h1>
                                    </div>
                                    <div className="footerContent d-flex">
                                        <p className="fst-normal">{content}</p>
                                    </div>
                                </div>
                           )
                       })
                   }
                    <div className="socialMedia mt-3">
                        <ul className="d-flex">
                            {
                                resumeData.socialMedia.map(item=>{
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="copyright d-flex">
                        <h6 className="mb-5">© 2012–2020 Nordic Rose Co. All rights reserved.</h6>
                    </div>
                </footer>   
            </div>
        )
    }
}

export default  Footer;