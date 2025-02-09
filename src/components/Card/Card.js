import styles from './Card.module.scss'
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';

const Card= props => {

    const dispatch = useDispatch();
    console.log(props);
    console.log(props.title);

    const handleClick =() =>
        dispatch(toggleCardFavorite(props.id));
    //console.log(props.isFavorite);

    return (
        <li className={styles.card}>{props.title}
            <i className={clsx("fa fa-star-o", props.isFavorite && styles.active)}
            onClick={handleClick}
            ></i>
        </li>
    );
};

export default Card