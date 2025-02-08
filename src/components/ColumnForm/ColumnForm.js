import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';
import {useParams} from 'react-router';

const ColumnForm = props => {

    const {listId}=useParams();

    const dispatch=useDispatch();
    const [title,setTitle]=useState('');
    const [icon, setIcon]=useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({title,icon,listId}));
        setTitle('');
        setIcon('');
    };
	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span>Title: </span>
            <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            <span>Icon: </span>
            <TextInput type="text" value={icon} onChange={e => setIcon(e.target.value)}/>
            <Button>
                <span>Add Column</span>
            </Button>
        </form>
	);
};

export default ColumnForm;