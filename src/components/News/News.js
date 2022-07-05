import React, { Component } from 'react';
import NewsSingle from './NewsSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=916d3a727ad84e669e39153bf315ff77';

        fetch(url) 
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => console.log(error));
    }

    renderItems() {
        return this.state.news.map((item) => (
            <NewsSingle key={item.url} item={item} />
        ));
    }

    render() {
        return(
            <ul>
                {this.renderItems()}
            </ul>
        );
    }
}

export default News;