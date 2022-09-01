import React, { Component } from 'react';
import NewsSingle from './NewsSingle';
import Error from './Error';

const API = process.env.REACT_APP_NEWS_APIKEY;
// import * as dotenv from ".env";

// require("dotenv").config();
// console.log(process.env.REACT_APP_NEWS_APIKEY);

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            error: false,
        };
    }

    componentDidMount() {
        // const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=916d3a727ad84e669e39153bf315ff77`;
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=${API}`;

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => {
                this.setState({
                    error: true
                })
            });
    }

    renderItems() {
        if (!this.state.error) {
            return this.state.news.map((item) => (
                <NewsSingle key={item.url} item={item} />
            ));
        } else {
            return <Error />
        }
    }

    render() {
        return (
            <div className='row'>
                {this.renderItems()}
            </div>
        );
    }
}

export default News;