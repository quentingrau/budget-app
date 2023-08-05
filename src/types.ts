export type Todo = {
    id: string;
    title: string;
    done: boolean;
}

export type RawExpense = {
    id: string;
    title: string;
    amount: number;
    dateTimestamp: number
    category: Category
}

export type Expense = {
    key: string;
    title: string;
    amount: number;
    date: Date
    category: Category
}

export enum Category {
    Plaisirs = 'Plaisirs',
    Courses = 'Courses',
    Maison = 'Maison'
}