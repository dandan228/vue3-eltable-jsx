import { reactive, onMounted, defineComponent } from "vue";
import { MTable, Dialog, Search } from "../dist/components/index.js";
import {
  columns,
  btnByStateMap,
  searchColumns,
  dialogColumns,
} from "./config.js";
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
      dialogVisible: false,
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

    const formEvent = (e) => {
      // search=>操作栏form, btnInfo=》操作栏按钮信息
      const { search, btnInfo } = e;
      // console.log("search", search);
      // console.log("btnInfo", btnInfo);

      const eventsMap = {
        0: () => {
          // 保存当前筛选参数
          state.lastFilter = search;
          state.pageInfo.page = 1;
          updateTableData();
        },
        1: () => {
          state.dialogVisible = true;
        },
      };

      eventsMap[btnInfo.btnId]();
    };

    const diaFormEvent = (form, btnInfo) => {
      console.log("diaFormEvent---search", form);
      console.log("diaFormEvent---btnInfo", btnInfo);
      const eventsMap = {
        0: () => {
          state.dialogVisible = false;
        },
        1: () => {
          diaConfirm(form);
        },
      };
      eventsMap[btnInfo.btnId]();
    };

    const diaConfirm = (form) => {
      console.log("diaConfirm", form);
      state.dialogVisible = false
    };

    const tableBtnEvent = (e) => {
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

    const pageSizeEvent = (pageSize) => {
      // pageSize=>页容量
      state.pageInfo.pageSize = pageSize;
      updateTableData();
    };
    const pageEvent = (page) => {
      // pageSize=>当前页
      state.pageInfo.page = page;
      updateTableData();
    };

    const resetSearch = (resetForm) => {
      state.pageInfo.page = 1; // 重置页码为1
      state.pageInfo.pageSize = 5; // 重置页容量为5
      state.lastFilter = resetForm;
      updateTableData();
    };

    const tableInput = (val, row) => {
      // val=>当前值
      // row=>当前这一行数据
      console.log("tableInput--val", val);
      console.log("tableInput--row", row);
    };
    const tableBlur = (val, row) => {
      console.log("tableBlur--val", val);
      console.log("tableBlur--row", row);
    };

    const selectCheckbox = (row) => {
      console.log("selectCheckbox--row", row);
    };

    const switchChange = (bln, row) => {
      console.log("switchChange--bln", bln);
      console.log("switchChange--row", row);
    };

    const sortChange = (sort) => {
      console.log("sort", sort);
    };

    const rowItemEvent = (row) => {
      console.log("rowItemEvent--", row);
    };

    return () => (
      <div>
        <Dialog
          dialogVisible={state.dialogVisible}
          title={"对话框"}
          width={500}
        >
          <Search
            searchColumns={dialogColumns}
            inline={false}
            onFormEvent={diaFormEvent}
          />
        </Dialog>
        <MTable
          columns={columns}
          searchColumns={searchColumns}
          tableData={state.tableData}
          pageInfo={state.pageInfo}
          btnByStateMap={btnByStateMap}
          btnByStateMapAt={"state"}
          defaultSort={{
            prop: "date",
            order: "descending",
          }}
          tableMultiple
          onFormEvent={formEvent}
          onTableBtnEvent={tableBtnEvent}
          onPageSizeEvent={pageSizeEvent}
          onPageEvent={pageEvent}
          onResetSearch={resetSearch}
          onTableInput={tableInput}
          onTableBlur={tableBlur}
          onSelectCheckbox={selectCheckbox}
          onSwitchChange={switchChange}
          onSortChange={sortChange}
          onRowItemEvent={rowItemEvent}
        />
      </div>
    );
  },
});
