import { Button, Empty, Table, Typography } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { useRatRaceCalculatorStore } from "../state"
import { EditableCell } from "./EditableCell"

export const StocksTable = () => {
  const { stocks, setStocks } = useRatRaceCalculatorStore()

  const stockColumns = [
    {
      title: "Name",
      dataIndex: "name",
      onCell: (record: RatRaceStocksState) => ({
        record,
        dataIndex: "name",
        type: "text",
        handleSave: (value: string) =>
          setStocks(
            stocks.map((stock) =>
              stock.name === record.name ? { ...stock, name: value } : stock
            )
          ),
      }),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      onCell: (record: RatRaceStocksState) => ({
        record,
        dataIndex: "quantity",
        type: "number",
        handleSave: (value: string) =>
          setStocks(
            stocks.map((stock) =>
              stock.name === record.name
                ? { ...stock, quantity: value !== "" ? parseInt(value) : 0 }
                : stock
            )
          ),
      }),
    },
    {
      title: "Price",
      dataIndex: "price",
      onCell: (record: RatRaceStocksState) => ({
        record,
        dataIndex: "price",
        type: "currency",
        handleSave: (value: string) =>
          setStocks(
            stocks.map((stock) =>
              stock.name === record.name
                ? {
                    ...stock,
                    price: value !== "" ? parseInt(value) : 0,
                  }
                : stock
            )
          ),
      }),
    },
    {
      title: "Dividend",
      dataIndex: "dividend",
      onCell: (record: RatRaceStocksState) => ({
        record,
        dataIndex: "dividend",
        type: "currency",
        handleSave: (value: string) =>
          setStocks(
            stocks.map((stock) =>
              stock.name === record.name
                ? {
                    ...stock,
                    dividend: value !== "" ? parseInt(value) : 0,
                  }
                : stock
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
          Stocks
        </Typography.Title>
        <Button
          type="primary"
          onClick={() =>
            setStocks([
              ...stocks,
              {
                name: "New",
                price: 0,
                quantity: 0,
                dividend: 0,
              },
            ])
          }
        >
          Add Stock
        </Button>
      </div>
      <Table<RatRaceStocksState>
        components={{ body: { cell: EditableCell } }}
        bordered
        dataSource={stocks.map((stock, index) => ({
          ...stock,
          delete: (
            <Button
              type="link"
              onClick={() => setStocks(stocks.filter((_, i) => i !== index))}
              style={{ padding: 0 }}
            >
              <DeleteOutlined />
            </Button>
          ),
        }))}
        columns={stockColumns}
        pagination={false}
        size="small"
        locale={{
          emptyText: <Empty description="Nothing here Povo!" />,
        }}
      />
    </>
  )
}
