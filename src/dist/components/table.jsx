import { ElTable, ElTableColumn } from "element-plus";

export const Table = (props, { slots, emit }) => {
  const { data, columns, tableMultiple } = props;

  const selectCheckbox = (row) => {
    emit("selectCheckbox", row); // 触发自定义事件传递选中的行数据
  };

  return (
    <div>
      <ElTable data={data} onSelectionChange={selectCheckbox}>
        {tableMultiple && <ElTableColumn type="selection" width="55" />}
        {columns?.map((col, colIdx) => (
          <ElTableColumn
            key={col.prop}
            prop={col.prop}
            label={col.label}
            width={col.width}
            align={col.align}
          >
            {{
              default: (scope) => {
                if (col.dict) {
                  const dictItem = col.dict.find(
                    (item) => item.value === scope.row[col.prop]
                  );
                  return dictItem ? dictItem.label : "";
                } else if (col.tableType === "btn") {
                  return <div>{slots.btnSlot(scope, col, colIdx)}</div>;
                } else if (col.tableType === "input") {
                  return <div>{slots.inputSlot(scope, col, colIdx)}</div>;
                } else if (col.tableType === "switch") {
                  return <div>{slots.switchSlot(scope, col, colIdx)}</div>;
                } else if (col.tableType === "img") {
                  return <div>{slots.imgSlot(scope, col, colIdx)}</div>;
                } else {
                  return scope.row[col.prop];
                }
              },
            }}
          </ElTableColumn>
        ))}
      </ElTable>
    </div>
  );
};
