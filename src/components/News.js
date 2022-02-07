import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class news extends Component {

    static defaultProps={
        country:"in",
        pageSize:8,
        category:"general"
    }
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
    // articles = []

    constructor() {
        super();
        // console.log("hi i'm a constructor");
        this.state = {
            // articles: this.articles,
            articles: [],
            page:1,
            loading: false    
        }
    }

    // async updateNews(){
    //     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62c6a3d3505843d7863e8440179f3dee&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    //     this.setState({loading:true})

    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         articles: parsedData.articles,
    //         loading: false,
    //         country: this.state.country,
    //         totalResults: parsedData.totalResults
    //     })
    // }

    async componentDidMount() {
        // let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=62c6a3d3505843d7863e8440179f3dee&page=1&pagesize=${this.props.pageSize}`;
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62c6a3d3505843d7863e8440179f3dee&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false,
            country: this.state.country,
            totalResults: parsedData.totalResults
        })
        // this.updateNews();
    }  
    handlePrev = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62c6a3d3505843d7863e8440179f3dee&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            country: this.state.country,
            loading: false
        })
        // this.setState({ page: this.state.page-1});
        // this.updateNews();

    }
    handleNext = async () => {
        if(this.state.page+1<=Math.ceil(this.state.totalResults/this.props.pageSize))  //this.state.totalResults/20 gives the no. of pages
        {
         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62c6a3d3505843d7863e8440179f3dee&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            country: this.state.country,
            loading: false
        })
        // this.setState({ page: this.state.page+1});
        // this.updateNews();
    }
}
    
    
    render() {
    //     const { loading } = this.state;
    //     if (!loading)
    //     return <div>
    //            <div className="spinner-grow text-center" role="status">
    //    <span className="sr-only"></span>
    //   </div> 
    //   </div>;

        return <div className='container my-3'>
            <h2 className='text-center ' style={{margin:'25px 0px'}}>Khabri Bhai- Top Headlines</h2>
            <div className="loader text-center">{this.state.loading && <Spinner/>}</div>
            <div className="row">
                {!this.state.loading && this.state.articles.map((element) => {
                    return <div className="col-md-3" key={element.url}>  {/*key is a unique identifier us selected element ko pehchane k lie*/}
                        <NewsItem imageUrl={element.urlToImage} title={element.title ? element.title : "Read this interesting News"} description={element.description ? element.description.slice(0, 80) : "Click Read More to read full News"} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
                    </div>
                })}
            </div>
            <div className="buttons my-3  d-flex justify-content-around">
                <button disabled={this.state.page<=1} type="button ml-2" className="btn btn-dark" onClick={this.handlePrev}> &larr; Previous</button>
                <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button mr-2" className="btn btn-dark" onClick={this.handleNext}> Next &rarr;</button>
            </div>
        </div>;
    }
}

export default news;







// componentDidMount(){
//     fetch(
//         "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=62c6a3d3505843d7863e8440179f3dee")
//                     .then((res) =>{res.json()})
//                     .then((json) => {
//                         this.setState({
//                             articles: Array.from(json),
//                             loading: true
//                         })
//                     })
// }



// {
    //     "source": {
        //         "id": "wired",
//         "name": "Wired"
//     },
//     "author": "Gian M. Volpicelli",
//     "title": "As Kazakhstan Descends into Chaos, Crypto Miners Are at a Loss",
//     "description": "The central Asian country became No. 2 in the world for Bitcoin mining. But political turmoil and power cuts have hit hard, and the future looks bleak.",
//     "url": "https://www.wired.com/story/kazakhstan-cryptocurrency-mining-unrest-energy/",
//     "urlToImage": "https://media.wired.com/photos/61de2d453e654a13e9a16ef0/191:100/w_1280,c_limit/Business_Kazakhstan-2HDE52K.jpg",
//     "publishedAt": "2022-01-12T12:00:00Z",
//     "content": "When Denis Rusinovich set up cryptocurrency mining company Maveric Group in Kazakhstan in 2017, he thought he had hit the jackpot. Next door to China and Russia, the country had everything a Bitcoin … [+4140 chars]"
// },
// {
//     "source": {
//         "id": "the-verge",
//         "name": "The Verge"
//     },
//     "author": "Mitchell Clark",
//     "title": "The International Monetary Fund tells El Salvador it shouldn’t use Bitcoin as legal tender",
//     "description": "The International Monetary Fund’s executive directors have recommended to El Salvador that it should narrow the scope of its Bitcoin law, making it so that the cryptocurrency is no longer legal tender in the country.",
//     "url": "https://www.theverge.com/2022/1/25/22901374/el-salvador-bitcoin-international-monetary-fund-crypto",
//     "urlToImage": "https://cdn.vox-cdn.com/thumbor/altkKN7BnaLUpbAVPi6j4xmC2Ug=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13546110/acastro_181126_1777_bitcoin_0001.jpg",
//     "publishedAt": "2022-01-25T22:11:14Z",
//     "content": "El Salvador introduced Bitcoin as a legal tender alongside the US dollar in 2021. | Illustration by Alex Castro / The Verge\r\n\n \n\n The International Monetary Fund’s executive board has recommended El … [+2691 chars]"
// },
// {
//     "source": {
//         "id": "the-verge",
//         "name": "The Verge"
//     },
//     "author": "Jon Porter",
//     "title": "Jack Dorsey’s Block is working to make Bitcoin mining easier",
//     "description": "Block is working on building an “open Bitcoin mining system,” its CEO Jack Dorsey has announced. The company’s goals for the system are for it to be easily available, reliable, and relatively power efficient.",
//     "url": "https://www.theverge.com/2022/1/14/22883500/jack-dorsey-block-bitcoin-mining-system-open-source-mainstream",
//     "urlToImage": "https://cdn.vox-cdn.com/thumbor/NE548fVufAlHoBliurOdnG-lfuw=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23168502/1321753348.jpg",
//     "publishedAt": "2022-01-14T13:46:28Z",
//     "content": "Were officially building an open Bitcoin mining system\r\nPhoto by Joe Raedle/Getty Images\r\nBlock, the payment company formerly known as Square, is working on building an open Bitcoin mining system, it… [+2078 chars]"
// },
// {
//     "source": {
//         "id": "the-verge",
//         "name": "The Verge"
//     },
//     "author": "Corin Faife",
//     "title": "DeepDotWeb operator sentenced to eight years for money laundering",
//     "description": "The operator of DeepDotWeb, a site that indexed dark net marketplaces accessible through Tor browser, was sentenced to eight years after pleading guilty to money laundering using Bitcoin.",
//     "url": "https://www.theverge.com/2022/1/27/22904803/deepdotweb-operator-sentenced-money-laundering-bitcoin-darknet-fbi",
//     "urlToImage": "https://cdn.vox-cdn.com/thumbor/mde_l3lUC4muDPEFG7LYrUz0O3g=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8921023/acastro_bitcoin_2.jpg",
//     "publishedAt": "2022-01-27T18:16:57Z",
//     "content": "Israeli national Tal Prihar pled guilty to routing money from kickbacks through Bitcoin and shell companies \r\nIllustration by Alex Castro / The Verge\r\nIn the culmination of a two-year legal process, … [+1448 chars]"
// },
// {
//     "source": {
//         "id": "the-verge",
//         "name": "The Verge"
//     },
//     "author": "Corin Faife",
//     "title": "Crypto.com admits over $30 million stolen by hackers",
//     "description": "Cryptocurrency exchange Crypto.com has said that $15 million in ethereum and $18 million in bitcoin were stolen by hackers in a security breach",
//     "url": "https://www.theverge.com/2022/1/20/22892958/crypto-com-exchange-hack-bitcoin-ethereum-security",
//     "urlToImage": "https://cdn.vox-cdn.com/thumbor/mde_l3lUC4muDPEFG7LYrUz0O3g=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/8921023/acastro_bitcoin_2.jpg",
//     "publishedAt": "2022-01-20T13:23:31Z",
//     "content": "In a new blog post the company said that 4,836 ETH and 443 bitcoin were taken\r\nIllustration by Alex Castro / The Verge\r\nIn a blog post published in the early hours of Thursday morning, cryptocurrency… [+2004 chars]"
// }