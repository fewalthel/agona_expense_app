import React from 'react';
import './index.css';
import { IExpense } from "../../api.ts";

export interface IExpenseProps extends IExpense{
    expensesList: IExpense[];
    setExpensesList: (newExpenses: IExpense[]) => void;
}

export const Expense: React.FC <IExpenseProps> = ({title, cost, date, category, expensesList, setExpensesList}: IExpenseProps) => {

    function removeExpense(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();

        const titleOfRemoveExpense: string = event.currentTarget.value;
        const newExpenses: IExpense[] = [];

        expensesList.forEach((expense: IExpense) => {
            if (expense.title != titleOfRemoveExpense) {
                newExpenses.push(expense);
            }
        })

        console.log('старый список');
        console.log(expensesList);
        setExpensesList(newExpenses);
        console.log('новый список');
        console.log(newExpenses);
    }

   return (
        <div className="expense-container">
            <button value={title} onClick={removeExpense}>X</button>
            <strong>Название расхода: {title}</strong>
            <p>Сумма расхода: {cost} руб.</p>
            <p>Дата добавления расхода: {date}</p>
            <p>Категория: {category}</p>
        </div>
    )
}