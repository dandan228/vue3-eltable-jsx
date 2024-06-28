import { defineComponent, reactive, watchEffect } from "vue";
import { ElButton, ElInput } from "element-plus";
import { Table } from "./table";
import { FilterTable } from "./filterTable";
import { Pagination } from "./paginate";

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
    // 解构 props
    const { columns, filterForm, tableData, pageInfo, formatBtnObj } = props;

    // 初始化响应式数据状态
    let state = reactive({
      tableData,
    });

    // 使用 watchEffect 监听 props.tableData 的变化，并更新 state.tableData
    watchEffect(() => {
      state.tableData = props.tableData;
    });

    // 处理按钮点击事件
    const handleButtonClick = (scope, colIdx, btnIdx) => {
      const { row, $index: rowIndex } = scope;
      // 触发 handleButtonClick 事件，并传递相关参数
      emit("handleButtonClick", { scope, colIdx, btnIdx });
    };

    // 格式化按钮列，根据 formatBtnObj 中的配置生成按钮数组
    const formatBtn = (scope) => {
      const { row } = scope;
      const btnArr = formatBtnObj;
      return btnArr[row.state];
    };

    // 处理页容量变化
    const handleSizeChange = (pageSize) => {
      // 触发 handleSizeChange 事件，并传递新的页容量
      emit("handleSizeChange", pageSize);
    };

    // 处理页码变化
    const handlePageChange = (page) => {
      // 触发 handlePageChange 事件，并传递新的页码
      emit("handlePageChange", page);
    };

    // 处理筛选表单提交
    const handleFilterTable = (form, _filterForm) => {
      // 触发 handleFilterTable 事件，并传递筛选表单数据和按钮信息
      emit("handleFilterTable", { search: form, btnInfo: _filterForm });
    };

    // 重置筛选表单
    const resetFilterTable = (resetForm) => {
      // 触发 resetFilterTable 事件，并传递重置后的表单数据
      emit("resetFilterTable", resetForm);
    };

    // 判断对象是否为空对象
    const isEmptyObject = (obj) => {
      return JSON.stringify(obj) === '{}' && obj.constructor === Object;
    };

    // 渲染按钮插槽
    const renderButtons = (scope, col, colIdx) => {
      // 根据 formatBtnObj 判断是否需要格式化按钮
      const _btnArr = isEmptyObject(formatBtnObj)
        ? col.btnArr
        : formatBtn(scope);

      // 渲染按钮数组
      return _btnArr?.map((btn, btnIdx) => (
        <ElButton
          type={btn.color}
          disabled={btn.disabled}
          onClick={() => handleButtonClick(scope, colIdx, btnIdx)}
        >
          {btn.label}
        </ElButton>
      ));
    };

    // 渲染输入框插槽
    const renderInputSlot = (scope, col, colIdx) => {
      return <ElInput value={123}>123</ElInput>;
    };

    // 渲染组件结构
    return () => (
      <div>
        {/* 渲染筛选表单组件 */}
        <FilterTable
          filterForm={filterForm}
          onHandleFilterTable={handleFilterTable}
          resetFilterTable={resetFilterTable}
        />
        {/* 渲染表格组件 */}
        <Table data={state.tableData} columns={columns}>
          {{
            btnSlot: renderButtons,  // 渲染按钮插槽
            inputSlot: renderInputSlot  // 渲染输入框插槽
          }}
        </Table>
        {/* 渲染分页组件 */}
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
