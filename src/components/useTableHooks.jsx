// 将处理按钮点击和按钮格式化的逻辑封装成 hooks
export const useTableHooks = () => {
    // 处理按钮点击事件
    const handleButtonClick = (scope, colIdx, btnIdx) => {
      const { row, rowIndex } = scope;
      console.log("Clicked row:", row);
      console.log("Row index:", rowIndex);
      console.log("Column index:", colIdx);
      console.log("Button index:", btnIdx);
      return {row, rowIndex, colIdx, btnIdx}
    };
  
    // 格式化按钮列
    const formatBtn = (scope, colIdx) => {
      const { row } = scope;
      console.log("Clicked row:", row);
      console.log("Row index:", scope.rowIndex);
      console.log("colIdx:", colIdx);
      console.log("state", row.state);
      const btnArr = {
        0: [
          { label: "通过", color: "primary" },
          { label: "取消", color: "danger" },
          { label: "禁用", color: "danger", disabled: true },
        ],
        1: [{ label: "通过", color: "primary" }],
        2: [{ label: "取消", color: "danger" }],
        3: [{ label: "禁用", color: "danger", disabled: true }],
      };
      return btnArr[row.state];
    };
  
    return {
      handleButtonClick,
      formatBtn,
    };
  };