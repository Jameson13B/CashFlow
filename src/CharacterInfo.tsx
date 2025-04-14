import { Divider, Input, InputNumber, Typography } from "antd"

import { useCharacterInfoStore } from "./state"

export const CharacterInfo = () => {
  const characterInfoState = useCharacterInfoStore()
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

  const onChange = (val: number | string, name: string) => {
    characterInfoState.setValue({
      ...characterInfoState,
      [name]: val,
    })
  }

  return (
    <div className="container">
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <Input<string>
          addonBefore="Name"
          name="name"
          placeholder="Enter your name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value, "name")
          }
          value={characterInfoState.name}
        />
        <Input<string>
          addonBefore="Profession"
          name="profession"
          placeholder="Enter your profession"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value, "profession")
          }
          value={characterInfoState.profession}
        />
      </div>
      <Divider />
      <InputNumber<number>
        addonBefore="Salary"
        prefix="$"
        name="salary"
        onChange={(e: string | number) => onChange(e, "salary")}
        value={characterInfoState.salary}
      />
      <Divider />
      <Typography.Title level={5}>Expenses</Typography.Title>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <InputNumber<number>
          addonBefore="Taxes"
          prefix="$"
          name="taxes"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(e: string | number) => onChange(e, "taxes")}
          value={characterInfoState.taxes}
        />
        <InputNumber<number>
          addonBefore="Mortgage"
          prefix="$"
          name="mortgage"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(e: string | number) => onChange(e, "mortgage")}
          value={characterInfoState.mortgage_payment}
        />
        <InputNumber<number>
          addonBefore="School Loan"
          prefix="$"
          name="school_loan"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(e: string | number) => onChange(e, "school_loan")}
          value={characterInfoState.school_loan_payment}
        />
        <InputNumber<number>
          addonBefore="Car Pay"
          prefix="$"
          name="car_payment"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(e: string | number) => onChange(e, "car_payment")}
          value={characterInfoState.car_payment}
        />
        <InputNumber<number>
          addonBefore="CC Pay"
          prefix="$"
          name="credit_card_payment"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(e: string | number) => onChange(e, "credit_card_payment")}
          value={characterInfoState.credit_card_payment}
        />
        <InputNumber<number>
          addonBefore="Retail Pay"
          prefix="$"
          name="retail_payment"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(e: string | number) => onChange(e, "retail_payment")}
          value={characterInfoState.retail_payment}
        />
        <InputNumber<number>
          addonBefore="Others"
          prefix="$"
          name="other_expenses"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(e: string | number) => onChange(e, "other_expenses")}
          value={characterInfoState.other_expenses}
        />
        <InputNumber<number>
          addonBefore="Per Child"
          prefix="$"
          name="per_child_expense"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(e: string | number) => onChange(e, "per_child_expense")}
          value={characterInfoState.per_child_expense}
        />
      </div>
      <Divider />
      <Typography.Title level={5}>Liabilities</Typography.Title>
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <InputNumber<number>
          addonBefore="Mortgage"
          prefix="$"
          name="mortgage"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(e: string | number) => onChange(e, "mortgage")}
          value={characterInfoState.mortgage}
        />
        <InputNumber<number>
          addonBefore="School Loan"
          prefix="$"
          name="school_loan"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(e: string | number) => onChange(e, "school_loan")}
          value={characterInfoState.school_loans}
        />
        <InputNumber<number>
          addonBefore="Car Loan"
          prefix="$"
          name="car_loan"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(e: string | number) => onChange(e, "car_loan")}
          value={characterInfoState.car_loan}
        />
        <InputNumber<number>
          addonBefore="Credit Card"
          prefix="$"
          name="credit_cards"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(e: string | number) => onChange(e, "credit_cards")}
          value={characterInfoState.credit_cards}
        />
        <InputNumber<number>
          addonBefore="Retail Debt"
          prefix="$"
          name="retail_debt"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(e: string | number) => onChange(e, "retail_debt")}
          value={characterInfoState.retail_debt}
        />
      </div>
      <Divider />
      <Typography.Paragraph strong italic type="warning">
        *Collect ${characterInfoState.salary - total_expenses + 400}(cashflow +
        savings) to start.
      </Typography.Paragraph>
    </div>
  )
}
