import { ReactComponent as StarFull } from 'assets/images/star-full.svg';
import { ReactComponent as StarHalf } from 'assets/images/star-half.svg';
import { ReactComponent as StarEmpty } from 'assets/images/star-empty.svg';
import './styles.css';


type Props = {
    score: number;
}

type StarProps = {
    fill: number;
}

function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];
  
    const integerPart = Math.floor(score);
  
    for (let i = 0; i < integerPart; i++) {
      fills[i] = 1;
    }
  
    const diff = score - integerPart;
    if (diff > 0) {
      fills[integerPart] = 0.5;
    }
  
    return fills;
  }

const Star = ({ fill }: StarProps) => {
    switch(fill) {
        case 0:
            return <StarEmpty />
        case 0.5:
            return <StarHalf />
        case 1:
            return <StarFull />

        default: 
            return <StarHalf />
    }
}


export const MovieStars = ({ score }: Props) => {

    const fills = getFills(score);

   

    return(
        <div className="dsmovie-stars-container">
            {
            fills.map((element, index ) => (
                <Star fill={element} key={index}/>
            ))
            }
        </div>
    );
}