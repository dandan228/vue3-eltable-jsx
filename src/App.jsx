import { defineComponent } from "vue";
import { ElButton, ElInput } from "element-plus";
import { Table } from "./components/table";
import { _data, _columns } from "./components/config.js";

export default defineComponent({
  name: "App",
  setup() {
    // table数据源
    const data = _data;

    // table每一列
    const columns = _columns;

    // 处理按钮点击事件
    const handleButtonClick = (scope, colIdx, btnIdx) => {
      const { row, rowIndex } = scope;
      /* 
        scope: {
          row: 每一行数据对象,
          rowIndex: 每一行数据的索引,
        }
        colIdx: 当前列的索引,
        btnIdx: 当前列按钮数组中按钮的索引,
      */
    };

    // 格式化按钮列
    const formatBtn = (scope, colIdx) => {
      const { row, rowIndex } = scope;
      /* 
        scope: {
          row: 每一行数据对象,
          rowIndex: 每一行数据的索引,
        }
      */
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

    return () => (
      <div>
        <Table data={data} columns={columns}>
          {{
            btnSlot: (scope, col, colIdx) => {
              // 处理按钮状态
              const isFormatBtn = true;
              const _btnArr = isFormatBtn
                ? formatBtn(scope, colIdx)
                : col.btnArr;

              return _btnArr.map((btn, btnIdx) => (
                <ElButton
                  type={btn.color}
                  disabled={btn.disabled}
                  onClick={() => handleButtonClick(scope, colIdx, btnIdx)}
                >
                  {btn.label}
                </ElButton>
              ));
            },
            inputSlot: (scope, col, colIdx) => {
              return <ElInput>123</ElInput>;
            },
          }}
        </Table>
      </div>
    );
  },
});
