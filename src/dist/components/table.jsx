import { ElTable, ElTableColumn } from "element-plus";

export const Table = (props, { slots, emit }) => {
  const { data, columns, tableMultiple, defaultSort } = props;

  const selectCheckbox = (row) => {
    emit("selectCheckbox", row);
  };

  const sortChange = (sort) => {
    emit("sortChange", sort);
  };

  const renderColumnContent = (scope, col, colIdx) => {
    // 如果列有 dict 属性
    if (col.dict) {
      const { tag, dictMap } = col.dict;
      // 根据当前行的数据查找对应的字典项
      const dictItem = dictMap.find(
        (item) => item.value === scope.row[col.prop]
      );

      // 如果有 tag 属性，使用 tagSlot 插槽渲染
      if (tag) {
        return <div>{slots.tagSlot(scope, col, colIdx, dictItem)}</div>;
      }

      // 否则返回字典项的标签或空字符串
      return dictItem ? dictItem.label : "";
    }

    // 定义一个映射表，将 tableType 映射到对应的插槽
    const slotMap = {
      btn: slots.btnSlot,
      input: slots.inputSlot,
      switch: slots.switchSlot,
      img: slots.imgSlot,
      tag: slots.tagSlot,
    };

    // 根据 tableType 获取对应的插槽渲染函数
    const slotRenderer = slotMap[col.tableType];
    if (slotRenderer) {
      // 如果有对应的渲染函数，使用该插槽渲染
      return (
        <div>{slotRenderer(scope, col, colIdx)}</div>
      );
    }

    // 否则返回当前行列的值
    return scope.row[col.prop];
  };

  return (
    <div>
      <ElTable
        default-sort={{ prop: defaultSort.prop, order: defaultSort.order }}
        data={data}
        onSelectionChange={selectCheckbox} // 绑定行选择变化事件
        onSortChange={sortChange} // 绑定排序变化事件
      >
        {tableMultiple && <ElTableColumn type="selection" width="55" />}
        {columns.map((col, colIdx) => (
          <ElTableColumn
            key={col.prop}
            prop={col.prop}
            label={col.label}
            width={col.width}
            align={col.align}
            sortable={col.sortable}
          >
            {{
              default: (scope) => renderColumnContent(scope, col, colIdx),
            }}
          </ElTableColumn>
        ))}
      </ElTable>
    </div>
  );
};
