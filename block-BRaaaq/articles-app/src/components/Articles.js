import data from "../data";
import Article from "./Article"

function Articles() {
    console.log(data)
    return (
        <>
            <h2 className="article-heading">Articles</h2>
            {data.map((data, i) => <Article key={i} articleInfo={data} />)}
        </>
    )
}

export default Articles;