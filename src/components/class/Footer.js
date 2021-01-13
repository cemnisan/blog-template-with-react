import React, { Component } from 'react'
class Footer extends Component {
    render() {
        return (
            <div className="container-fluid">
                <footer className="footer">
                   <ul className="d-flex">
                       <li>Digital product design</li>
                       <li>Remote work</li>
                       <li>UX design</li>
                       <li>Distributed teams</li>
                       <li>Creativity</li>
                       <li>Strategy</li>
                       <li>Suspense</li>
                       <li>Growth</li>
                   </ul>
                    <div className="footerTitle d-flex">
                        <h1>NORDIC ROSE</h1>
                    </div>
                    <div className="footerContent d-flex">
                        <p className="fst-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.</p>
                    </div>
                    <div className="socialMedia mt-3">
                        <ul className="d-flex">
                            <li>Twitter</li>
                            <li>Linkedln</li>
                            <li>RSS</li>
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