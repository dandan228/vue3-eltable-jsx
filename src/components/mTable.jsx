import { defineComponent, reactive, watchEffect } from "vue";
import { ElButton, ElInput, ElSwitch } from "element-plus";
import { Table } from "./table";
import { Search } from "./search";
import { Pagination } from "./paginate";

export default defineComponent({
  name: "MTable",

  props: {
    filterForm: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    pageInfo: {
      type: Object,
      default: () => ({}),
    },
    btnByStateMap: {
      type: Object,
      default: () => ({}),
    },
    btnByStateMapAt: {
      type: String,
      default: "",
    },
    tableMultiple: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    // 解构 props
    const {
      columns,
      filterForm,
      tableData,
      pageInfo,
      btnByStateMap,
      btnByStateMapAt,
      tableMultiple,
    } = props;

    // 当btnByStateMap传递了这个值，btnByStateMapAt这个就必须传
    if (Object.keys(btnByStateMap).length !== 0 && !btnByStateMapAt) {
      throw new Error(
        "btnByStateMapAt is required when btnByStateMap is provided"
      );
    }

    // 初始化响应式数据状态
    let state = reactive({
      tableData,
    });

    // 使用 watchEffect 监听 props.tableData 的变化，并更新 state.tableData
    watchEffect(() => {
      state.tableData = props.tableData;
    });

    // 处理按钮点击事件
    const tableBtnEvent = (scope, colIdx, btnIdx) => {
      const { row, $index: rowIndex } = scope;
      // 触发 tableBtnEvent 事件，并传递相关参数
      emit("tableBtnEvent", { scope, colIdx, btnIdx });
    };

    // 格式化按钮列，根据 btnByStateMap 中的配置生成按钮数组
    const formatBtn = (scope) => {
      const { row } = scope;
      const btnArr = btnByStateMap;
      return btnArr[row[btnByStateMapAt]];
    };

    // 处理页容量变化
    const pageSizeEvent = (pageSize) => {
      // 触发 pageSizeEvent 事件，并传递新的页容量
      emit("pageSizeEvent", pageSize);
    };

    // 处理页码变化
    const pageEvent = (page) => {
      // 触发 pageEvent 事件，并传递新的页码
      emit("pageEvent", page);
    };

    // 处理筛选表单提交
    const formEvent = (form, searchForm) => {
      // 触发 formEvent 事件，并传递筛选表单数据和按钮信息
      emit("formEvent", { search: form, btnInfo: searchForm });
    };

    // 重置筛选表单
    const resetSearch = (resetForm) => {
      // 触发 resetSearch 事件，并传递重置后的表单数据
      emit("resetSearch", resetForm);
    };

    // 判断对象是否为空对象
    const isEmptyObject = (obj) => {
      return JSON.stringify(obj) === "{}" && obj.constructor === Object;
    };

    // 渲染按钮插槽
    const renderButtons = (scope, col, colIdx) => {
      // 根据状态btnByStateMapAt值来展示对应的按钮
      const _btnArr =
        isEmptyObject(btnByStateMap) || !btnByStateMapAt
          ? col.btnArr
          : formatBtn(scope);

      // 渲染按钮数组
      return _btnArr?.map((btn, btnIdx) => (
        <ElButton
          type={btn.color}
          disabled={btn.disabled}
          onClick={() => tableBtnEvent(scope, colIdx, btnIdx)}
        >
          {btn.label}
        </ElButton>
      ));
    };

    const onInput = (val, row) => {
      emit("tableInput", val, row);
    };
    const onBlur = (val, row) => {
      emit("tableBlur", val, row);
    };
    const selectCheckbox = (row) => {
      emit("selectCheckbox", row);
    };
    const switchChange = (bln, row) => {
      emit("switchChange", bln, row);
    };

    // 渲染输入框插槽
    const renderInputSlot = (scope, col, colIdx) => {
      return (
        <ElInput
          v-model={scope.row[col.prop]}
          onInput={(val) => {
            onInput(val, scope.row);
          }}
          onBlur={(val) => {
            onBlur(val, scope.row);
          }}
        ></ElInput>
      );
    };
    const renderSwitchSlot = (scope, col, colIdx) => {
      return (
        <ElSwitch
          onChange={(bln) => switchChange(bln, scope.row)}
          v-model={scope.row[col.prop]}
        />
      );
    };

    // 渲染组件结构
    return () => (
      <div>
        {/* 渲染筛选表单组件 */}
        <Search
          filterForm={filterForm}
          onformEvent={formEvent}
          resetSearch={resetSearch}
        />
        {/* 渲染表格组件 */}
        <Table
          onSelectCheckbox={selectCheckbox}
          data={state.tableData}
          columns={columns}
          tableMultiple={tableMultiple}
        >
          {{
            btnSlot: renderButtons, // 渲染按钮插槽
            inputSlot: renderInputSlot, // 渲染输入框插槽
            switchSlot: renderSwitchSlot, // 渲染开关插槽
          }}
        </Table>
        {/* 渲染分页组件 */}
        <Pagination
          data={state.tableData}
          pageInfo={pageInfo}
          onSizeChange={pageSizeEvent}
          onPageChange={pageEvent}
        />
      </div>
    );
  },
});
