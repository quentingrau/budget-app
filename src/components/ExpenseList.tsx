import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

// Import firebase configuration from firebase.ts file
import firebaseApp from '../firebase';

import { Expense } from '../types';
import ExpenseCard from "./Expense";
import {Card} from "react-bootstrap";

const ExpenseList = () => {
    const db = getDatabase(firebaseApp);
    const [expenseList, setExpenseList] = useState<Expense[]>([]);

    useEffect(() => {
        const expenseRef = ref(db, '/expenses');

        onValue(expenseRef, (snapshot) => {
            const expenses = snapshot.val();
            const newExpenseList: Expense[] = [];

            for (let id in expenses) {
                newExpenseList.push(
                    {
                        title: expenses[id].title,
                        date: new Date(expenses[id].dateTimestamp),
                        amount: expenses[id].amount,
                        category: expenses[id].category
                    });
            }

            setExpenseList(newExpenseList);
        });
    }, [db]);
    console.log(expenseList);
    return (
        <div>
            <h2>Dépenses</h2>
            <div className='expenses'>
                <ExpenseCard />
                {expenseList.map((expense, index) => {
                    return <ExpenseCard key={index} expense={expense}/>;
                })}
            </div>
        </div>
    )
}

export default ExpenseList;
