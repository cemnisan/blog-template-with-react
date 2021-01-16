import React, { Component } from 'react';
import axios from 'axios';

const ArticleContext = React.createContext();

// Provider, Consumer
// Sağlayıcı => Tüketici

export class ArticleProvider extends Component {
    state = {
        "articleContent":[],
        "articles":[],
        "author":[],
        
    }

    componentDidMount = async () =>{
        const response = await axios.get("http://localhost:3000/article")
        console.log(response.data[0])
        this.setState({
            articleContent:response.data[0],
            articles:response.data[1],
            author:response.data[2]
        })
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