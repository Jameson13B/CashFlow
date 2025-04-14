import { Button, Empty, Table, Typography } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import { useFastTrackStore } from "../state"
import { EditableCell } from "./EditableCell"

export const FastTrackTable = () => {
  const { businesses, setBusinesses } = useFastTrackStore()

  const columns = [
    {
      title: "Business",
      dataIndex: "name",
      onCell: (record: FastTrackBusinessState) => ({
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
      title: "Cash Flow",
      dataIndex: "cash_flow",
      onCell: (record: FastTrackBusinessState) => ({
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
            setBusinesses([...businesses, { name: "New", cash_flow: 0 }])
          }
        >
          Add Business
        </Button>
      </div>
      <Table<FastTrackBusinessState>
        components={{ body: { cell: EditableCell } }}
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
        columns={columns}
        pagination={false}
        size="small"
        locale={{
          emptyText: <Empty description="Nothing here Povo!" />,
        }}
      />
    </>
  )
}
