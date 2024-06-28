import { defineComponent, reactive, watchEffect } from "vue";
import { ElButton, ElInput } from "element-plus";
import { Table } from "./table";
import { FilterTable } from "./filterTable";
import { Pagination } from "./paginate";
// import { columns, filterForm } from "./config.js";

export default defineComponent({
  name: "MTable",

  props: {
    filterForm: {
      type: Array,
      default: () => ([]),
    },
    columns: {
      type: Array,
      default: () => ([]),
    },
    tableData: {
      type: Array,
      default: () => ([]),
    },
    pageInfo: {
      type: Object,
      default: () => ({}),
    },
    formatBtnObj: {
      type: Object,
      default: () => ({})
    }
  },

  setup(props, { emit }) {
    const { columns, filterForm, tableData, pageInfo, formatBtnObj } = props;

    let state = reactive({
      tableData,
    });

    watchEffect(() => {
      state.tableData = props.tableData;
    });

    // 处理按钮点击事件
    const handleButtonClick = (scope, colIdx, btnIdx) => {
      const { row, $index: rowIndex } = scope;
      emit("handleButtonClick", { scope, colIdx, btnIdx });
    };

    // 格式化按钮列
    const formatBtn = (scope) => {
      const { row, $index: rowIndex } = scope;
      const btnArr = formatBtnObj;
      return btnArr[row.state];
    };

    const handleSizeChange = (pageSize) => {
      emit("handleSizeChange", pageSize);
    };

    const handlePageChange = (page) => {
      emit("handlePageChange", page);
    };

    const handleFilterTable = (form, _filterForm) => {
      emit("handleFilterTable", { search: form, btnInfo: _filterForm });
    };

    const resetFilterTable = (resetForm) => {
      emit("resetFilterTable", resetForm);
    };

    const isEmptyObject = obj => {
      return JSON.stringify(obj) === '{}' && obj.constructor === Object;
    }

    return () => (
      <div>
        <FilterTable
          filterForm={filterForm}
          onHandleFilterTable={handleFilterTable}
          resetFilterTable={resetFilterTable}
        ></FilterTable>
        <Table data={state.tableData} columns={columns}>
          {{
            btnSlot: (scope, col, colIdx) => {
              const _btnArr = isEmptyObject(formatBtnObj)
                ? col.btnArr
                : formatBtn(scope);

              return _btnArr?.map((btn, btnIdx) => (
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
              return <ElInput value={123}>123</ElInput>;
            },
          }}
        </Table>
        <Pagination
          data={state.tableData}
          page={pageInfo.page}
          total={pageInfo.total}
          pageSize={pageInfo.pageSize}
          onSizeChange={handleSizeChange}
          onPageChange={handlePageChange}
        />
      </div>
    );
  },
});
