import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Title,
  Metric,
  BadgeDelta,
} from "@tremor/react";

const data = [
  {
    name: "Expense 1",
    amount: 50.00,
    currency: "USD",
    method: "Credit Card",
    tag: "Food"
  },
  {
    name: "Expense 2",
    amount: 30.00,
    currency: "EUR",
    method: "Debit Card",
    tag: "Leisure"
  },
  {
    name: "Expense 3",
    amount: 20.00,
    currency: "BRL",
    method: "Money",
    tag: "Work"
  },
  {
    name: "Expense 4",
    amount: 10.00,
    currency: "BTC",
    method: "Credit Card",
    tag: "Transport"
  },
  {
    name: "Expense 5",
    amount: 40.00,
    currency: "USD",
    method: "Debit Card",
    tag: "Health"
  }
];

const ExpensesTable = () => (
  <Card className="mt-4">
    <Title>List of Expenses</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Tag</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
          <TableHeaderCell>Method</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.name}>
            <TableCell>
              <Metric>{item.name}</Metric>
            </TableCell>
            <TableCell>
              <Metric>{item.tag}</Metric>
            </TableCell>
            <TableCell>
              <Metric>{item.currency}</Metric>
            </TableCell>
            <TableCell>
              <Metric>{item.method}</Metric>
            </TableCell>
            <TableCell>
              <BadgeDelta deltaType="moderateDecrease" isIncreasePositive={true} size="xs">
                {item.amount} R$
              </BadgeDelta>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default ExpensesTable;