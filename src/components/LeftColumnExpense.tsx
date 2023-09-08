import ExpensesTable from "./ExpensesTable";
import NewExpenseCard from "./NewExpenseCard";


const LeftColumnExpense = () => {
  return (
    <div className="w-full flex flex-col justify-between p-2">
        <div className="flex flex-col lg:flex-row gap-2 w-full">
            <NewExpenseCard />
        </div>
        <div className="flex-auto w-full">
            <ExpensesTable />
        </div>
      </div>
  );
};

export default LeftColumnExpense;
