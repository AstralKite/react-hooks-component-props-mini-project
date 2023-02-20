import React from "react";
import Article from "../components/Article.js";

function ArticleList(props){
   let num = 0;

    const articleItems = props.posts.map( function(data){
        return (
                <Article key={num++} id={data.id} title={data.title} date={data.date} preview={data.preview}/>
        )
    })

    return(
        <main>
            {articleItems}
        </main> 
    )
}


export default ArticleList;