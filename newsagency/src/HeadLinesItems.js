import React from 'react';
function HeadLinesItems({ title, description, url, urlToImage }) {


    return (

        <div className="news-item">
            <img className="news-img" src={urlToImage}/>
            <h5>
                <a href={url}>{title} </a></h5>
            <p>{description}</p>
        </div>

    );
}

export default HeadLinesItems;
