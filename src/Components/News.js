import React, { Component } from 'react'
import Loading from './Loading';
import NewsItems from './NewsItems'

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            pagesize: 21,
            Loading: true
        }
    }

    async updateNews() {
        console.log("caaa");
        this.props.setProgress(10)
        this.state.Loading = true
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=1f001c7d942f44fbb001d27f5cabd339&page=${this.state.page}&pagesize=${this.state.pagesize}`
        let data = await fetch(url);
        this.props.setProgress(50)
        let data1 = await data.json();
        this.setState({
            articles: data1.articles, totalResults: data1.totalResults
        })
        this.state.Loading = false
        this.props.setProgress(100)
    }

    async componentDidMount() {
        this.updateNews()
    }
n
    previousPage = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.updateNews()
    }

    nextPage = async () => {
        this.setState({
            page: this.state.page + 1
        })
        this.updateNews()
    }



    render() {
        function capitalizeFirstLatter1(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        return (
            <>
                <div className='container'>
                    <h1 className='text-center m-3'>News App - {capitalizeFirstLatter1(this.props.category)}</h1>
                    <div className='d-flex justify-content-between m-2'>
                        <button type="button" disabled={this.state.page <= 1} onClick={this.previousPage} className="btn btn-primary">Previous</button>
                        <button type="button" disabled={this.state.page >= Math.ceil(this.state.totalResults / this.state.pagesize)} onClick={this.nextPage} className="btn btn-primary">Next</button>
                    </div>
                    {this.state.Loading && <Loading />}
                    {!this.state.Loading && <div className='row'>
                        {this.state.articles.map((element) => {
                            return <div className='col-4' key={element.url}>
                                <NewsItems title={element.title} url={element.url} image={element.urlToImage} desc={element.description} />
                            </div>
                        })}
                    </div>}
                    <div className='d-flex justify-content-between m-2'>
                        <button type="button" disabled={this.state.page <= 1} onClick={this.previousPage} className="btn btn-primary">Previous</button>
                        <button type="button" disabled={this.state.page >= Math.ceil(this.state.totalResults / this.state.pagesize)} onClick={this.nextPage} className="btn btn-primary">Next</button>
                    </div>
                </div>
            </>
        )
    }
}
