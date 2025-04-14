import { Descriptions, Divider } from "antd"

import { StocksTable } from "./components/StocksTable"
import { useRatRaceCalculatorStore } from "./state"
import { useCharacterInfoStore } from "./state"
import { RealEstateTable } from "./components/RealEstateTable"
import { BusinessesTable } from "./components/BusinessTable"

export const RatRaceCalc = () => {
  const salary = useCharacterInfoStore((state) => state.salary)
  const total_expenses = useCharacterInfoStore(
    (state) =>
      state.taxes +
      state.mortgage_payment +
      state.school_loan_payment +
      state.car_payment +
      state.credit_card_payment +
      state.retail_payment +
      state.other_expenses +
      state.per_child_expense * state.children
  )
  const passive_income = useRatRaceCalculatorStore(
    (state) =>
      state.stocks.reduce(
        (acc: number, stock: RatRaceStocksState) => acc + stock.dividend,
        0
      ) +
      state.real_estate.reduce(
        (acc: number, real_estate: RatRaceRealEstateState) =>
          acc + real_estate.cash_flow,
        0
      ) +
      state.businesses.reduce(
        (acc: number, business: RatRaceBusinessState) =>
          acc + business.cash_flow,
        0
      )
  )

  return (
    <div className="container" style={{ width: "100%" }}>
      <Descriptions
        title="Summary"
        bordered
        items={[
          {
            key: "1",
            label: "Total Income",
            children: (
              <span style={{ color: "green" }}>${salary + passive_income}</span>
            ),
          },
          {
            key: "2",
            label: "Passive Income",
            children: `$${passive_income}`,
          },
          {
            key: "3",
            label: "Total Expenses",
            children: <span style={{ color: "red" }}>${total_expenses}</span>,
          },
          {
            key: "4",
            label: "Monthly Cash Flow",
            children: `$${salary + passive_income - total_expenses}`,
          },
        ]}
        size="small"
      />
      <Divider />
      <StocksTable />
      <Divider />
      <RealEstateTable />
      <Divider />
      <BusinessesTable />
    </div>
  )
}
