import {getDatabase, push, update, remove, ref} from "firebase/database";
import firebaseApp from "../firebase";

export class ExpenseService {
    static addExpense = (expense: { amount: number; title: string; category: string }) => {
        const db = getDatabase(firebaseApp);

        const expenseRef = ref(db, '/expenses');
        const expenseToPush = {
            ...expense,
            dateTimestamp: Date.now()
        };
        push(expenseRef, expenseToPush);
    };
    static updateExpense = (expense: { amount: number; title: string; category: string, key: string }) => {
        const db = getDatabase(firebaseApp);

        const expenseRef = ref(db, `/expenses/${expense.key}`);
        update(expenseRef, expense);
    };

    static removeExpense = (key: string) => {
        const db = getDatabase(firebaseApp);

        const expenseRef = ref(db, `/expenses/${key}`);
        remove(expenseRef);
    };
}