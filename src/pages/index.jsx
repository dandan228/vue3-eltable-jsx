import { reactive, onMounted, defineComponent } from "vue";
import MTable from "../components/mTable.jsx";
import { _columns, _data, _filterForm } from "./config.js";
import axiox from "axios";

export default defineComponent({
  setup(props, { emit }) {
    const state = reactive({
      tableData: [],
      total: 0,
      pageInfo: {
        total: 0,
        pageSize: 5,
        page: 1,
      },
      // 保存当前筛选参数
      lastFilter: {},
    });

    const fetchTableData = (params) => {
      axiox.post("/api/getList", params).then((res) => {
        const { data } = res;
        state.tableData = data.data.list;
        state.pageInfo.total = data.data.total;
      });
    };

    onMounted(() => {
      fetchTableData({});
    });

    const updateTableData = () => {
      fetchTableData({
        page: state.pageInfo.page,
        pageSize: state.pageInfo.pageSize,
        ...state.lastFilter,
      });
    };

    const handleFilterTable = (e) => {
      // search=>操作栏form, btnInfo=》操作栏按钮信息
      const { search, btnInfo } = e;
      state.pageInfo.page = 1;
      console.log("search-------", search);
      // 保存当前筛选参数
      state.lastFilter = search;
      updateTableData();
    };

    const handleButtonClick = (e) => {
      // btnIdx=>table栏，按钮对应的下标
      // colIdx=>table栏，当前列的索引
      // $index=>table栏，当前行下标
      // row=>table栏，当前行数据
      const {
        btnIdx,
        colIdx,
        scope: { $index, row },
      } = e;
    };

    const handleSizeChange = (pageSize) => {
      // pageSize=>页容量
      state.pageInfo.pageSize = pageSize;
      updateTableData();
    };
    const handlePageChange = (page) => {
      // pageSize=>当前页
      state.pageInfo.page = page;
      updateTableData();
    };

    const resetFilterTable = (resetForm) => {
      state.pageInfo.page = 1; // 重置页码为1
      state.pageInfo.pageSize = 5; // 重置页容量为5
      state.lastFilter = resetForm;
      updateTableData();
    };

    const tableInput = (val, row) => {
      // val=>当前值
      // row=>当前这一行数据
    };
    const tableBlur = (val, row) => {};

    return () => (
      <MTable
        columns={_columns}
        filterForm={_filterForm}
        tableData={state.tableData}
        pageInfo={state.pageInfo}
        onHandleFilterTable={handleFilterTable}
        onHandleButtonClick={handleButtonClick}
        onHandleSizeChange={handleSizeChange}
        onHandlePageChange={handlePageChange}
        onResetFilterTable={resetFilterTable}
        onTableInput={tableInput}
        onTableBlur={tableBlur}
      />
    );
  },
});
