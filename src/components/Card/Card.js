import styles from './Card.scss'

const Card= props => {
    return (
        <li className={styles.card}>{props.title}</li>
    );
};

export default Card