import {
  ElForm,
  ElFormItem,
  ElInput,
  ElButton,
  ElSwitch,
  ElDatePicker,
  ElSelect,
  ElOption,
  ElUpload,
  ElIcon,
  ElRadioGroup,
  ElRadio,
} from "element-plus";
import { Plus, Search } from "@element-plus/icons-vue";
import { defineComponent, reactive } from "vue";
import { isArrayProperty } from "../../utils/judgeType";
import "./Form.css";

export const Form = defineComponent({
  name: "FormComponent",
  props: {
    formColumns: {
      type: Array,
      required: true,
    },
    inline: {
      type: Boolean,
      default: true,
    },
    labelWidth: {
      type: Number,
      default: 0,
    },
    actionUrl: {
      type: String,
      default: "",
    },
    labelPosition: {
      type: String,
      default: "right",
    },
  },

  setup(props, { emit, expose }) {
    const { formColumns, inline, labelPosition, labelWidth, actionUrl } = props;

    const initForm = formColumns?.reduce((acc, item) => {
      if (item.prop) {
        // 当 item.defaultVal 为 number 0 时，不给赋值，所以加个判断
        acc[item.prop] = item.defaultVal !== undefined ? item.defaultVal : "";
      }
      return acc;
    }, {});

    const state = reactive({
      modelForm: initForm,
    });

    const formEvent = (btnInfo) => {
      emit("formEvent", { form: state.modelForm, btnInfo });
    };

    const resetSearch = () => {
      state.modelForm = {};
      emit("resetSearch", state.modelForm);
    };

    const shortcuts = [
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
    ];

    const onSuccess = (e) => {
      emit("onSuccess", e);
    };

    const radioChange = (e) => {
      emit("radioChange", e);
    };

    const inputBtnSearch = (val) => {
      emit("inputBtnSearch", val);
    };

    const resetModelForm = () => {
      state.modelForm = {};
    };

    expose({ resetModelForm });

    return () => (
      <ElForm
        model={state.modelForm}
        inline={inline}
        label-position={labelPosition}
        label-width={labelWidth}
      >
        {formColumns?.map((s, index) => (
          <ElFormItem label={s.filterType === "btn" ? "" : s.label} key={index}>
            {s.filterType === "input" && (
              <ElInput v-model={state.modelForm[s.prop]}>
                {{
                  append: s.appendBtn
                    ? () => (
                        <ElButton
                          onClick={() => {
                            inputBtnSearch(state.modelForm[s.prop]);
                          }}
                          icon={Search}
                        />
                      )
                    : null,
                }}
              </ElInput>
            )}
            {s.filterType === "date" && (
              <ElDatePicker
                v-model={state.modelForm[s.prop]}
                type="daterange"
                unlink-panels
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date"
                shortcuts={shortcuts}
                format="YYYY/MM/DD"
                value-format="YYYY-MM-DD"
              />
            )}
            {s.filterType === "select" && (
              <ElSelect
                v-model={state.modelForm[s.prop]}
                style={{ width: Boolean(s.width) ? `${s.width}px` : "240px" }}
              >
                {isArrayProperty(s, "option")
                  ? s.option.map((s, i) => (
                      <ElOption
                        key={s.value}
                        value={s.value}
                        label={s.label}
                      ></ElOption>
                    ))
                  : null}
              </ElSelect>
            )}
            {s.filterType === "switch" && (
              <ElSwitch v-model={state.modelForm[s.prop]} />
            )}
            {s.filterType === "upload" && (
              <ElUpload
                className="avatar-uploader"
                action={actionUrl}
                onSuccess={onSuccess}
              >
                <ElIcon>
                  <Plus />
                </ElIcon>
              </ElUpload>
            )}
            {s.filterType === "radio" && (
              <ElRadioGroup
                v-model={state.modelForm[s.prop]}
                onChange={radioChange}
              >
                {s.radioArr.map((r) => (
                  <ElRadio value={r.value} size={r.size} key={r.value}>
                    {r.label}
                  </ElRadio>
                ))}
              </ElRadioGroup>
            )}
            {s.filterType === "btn" &&
              s.btnArr.map((btn, btnIdx) => (
                <ElButton
                  onClick={() => {
                    if (btn.label === "重置") {
                      resetSearch();
                    } else {
                      formEvent(btn, btnIdx);
                    }
                  }}
                  key={btnIdx}
                  type={btn.color}
                >
                  {btn.label}
                </ElButton>
              ))}
          </ElFormItem>
        ))}
      </ElForm>
    );
  },
});
