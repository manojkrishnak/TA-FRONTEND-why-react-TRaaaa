function Article(props) {
            return (
                <>
                    <article className="article">
                        <h2><span className="bold">Title: </span> {props.articleInfo.title}</h2>
                        <p><span className="bold">Author: </span> {props.articleInfo.author}</p>
                        <p><span className="bold">Description: </span>{props.articleInfo.description}</p>
                    </article>
                </>
            )
        }

export default Article;