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

  const onChange = (val: number | string | null, name: string) => {
    characterInfoState.setValue({
      ...characterInfoState,
      [name]: val,
    })
  }

  return (
    <div className="container">
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <Input
          addonBefore="Name"
          name="name"
          placeholder="Enter your name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value, "name")
          }
          value={characterInfoState.name}
        />
        <Input
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
      <InputNumber
        addonBefore="Salary"
        prefix="$"
        name="salary"
        onChange={(value: number | null) => onChange(value, "salary")}
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
        <InputNumber
          addonBefore="Taxes"
          prefix="$"
          name="taxes"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(value: number | null) => onChange(value, "taxes")}
          value={characterInfoState.taxes}
        />
        <InputNumber
          addonBefore="Mortgage"
          prefix="$"
          name="mortgage"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(value: number | null) => onChange(value, "mortgage")}
          value={characterInfoState.mortgage_payment}
        />
        <InputNumber
          addonBefore="School Loan"
          prefix="$"
          name="school_loan"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(value: number | null) => onChange(value, "school_loan")}
          value={characterInfoState.school_loan_payment}
        />
        <InputNumber
          addonBefore="Car Pay"
          prefix="$"
          name="car_payment"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(value: number | null) => onChange(value, "car_payment")}
          value={characterInfoState.car_payment}
        />
        <InputNumber
          addonBefore="CC Pay"
          prefix="$"
          name="credit_card_payment"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(value: number | null) =>
            onChange(value, "credit_card_payment")
          }
          value={characterInfoState.credit_card_payment}
        />
        <InputNumber
          addonBefore="Retail Pay"
          prefix="$"
          name="retail_payment"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(value: number | null) => onChange(value, "retail_payment")}
          value={characterInfoState.retail_payment}
        />
        <InputNumber
          addonBefore="Others"
          prefix="$"
          name="other_expenses"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(value: number | null) => onChange(value, "other_expenses")}
          value={characterInfoState.other_expenses}
        />
        <InputNumber
          addonBefore="Per Child"
          prefix="$"
          name="per_child_expense"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(value: number | null) =>
            onChange(value, "per_child_expense")
          }
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
        <InputNumber
          addonBefore="Mortgage"
          prefix="$"
          name="mortgage"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(value: number | null) => onChange(value, "mortgage")}
          value={characterInfoState.mortgage}
        />
        <InputNumber
          addonBefore="School Loan"
          prefix="$"
          name="school_loan"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(value: number | null) => onChange(value, "school_loan")}
          value={characterInfoState.school_loans}
        />
        <InputNumber
          addonBefore="Car Loan"
          prefix="$"
          name="car_loan"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(value: number | null) => onChange(value, "car_loan")}
          value={characterInfoState.car_loan}
        />
        <InputNumber
          addonBefore="Credit Card"
          prefix="$"
          name="credit_cards"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(value: number | null) => onChange(value, "credit_cards")}
          value={characterInfoState.credit_cards}
        />
        <InputNumber
          addonBefore="Retail Debt"
          prefix="$"
          name="retail_debt"
          style={{ width: "calc(50% - 12px)" }}
          onChange={(value: number | null) => onChange(value, "retail_debt")}
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
