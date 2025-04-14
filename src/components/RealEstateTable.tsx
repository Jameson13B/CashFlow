import { Button, Empty, Table, Typography } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { useRatRaceCalculatorStore } from "../state"
import { EditableCell } from "./EditableCell"

export const RealEstateTable = () => {
  const { real_estate, setRealEstate } = useRatRaceCalculatorStore()

  const realEstateColumns = [
    {
      title: "Name",
      dataIndex: "name",
      onCell: (record: RatRaceRealEstateState) => ({
        record,
        dataIndex: "name",
        type: "text",
        handleSave: (value: string) =>
          setRealEstate(
            real_estate.map((real_estate) =>
              real_estate.name === record.name
                ? { ...real_estate, name: value }
                : real_estate
            )
          ),
      }),
    },
    {
      title: "Down",
      dataIndex: "down_payment",
      onCell: (record: RatRaceRealEstateState) => ({
        record,
        dataIndex: "down_payment",
        type: "currency",
        handleSave: (value: string) =>
          setRealEstate(
            real_estate.map((real_estate) =>
              real_estate.name === record.name
                ? {
                    ...real_estate,
                    down_payment: value !== "" ? parseInt(value) : 0,
                  }
                : real_estate
            )
          ),
      }),
    },
    {
      title: "Cost",
      dataIndex: "cost",
      onCell: (record: RatRaceRealEstateState) => ({
        record,
        dataIndex: "cost",
        type: "currency",
        handleSave: (value: string) =>
          setRealEstate(
            real_estate.map((real_estate) =>
              real_estate.name === record.name
                ? {
                    ...real_estate,
                    cost: value !== "" ? parseInt(value) : 0,
                  }
                : real_estate
            )
          ),
      }),
    },
    {
      title: "Mtg",
      dataIndex: "mortgage",
      onCell: (record: RatRaceRealEstateState) => ({
        record,
        dataIndex: "mortgage",
        type: "currency",
        handleSave: (value: string) =>
          setRealEstate(
            real_estate.map((real_estate) =>
              real_estate.name === record.name
                ? {
                    ...real_estate,
                    mortgage: value !== "" ? parseInt(value) : 0,
                  }
                : real_estate
            )
          ),
      }),
    },
    {
      title: "Cash Flow",
      dataIndex: "cash_flow",
      onCell: (record: RatRaceRealEstateState) => ({
        record,
        dataIndex: "cash_flow",
        type: "currency",
        handleSave: (value: string) =>
          setRealEstate(
            real_estate.map((real_estate) =>
              real_estate.name === record.name
                ? {
                    ...real_estate,
                    cash_flow: value !== "" ? parseInt(value) : 0,
                  }
                : real_estate
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
          Real Estate
        </Typography.Title>
        <Button
          type="primary"
          onClick={() =>
            setRealEstate([
              ...real_estate,
              {
                name: "New",
                down_payment: 0,
                cost: 0,
                mortgage: 0,
                cash_flow: 0,
              },
            ])
          }
        >
          Add Real Estate
        </Button>
      </div>
      <Table<RatRaceRealEstateState>
        components={{
          body: { cell: EditableCell },
        }}
        bordered
        dataSource={real_estate.map((item, index) => ({
          ...item,
          delete: (
            <Button
              type="link"
              onClick={() =>
                setRealEstate(real_estate.filter((_, i) => i !== index))
              }
              style={{ padding: 0 }}
            >
              <DeleteOutlined />
            </Button>
          ),
        }))}
        columns={realEstateColumns}
        pagination={false}
        size="small"
        locale={{
          emptyText: <Empty description="Nothing here Povo!" />,
        }}
      />
    </>
  )
}
