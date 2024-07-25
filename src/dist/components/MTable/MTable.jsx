import { defineComponent, reactive, watchEffect } from "vue";
import { ElButton, ElInput, ElSwitch, ElTag } from "element-plus";
import { Form, Table, Pagination } from "../../index";
import { isEmptyObject } from "../../utils/judgeType";

export default defineComponent({
  name: "MTable",

  props: {
    formColumns: {
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
    border: {
      type: Boolean,
      default: false,
    },
    defaultSort: {
      type: Object,
      default: () => ({}),
    },
    shortcuts: {
      type: Array,
      default: () => [
        {
          text: "Last week",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          },
        },
        {
          text: "Last month",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          },
        },
        {
          text: "Last 3 months",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          },
        },
      ],
    },
  },

  setup(props, { emit }) {
    // 解构 props
    const {
      columns,
      formColumns,
      tableData,
      pageInfo,
      btnByStateMap,
      btnByStateMapAt,
      tableMultiple,
      defaultSort,
      shortcuts,
      border,
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
    const tableBtnEvent = (scope, colIdx, btn) => {
      const { row, $index: rowIndex } = scope;
      // 触发 tableBtnEvent 事件，并传递相关参数
      emit("tableBtnEvent", { scope, colIdx, btn });
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
    const pageEvent = (pageNum) => {
      // 触发 pageEvent 事件，并传递新的页码
      emit("pageEvent", pageNum);
    };

    // 处理筛选表单提交
    const formEvent = (e) => {
      // 触发 formEvent 事件，并传递筛选表单数据和按钮信息
      emit("formEvent", e);
    };

    // 重置筛选表单
    const resetSearch = (resetForm) => {
      // 触发 resetSearch 事件，并传递重置后的表单数据
      emit("resetSearch", resetForm);
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
          onClick={() => tableBtnEvent(scope, colIdx, btn)}
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
    const sortChange = (sort) => {
      emit("sortChange", sort);
    };
    const switchChange = (bln, row) => {
      emit("switchChange", bln, row);
    };
    const rowItemEvent = (row, curVal) => {
      emit("rowItemEvent", row, curVal);
    };
    const radioChange = (sour, e) => {
      emit("radioChange", sour, e);
    };
    const inputBtnSearch = (sour, val, modelForm) => {
      emit("inputBtnSearch", sour, val, modelForm);
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
    const renderImgSlot = (scope, col, colIdx) => {
      return (
        <img
          src={scope.row[col.prop]}
          style={{
            width: col.imgWidth ? `${col.imgWidth}px` : "50px",
            height: col.imgHeight ? `${col.imgHeight}px` : "50px",
          }}
        />
      );
    };
    const renderTagSlot = (scope, col, colIdx, dictItem) => {
      return (
        <ElTag type={dictItem.color} size={dictItem.size}>
          {dictItem.label}
        </ElTag>
      );
    };

    // 渲染组件结构
    return () => (
      <div>
        {/* 渲染筛选表单组件 */}
        <Form
          formColumns={formColumns}
          shortcuts={shortcuts}
          onFormEvent={formEvent}
          onResetSearch={resetSearch}
          onRadioChange={radioChange}
          onInputBtnSearch={inputBtnSearch}
        />
        {/* 渲染表格组件 */}
        {columns.length > 0 ? (
          <Table
            onSelectCheckbox={selectCheckbox}
            onSortChange={sortChange}
            onRowItemEvent={rowItemEvent}
            data={state.tableData}
            columns={columns}
            tableMultiple={tableMultiple}
            defaultSort={defaultSort}
            border={border}
          >
            {{
              btnSlot: renderButtons,
              inputSlot: renderInputSlot,
              switchSlot: renderSwitchSlot,
              imgSlot: renderImgSlot,
              tagSlot: renderTagSlot,
            }}
          </Table>
        ) : null}

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
