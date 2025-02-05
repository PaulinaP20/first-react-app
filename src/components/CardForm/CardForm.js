import styles from './CardForm.module.scss';
import TextInput from '../TextInput/TextInput'
import {useState} from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';


const CardForm =props => {

    const dispatch=useDispatch();
    const [title, setTitle]= useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type:'ADD_CARD',payload:{title, columnId:props.columnId}});
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.CardForm}>
            <TextInput type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
            <Button>Add card</Button>
        </form>
    )
}

export default CardForm