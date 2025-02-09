import PageTitle from '../PageTitle/PageTitle';
import { getFavoriteCards } from '../../redux/cardsRedux';
import { useSelector } from 'react-redux';
import Card from '../Card/Card'
import styles from './Favorite.module.scss';

const Favorite = () => {

    const favoriteCards=useSelector(state=>getFavoriteCards(state));
    //console.log(favoriteCards);

    return (
        <div>
            <PageTitle>Favorite</PageTitle>
            <ul className={styles.favorite}>
                {favoriteCards.length===0 ? <p>No Favorite cards available</p>:
                favoriteCards.map(card =>
                <Card
                key={card.id}
                id={card.id}
                title={card.title}
                isFavorite={card.isFavorite}/> )}
            </ul>
        </div>
    )
}

export default Favorite;