import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import HeadLinesItems from "./HeadLinesItems";
import {Row, Col, Container, Image } from "react-bootstrap";

function All() {
    const [articles1, setArticles1] = useState([])
    const [articles2, setArticles2] = useState([])
    const [articles3, setArticles3] = useState([])
    // const [term, setTerm] = useState('us')

    useEffect(() => {
        const getArticles1 = async () => {
            const res1 = await Axios.get(`https://newsapi.org/v2/top-headlines?country=sg&apiKey=824218ff88904c148794c8fad42ab04a`)
            setArticles1(res1.data.articles.splice(0,4))
            console.log(res1)
        }
        const getArticles2 = async () => {
            const res2 = await Axios.get(`https://newsapi.org/v2/top-headlines?country=my&apiKey=824218ff88904c148794c8fad42ab04a`)
            setArticles2(res2.data.articles.splice(0,4))
            console.log(res2)
        }
        const getArticles3 = async () => {
            const res3 = await Axios.get(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=824218ff88904c148794c8fad42ab04a`)
            setArticles3(res3.data.articles.splice(0,4))
            console.log(res3)
        }
        getArticles1()
        getArticles2()
        getArticles3()
    }, []);


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
                <h1 className="bg-info"> You are currently viewing   <Image className="icon-img" src="https://cdn.iconscout.com/icon/free/png-256/newspaper-284-542534.png " />   About Everything. Enjoy! :)
                </h1>

                <h1 className="bg-info">This Section is About <Image className="icon-img" src="https://www.countryflags.com/wp-content/uploads/singapore-flag-png-xl.png " /> </h1>
                <Row>
                    {articles1.map(({title, url, urlToImage}) => (
                        <Col md={3}>
                            <HeadLinesItems
                                title={title}
                                url={url}
                                urlToImage={urlToImage}
                            />
                        </Col>
                    ))}
                </Row>


                <h1 className="bg-info">This Section is About <Image className="icon-img" src="https://www.countryflags.com/wp-content/uploads/malaysia-flag-png-xl.png" /> </h1>
                <Row>
                    {articles2.map(({title, url, urlToImage}) => (
                        <Col md={3}>
                            <HeadLinesItems
                                title={title}
                                url={url}
                                urlToImage={urlToImage}
                            />
                        </Col>
                    ))}
                </Row>

                <h1 className="bg-info">This Section is About <Image className="icon-img" src="https://www.countryflags.com/wp-content/uploads/nigeria-flag-png-xl.png" /></h1>
                <Row>
                {articles3.map(({title, url, urlToImage}) => (
                    <Col md={3}>
                    <HeadLinesItems
                        title={title}
                        url={url}
                        urlToImage={urlToImage}
                    />
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    );
};

export default All;
