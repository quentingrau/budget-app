import {Badge, Button, Card} from "react-bootstrap";
import ModalContainer from './ModalContainer';
import { Expense } from "../types";
import AddExpenseForm from "./AddExpenseForm";
import UpdateExpenseForm from "./UpdateExpenseForm";

const ExpenseCard = ({ expense }: { expense?: Expense}) => {
    if (expense) {
        return (
            <Card className='expense'>
                <ModalContainer body={<UpdateExpenseForm expense={expense} />} title="Modifier une dépense">
                    <Card.Body>
                        <Card.Title className="expense-card-title">
                            <div>
                                <span className="expense-amount">{expense.amount}€</span><span> - {expense.title}</span>
                            </div>
                            <Badge bg="secondary">{expense.category}</Badge>
                        </Card.Title>
                        <Card.Text>{expense.date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long'})}</Card.Text>
                    </Card.Body>
                </ModalContainer>
            </Card>
        )
    }
    return (
        <div className="new-expense-card">
            <ModalContainer body={<AddExpenseForm/>} title="Ajouter une dépense">
                <Button>Ajouter</Button>
            </ModalContainer>
        </div>
    )
}

export default ExpenseCard;