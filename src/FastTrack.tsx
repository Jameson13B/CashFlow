import { Descriptions, Divider } from "antd"
import { useFastTrackStore, useRatRaceCalculatorStore } from "./state"
import { FastTrackTable } from "./components/FastTrackTable"

export const FastTrack = () => {
  const { businesses } = useFastTrackStore()
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
        title="Fast Track"
        bordered
        items={[
          {
            key: "1",
            label: "Passive Income",
            children: `$${passive_income}`,
          },
          {
            key: "2",
            label: "Cashflow Day Income",
            children: `$${
              passive_income * 100 +
              businesses.reduce(
                (acc: number, business: FastTrackBusinessState) =>
                  acc + business.cash_flow,
                0
              )
            }`,
          },
          {
            key: "3",
            label: "Cashflow Day Goal",
            children: `$${passive_income * 100 + 50000}`,
          },
        ]}
        size="small"
      />
      <Divider />
      <FastTrackTable />
    </div>
  )
}
