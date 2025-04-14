import { create } from "zustand"

export const useCharacterInfoStore = create<CharacterInfoState>((set) => ({
  name: "",
  profession: "",
  salary: 0,
  taxes: 0,
  mortgage_payment: 0,
  school_loan_payment: 0,
  car_payment: 0,
  credit_card_payment: 0,
  retail_payment: 0,
  other_expenses: 0,
  per_child_expense: 0,
  children: 0,
  savings: 400,
  mortgage: 0,
  school_loans: 0,
  car_loan: 0,
  credit_cards: 0,
  retail_debt: 0,
  setValue: (value: CharacterInfoState) => set(() => ({ ...value })),
}))

export const useRatRaceCalculatorStore = create<RatRaceCalculatorState>(
  (set) => ({
    stocks: [],
    real_estate: [],
    businesses: [],
    setStocks: (stocks: RatRaceStocksState[]) => set(() => ({ stocks })),
    setRealEstate: (real_estate: RatRaceRealEstateState[]) =>
      set(() => ({ real_estate })),
    setBusinesses: (businesses: RatRaceBusinessState[]) =>
      set(() => ({ businesses })),
  })
)

export const useFastTrackStore = create<FastTrackState>((set) => ({
  businesses: [],
  setBusinesses: (businesses: FastTrackBusinessState[]) =>
    set(() => ({ businesses })),
}))
