/*Movie component가 이 정보들을 parent component로 부터 받아옴*/ 
/*React Router사용: npm i react-router-dom@5.3.0 > src:route,components 폴더 생성
  > components로 Movie.js이동 > routes-Home.js생성, Detail.js생성 */
/*'http://localhost:3000/' Home component 보여줌>'http://localhost:3000/movies/123' Detail component를 보여줌 */   
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({id, coverImg, title, summary, genres }) {
  /* a href="/movie"문제점: '페이지 전체'가 다시 실행(새로고침) > 해결: Link to="/movie"  */
  return (  
  <div className={styles.movie}>
    <img src={coverImg} alt={title} className={styles.movie__img}/>
    <div>
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
        <li key={g}>{g}</li>
        ))}  
      </ul>
    </div>
  </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie; 