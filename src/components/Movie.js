import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, coverImg, title, summary, genres }) {
    return <div>
        <img src={coverImg} alt={title} />
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
        </ul>
    </div >;
}
Movie.protoTypes = {
    coverImg: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    generes: PropTypes.array,
}
export default Movie;