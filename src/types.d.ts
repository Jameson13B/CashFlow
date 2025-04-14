interface CharacterInfoState {
  name: string
  profession: string
  salary: number
  taxes: number
  mortgage_payment: number
  school_loan_payment: number
  car_payment: number
  credit_card_payment: number
  retail_payment: number
  other_expenses: number
  per_child_expense: number
  children: number
  savings: number
  mortgage: number
  school_loans: number
  car_loan: number
  credit_cards: number
  retail_debt: number
  setValue: (value: CharacterInfoState) => void
}
interface RatRaceStocksState {
  name: string
  price: number
  quantity: number
  dividend: number
}
interface RatRaceRealEstateState {
  name: string
  down_payment: number
  cost: number
  mortgage: number
  cash_flow: number
}
interface RatRaceBusinessState {
  name: string
  down_payment: number
  cost: number
  business_liability: number
  cash_flow: number
}
interface RatRaceCalculatorState {
  stocks: RatRaceStocksState[]
  real_estate: RatRaceRealEstateState[]
  businesses: RatRaceBusinessState[]
  setStocks: (stocks: RatRaceStocksState[]) => void
  setRealEstate: (real_estate: RatRaceRealEstateState[]) => void
  setBusinesses: (businesses: RatRaceBusinessState[]) => void
}
interface FastTrackBusinessState {
  name: string
  cash_flow: number
}
interface FastTrackState {
  businesses: FastTrackBusinessState[]
  setBusinesses: (businesses: FastTrackBusinessState[]) => void
}
