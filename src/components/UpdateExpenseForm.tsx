import {ChangeEvent, useState} from "react";
import {Button, Form} from 'react-bootstrap';

import {Category, Expense} from "../types";
import {ExpenseService} from "../services/ExpenseService";

type UpdateExpenseFormProps = {
    expense: Expense;
    handleClose?: () => void
}

const UpdateExpenseForm = ({expense, handleClose}: UpdateExpenseFormProps) => {

    const [title, setTitle] = useState(expense.title);
    const [amount, setAmount] = useState(expense.amount);
    const [category, setCategory] = useState<string>(expense.category);

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));
    };

    const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    };

    const onUpdateClick = () => {
        ExpenseService.updateExpense({ title, amount, category, key: expense.key});
        if (handleClose) handleClose();
    }

    const onDeleteClick = () => {
        ExpenseService.removeExpense(expense.key)
        if (handleClose) handleClose();
    }

    return (
        <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Label>Titre</Form.Label>
            <Form.Control onChange={handleTitleChange} defaultValue={title} />
            <Form.Label>Montant</Form.Label>
            <Form.Control type='number' step={0.01} onChange={handleAmountChange} defaultValue={amount} />
            <Form.Label>Catégorie</Form.Label>
            <Form.Select onChange={handleCategoryChange} defaultValue={category}>
                <option></option>
                {Object.keys(Category).map((category) => {
                    return <option key={category}>{category}</option>
                })}
            </Form.Select>
            <Button className='budget-btn' type="submit" onClick={onUpdateClick}>
                Modifier
            </Button>
            <Button className="budget-del-btn btn-danger" onClick={onDeleteClick}>
                Supprimer
            </Button>
        </Form>
    )
}

export default UpdateExpenseForm;
