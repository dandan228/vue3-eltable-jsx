import { defineComponent, reactive, onMounted } from "vue";
import { ElButton, ElInput } from "element-plus";
import { Table } from "./components/table";
import { FilterTable } from "./components/filterTable";
import { Pagination } from "./components/paginate";
import { _columns, _data, _filterForm } from "./components/config.js";
import axiox from "axios";

export default defineComponent({
  name: "App",
  setup() {
    let state = reactive({
      // table数据源
      tableData: [],
      // 当前页码
      page: 1,
      // 当前页容量
      pageSize: 5,
      total: 0,
      // table每一列
      columns: _columns,
    });

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
      state.pageSize = pageSize
      initData({ page: state.page, pageSize: state.pageSize });
    };

    const handlePageChange = (page) => {
      console.log("当前页码", page);
      state.page = page
      initData({ page: state.page, pageSize: state.pageSize });
    };

    const handleFilterTable = (form) => {
      console.log("筛选table的参数", form);
      initData(form);
    };

    const initData = async (params) => {
      axiox.post("/api/getList", params).then((res) => {
        const { data } = res;
        state.tableData = data.data.list;
        state.total = data.data.total
        console.log('state.total', data.data);
      });
    };

    initData({});

    return () => (
      <div>
        <FilterTable
          filterForm={_filterForm}
          onHandleFilterTable={handleFilterTable}
        ></FilterTable>
        <Table data={state.tableData} columns={state.columns}>
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
          data={state.tableData}
          page={state.page}
          total={state.total}
          pageSize={state.pageSize}
          onSizeChange={handleSizeChange}
          onPageChange={handlePageChange}
        />
      </div>
    );
  },
});
