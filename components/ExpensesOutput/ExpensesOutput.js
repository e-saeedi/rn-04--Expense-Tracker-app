import { StyleSheet, Text, View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({ expenses, expensesPeriod }) {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      description: "a pair of shoes",
      amount: 12.5,
      date: new Date("2021-05-06"),
    },
    {
      id: "e2",
      description: "book",
      amount: 10.5,
      date: new Date("2023-10-10"),
    },
    {
      id: "e3",
      description: "umbrella",
      amount: 4.23,
      date: new Date("2026-11-06"),
    },
    {
      id: "e4",
      description: "Another Books",
      amount: 9.75,
      date: new Date("2028-14-01"),
    },
    {
      id: "e5",
      description: "brush Tooth",
      amount: 17.9,
      date: new Date("2028-14-05"),
    },
    {
      id: "e6",
      description: "brush Tooth",
      amount: 17.9,
      date: new Date("2028-14-05"),
    },
    {
      id: "e7",
      description: "brush Tooth",
      amount: 17.9,
      date: new Date("2028-14-05"),
    },
    {
      id: "e8",
      description: "brush Tooth",
      amount: 17.9,
      date: new Date("2028-14-05"),
    },
    {
      id: "e9",
      description: "brush Tooth",
      amount: 17.9,
      date: new Date("2028-14-05"),
    },
  ];

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
