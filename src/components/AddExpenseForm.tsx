import {ChangeEvent, useState} from "react";
import {Button, Form} from 'react-bootstrap';

import {Category} from "../types";
import {ExpenseService} from "../services/ExpenseService";

const AddExpenseForm = ({handleClose}: { handleClose?: () => void}) => {

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

    const onAddClick = () => {
        ExpenseService.addExpense({ title, amount, category});
        if (handleClose) handleClose();
    }

    return (
        <Form onSubmit={(e) => e.preventDefault()}>
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
            <Button className='budget-btn' type="submit" onClick={onAddClick}>
                Ajouter
            </Button>
        </Form>
    )
}

export default AddExpenseForm;
