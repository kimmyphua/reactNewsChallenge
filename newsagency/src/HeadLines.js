import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Axios from 'axios';
import HeadLinesItems from "./HeadLinesItems";
import Navigation from "./Navigation";
import {Card, Row, Col, Container, NavDropdown, Navbar, Nav, Form, Button, Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function HeadLines() {
    let {term} = useParams();
    const [articles, setArticles] = useState([]);
    // const [term, setTerm] = useState('us')

    useEffect(() => {
        const getArticles = async () => {
            const res = await Axios.get(`https://newsapi.org/v2/top-headlines?country=${term}&apiKey=824218ff88904c148794c8fad42ab04a`)
            setArticles(res.data.articles)
            console.log(res)
        }
        getArticles()
    }, [term]);


    // function handleSg() {
    //    setTerm("sg")
    // }
    //
    // function handleMy() {
    //     setTerm("my")
    // }
    //
    // function handleNg() {
    //     setTerm("ng")
    // }

    return (
       <div>
           <Container>
            <h1 className= "bg-info"> You are currently viewing <Image className="icon-img" src="https://cdn.iconscout.com/icon/free/png-256/newspaper-284-542534.png " />  about  <strong> {term} </strong> ! Enjoy :) </h1>
           <h5 className="newContainer">
           {articles.map(({title, description, url, urlToImage}) => (
                <HeadLinesItems
                title={title}
                description={description}
                url={url}
                urlToImage={urlToImage}
                />
                ))}
               </h5>
           </Container>
</div>
);
};

export default HeadLines;
