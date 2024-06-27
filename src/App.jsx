import { defineComponent, reactive } from "vue";
import { ElButton, ElInput } from "element-plus";
import { Table } from "./components/table";
import { FilterTable } from "./components/filterTable";
import { Pagination } from "./components/paginate";
import { _columns, _data, _filterForm } from "./components/config.js";
import mockData from "./components/mockData"; // 导入Mock数据

export default defineComponent({
  name: "App",
  setup() {
    // table数据源
    let tableData = reactive([]);

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

    const handleSizeChange = (pageSize) => {
      console.log("当前页容量", pageSize);
    };

    const handlePageChange = (currentPage) => {
      console.log("当前页码", currentPage);
    };

    const handleFilterTable = (form) => {
      console.log("筛选table的参数", form);
    };

    const initData = () => {
      const { data } = mockData;
      tableData = data;
    };

    initData();

    return () => (
      <div>
        <FilterTable
          filterForm={_filterForm}
          onHandleFilterTable={handleFilterTable}
        ></FilterTable>
        <Table data={tableData} columns={columns}>
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
        <Pagination
          data={tableData}
          onSizeChange={handleSizeChange}
          onPageChange={handlePageChange}
        />
      </div>
    );
  },
});
