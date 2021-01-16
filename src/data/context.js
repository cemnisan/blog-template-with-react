import React, { Component } from 'react';
import bgPicture from '../image/8.jpg'
import profilePicture from '../image/9.png';
import articlePicture from '../image/10.png';

const ArticleContext = React.createContext();

// Provider, Consumer
// Sağlayıcı => Tüketici

export class ArticleProvider extends Component {
    state = {
        "articleContent":[
            {
                "id":1,
                "introContent":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.<br></br> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.",
                "title":"Next on the pipeline",
                "content":"Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.",
                "picture":articlePicture,
                "pictureFig":"Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height.",
                "contentContinue":"Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.",
                "author":"Mika Matikainen is a Design Founder & Advisor, Berlin School of Creative Leadership Executive MBA participant, Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.",
                "authorPic":profilePicture,
            }
        ],
        "articles":[
            {
                "title":"A few words about this blog platform, Ghost, and how this site was made",
                "content":"Why Ghost (& Figma) instead of Medium, WordPress or other options?",
                "picture":bgPicture
            }
        ],
        "author":[
            {
                "fullName":"MIKA MATIKAINEN",
                "date":"Apr 15, 2020 · 4 min read",
                "picture":profilePicture
            }
        ]
    }
    render(){
        return(
            <ArticleContext.Provider value={this.state}>
                {this.props.children}
            </ArticleContext.Provider>
        )
    }
}

// State'i kullanmak için Consumer oluşturuldu.

const ArticleConsumer = ArticleContext.Consumer;

export default ArticleConsumer;