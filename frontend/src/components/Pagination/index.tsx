import {ReactComponent as Arrow } from 'assets/images/arrow.svg'
import { MoviePage } from 'types/movieTypes';
import './styles.css';


type Props = {
  page: MoviePage;
  clickFn: Function;
}

export const Pagination = ({ page, clickFn }: Props) => {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button onClick={() => clickFn(page.number-1)} className="dsmovie-pagination-button" disabled={page.first}>
          <Arrow />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button onClick={() => clickFn(page.number+1)} className="dsmovie-pagination-button" disabled={page.last}>
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
};
