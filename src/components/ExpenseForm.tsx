import { ChangeEvent, useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { getDatabase, ref, push } from 'firebase/database';

// Import firebase configuration from firebase.ts file
import firebaseApp from '../firebase';
import {Category} from "../types";

const ExpenseForm = () => {
    const db = getDatabase(firebaseApp);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));
    };

    const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    };

    const addTodo = () => {
        const expenseRef = ref(db, '/expenses');
        const expense = {
            title,
            amount,
            category,
            dateTimestamp: Date.now()
        };
        push(expenseRef, expense);
    };

    return (
        <Form>
            <Form.Label>Titre</Form.Label>
            <Form.Control onChange={handleTitleChange} />
            <Form.Label>Montant</Form.Label>
            <Form.Control type='number' step={0.01} onChange={handleAmountChange} />
            <Form.Label>Catégorie</Form.Label>
            <Form.Select onChange={handleCategoryChange}>
                <option></option>
                {Object.keys(Category).map((category) => {
                    return <option key={category}>{category}</option>
                })}
            </Form.Select>
            <Button className='budget-btn' type="submit" onClick={addTodo}>
                Ajouter
            </Button>
        </Form>
    )
}

export default ExpenseForm;
