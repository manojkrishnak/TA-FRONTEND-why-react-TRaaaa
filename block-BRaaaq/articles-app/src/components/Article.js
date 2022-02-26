import PropTypes from 'prop-types';
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

Article.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string
}
export default Article;