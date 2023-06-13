import {Badge, Button, Card} from "react-bootstrap";
import { Expense } from "../types";
import { PlusLg } from 'react-bootstrap-icons';

const ExpenseCard = ({ expense }: { expense?: Expense}) => {
    if (expense) {
        return (
            <Card className='expense'>
                <Card.Header>
                    <div className='expense-header'>
                        {expense.title}
                        <Button size='sm'>Modifier</Button>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{expense.amount}€</Card.Title>
                    <Card.Text>{expense.date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long'})}</Card.Text>
                    <Badge>{expense.category}</Badge>
                </Card.Body>
            </Card>
        )
    }
    return (
        <Card className='expense' onClick={(e) => console.log(e)}>
            <Card.Header>
                <div className='expense-header'>
                    Nouvelle dépense
                </div>
            </Card.Header>
            <Card.Body className='new-expense-card'>
                <PlusLg size={80} color='#0d6efd' />
            </Card.Body>
        </Card>
    )
}

export default ExpenseCard;