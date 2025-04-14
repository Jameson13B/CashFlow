import { Button, Empty, Table, Typography } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { useRatRaceCalculatorStore } from "../state"
import { EditableCell } from "./EditableCell"
import { ColumnType } from "antd/es/table/interface"

export const BusinessesTable = () => {
  const { businesses, setBusinesses } = useRatRaceCalculatorStore()

  const businessColumns = [
    {
      title: "Name",
      dataIndex: "name",
      onCell: (record: RatRaceBusinessState) => ({
        record,
        dataIndex: "name",
        type: "text",
        handleSave: (value: string) =>
          setBusinesses(
            businesses.map((business) =>
              business.name === record.name
                ? { ...business, name: value }
                : business
            )
          ),
      }),
    },
    {
      title: "Down",
      dataIndex: "down_payment",
      onCell: (record: RatRaceBusinessState) => ({
        record,
        dataIndex: "down_payment",
        type: "currency",
        handleSave: (value: string) =>
          setBusinesses(
            businesses.map((business) =>
              business.name === record.name
                ? {
                    ...business,
                    down_payment: value !== "" ? parseInt(value) : 0,
                  }
                : business
            )
          ),
      }),
    },
    {
      title: "Cost",
      dataIndex: "cost",
      onCell: (record: RatRaceBusinessState) => ({
        record,
        dataIndex: "cost",
        type: "currency",
        handleSave: (value: string) =>
          setBusinesses(
            businesses.map((business) =>
              business.name === record.name
                ? {
                    ...business,
                    cost: value !== "" ? parseInt(value) : 0,
                  }
                : business
            )
          ),
      }),
    },
    {
      title: "Liability",
      dataIndex: "business_liability",
      onCell: (record: RatRaceBusinessState) => ({
        record,
        dataIndex: "business_liability",
        type: "currency",
        handleSave: (value: string) =>
          setBusinesses(
            businesses.map((business) =>
              business.name === record.name
                ? {
                    ...business,
                    business_liability: value !== "" ? parseInt(value) : 0,
                  }
                : business
            )
          ),
      }),
    },
    {
      title: "Cash Flow",
      dataIndex: "cash_flow",
      onCell: (record: RatRaceBusinessState) => ({
        record,
        dataIndex: "cash_flow",
        type: "currency",
        handleSave: (value: string) =>
          setBusinesses(
            businesses.map((business) =>
              business.name === record.name
                ? {
                    ...business,
                    cash_flow: value !== "" ? parseInt(value) : 0,
                  }
                : business
            )
          ),
      }),
    },
    {
      title: <DeleteOutlined />,
      dataIndex: "delete",
      onCell: () => ({
        type: "text",
      }),
    },
  ]

  return (
    <>
      <div
        style={{
          width: "100%",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Typography.Title level={5} style={{ margin: 0 }}>
          Businesses
        </Typography.Title>
        <Button
          type="primary"
          onClick={() =>
            setBusinesses([
              ...businesses,
              {
                name: "New",
                down_payment: 0,
                cost: 0,
                business_liability: 0,
                cash_flow: 0,
              },
            ])
          }
        >
          Add Business
        </Button>
      </div>
      <Table<RatRaceBusinessState>
        components={{
          body: { cell: EditableCell },
        }}
        bordered
        dataSource={businesses.map((business, index) => ({
          ...business,
          delete: (
            <Button
              type="link"
              onClick={() =>
                setBusinesses(businesses.filter((_, i) => i !== index))
              }
              style={{ padding: 0 }}
            >
              <DeleteOutlined />
            </Button>
          ),
        }))}
        columns={businessColumns as ColumnType<RatRaceBusinessState>[]}
        pagination={false}
        size="small"
        locale={{
          emptyText: <Empty description="Nothing here Povo!" />,
        }}
      />
    </>
  )
}
