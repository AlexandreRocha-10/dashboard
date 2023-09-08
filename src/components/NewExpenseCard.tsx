import { useState } from "react";

import {
  TextInput,
  Card,
  NumberInput,
  Flex,
  Select,
  SelectItem,
  Title,
  Button,
} from "@tremor/react";

import { CurrencyDollarIcon } from "@heroicons/react/solid";
import { CalculatorIcon } from "@heroicons/react/outline";

const NewExpenseCard = () => {
  const [currency, setCurrency] = useState("1");
  const [paymentMethod, setPaymentMethod] = useState("1");
  const [expenseCategory, setExpenseCategory] = useState("1");

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
  };
  
  const handlePaymentMethodChange = (newPaymentMethod: string) => {
    setPaymentMethod(newPaymentMethod);
  };
  
  const handleExpenseCategoryChange = (newExpenseCategory: string) => {
    setExpenseCategory(newExpenseCategory);
  };

  return (
    <Card className="max-w-full mx-auto">
      <Flex className="flex-col gap-2">
        <Title>New Expense</Title>
        <TextInput placeholder="Name a new expense..." />
        <NumberInput icon={CurrencyDollarIcon} placeholder="Amount..." />
        <Flex className="max-w-full gap-2">
          <Select value={currency} onValueChange={handleCurrencyChange}>
            <SelectItem value="1" icon={CalculatorIcon}>
              USD
            </SelectItem>
            <SelectItem value="2" icon={CalculatorIcon}>
              EUR
            </SelectItem>
            <SelectItem value="3" icon={CalculatorIcon}>
              BRL
            </SelectItem>
            <SelectItem value="4" icon={CalculatorIcon}>
              BTC
            </SelectItem>
          </Select>
          <Select value={paymentMethod} onValueChange={handlePaymentMethodChange}>
            <SelectItem value="1" icon={CalculatorIcon}>
              Money
            </SelectItem>
            <SelectItem value="2" icon={CalculatorIcon}>
              Credit Card
            </SelectItem>
            <SelectItem value="3" icon={CalculatorIcon}>
              Debit Card
            </SelectItem>
          </Select>
          <Select value={expenseCategory} onValueChange={handleExpenseCategoryChange}>
            <SelectItem value="1" icon={CalculatorIcon}>
              Food
            </SelectItem>
            <SelectItem value="2" icon={CalculatorIcon}>
              Leisure
            </SelectItem>
            <SelectItem value="3" icon={CalculatorIcon}>
              Work
            </SelectItem>
            <SelectItem value="4" icon={CalculatorIcon}>
              Transport
            </SelectItem>
            <SelectItem value="5" icon={CalculatorIcon}>
              Health
            </SelectItem>
          </Select>
        </Flex>
        <Button size="lg">ADD NEW EXPENSE</Button>
      </Flex>
    </Card>
  );
};

export default NewExpenseCard;
