import { useState, useRef, useEffect } from "react"
import { Input, Statistic } from "antd"
import type { InputRef } from "antd"

interface EditableCellProps {
  dataIndex: keyof RatRaceStocksState
  record: RatRaceStocksState
  handleSave: (record: string) => void
  type: "number" | "currency" | "text"
}
export const EditableCell: React.FC<
  React.PropsWithChildren<EditableCellProps>
> = ({ children, dataIndex, record, handleSave, type, ...restProps }) => {
  const [editing, setEditing] = useState(false)
  const inputRef = useRef<InputRef>(null)

  useEffect(() => {
    if (editing) inputRef.current?.focus()
  }, [editing])

  return (
    <td {...restProps}>
      {editing ? (
        <Input
          ref={inputRef}
          name={dataIndex}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSave(e.target.value)
          }
          onPressEnter={() => setEditing(!editing)}
          onBlur={() => setEditing(!editing)}
          value={record[dataIndex]}
          style={{ margin: 0, width: 75 }}
        />
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{ paddingInlineEnd: 0 }}
          onClick={() => setEditing(!editing)}
        >
          {type === "number" && <Statistic value={record[dataIndex]} />}
          {type === "currency" && (
            <Statistic
              value={
                record[dataIndex].toString().length <= 3
                  ? record[dataIndex]
                  : Number(record[dataIndex]) / 1000 + "k"
              }
              prefix="$"
            />
          )}
          {type === "text" && children}
        </div>
      )}
    </td>
  )
}
