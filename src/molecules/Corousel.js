import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import './Corousel.css';

export default class ControlledCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            urls: [],
            slideIndex: 0
        }
    }

    componentDidMount() {
        this.getSliderImages();
    }

    getSliderImages = () => {
        fetch('http://localhost:8080/api/banners')
            .then(res => res.json())
            .then((res) => {
                this.setUrls(res);
            })
    }

    setUrls(res) {
        const urls = [];
        res.forEach(value => {
            urls.push(`.${value.bannerImageUrl}`);
        });
        this.setState({ urls: urls });
    }

    render() {
        const { urls } = this.state;
        
        let urlsList = [];

        if (urls.length > 0){
            urlsList = urls.map((url, index) => (<img style={{ width: '100%' }} key={index} src={url} alt=""></img>))
        }

        return (

            <Carousel autoplay={false}>

                {urlsList}
 
            </Carousel>

        );
    }
}
