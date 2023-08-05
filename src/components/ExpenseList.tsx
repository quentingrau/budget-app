import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

// Import firebase configuration from firebase.ts file
import firebaseApp from '../firebase';

import { Expense } from '../types';
import ExpenseCard from "./Expense";
import {isOnSameMonth} from "../utils/functions";

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
                        category: expenses[id].category,
                        key: id
                    });
            }

            setExpenseList(newExpenseList);
        });
    }, [db]);
    return (
        <div>
            <h2>Ce mois-ci :</h2>
            <div className="monthly-amount">{expenseList.filter(expense => isOnSameMonth(expense.date)).reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)}€</div>
            <hr/>
            <h2>Dépenses</h2>
            <div className='expenses'>
                <ExpenseCard />
                {expenseList.sort((a, b) => a.date.getTime() - b.date.getTime()).map((expense, index) => {
                    return <ExpenseCard key={index} expense={expense}/>;
                })}
            </div>
        </div>
    )
}

export default ExpenseList;
