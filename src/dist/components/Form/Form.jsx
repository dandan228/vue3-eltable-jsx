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
  ElDialog,
  ElCheckboxGroup,
  ElCheckbox,
} from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { defineComponent, reactive, ref, watchEffect } from "vue";
import { isArrayProperty } from "../../utils/judgeType";
import "./Form.css";

export const Form = defineComponent({
  name: "FormComponent",
  props: {
    formColumns: {
      type: Array,
      required: true,
      default: () => [],
    },
    inline: {
      type: Boolean,
      default: true,
    },
    labelWidth: {
      type: Number,
      default: 0,
    },
    labelPosition: {
      type: String,
      default: "right",
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
  setup(props, { emit, expose }) {
    const { formColumns, inline, labelPosition, labelWidth, shortcuts } = props;

    let initForm = {};

    const state = reactive({
      modelForm: {},
    });

    // 合并对象，优先使用第二个对象
    const mergeObjects = (obj1, obj2) => {
      const result = { ...obj1 };
      for (const key in obj2) {
        if (obj2[key] !== "" && obj2[key] !== undefined) {
          result[key] = obj2[key];
        }
      }
      return result;
    };

    const updateModelForm = (lastModelForm) => {
      initForm = formColumns.reduce((acc, item) => {
        if (item.prop) {
          // 当 item.defaultVal 为 number 0 时，不给赋值，所以加个判断
          acc[item.prop] = item.defaultVal !== undefined ? item.defaultVal : "";
        }
        return acc;
      }, {});

      state.modelForm = mergeObjects(lastModelForm, initForm);
    };

    // 需要监听formColumns是否改变，当改变了需要重新赋值
    watchEffect(() => {
      updateModelForm(state.modelForm);
    });

    const formEvent = (btnInfo, formEl) => {
      emit("formEvent", { form: state.modelForm, btnInfo, formEl });
    };

    const resetSearch = () => {
      state.modelForm = {};
      emit("resetSearch", state.modelForm);
    };

    const radioChange = (sour, e) => {
      emit("radioChange", sour, e);
    };
    const checkboxChange = (sour, e) => {
      emit("checkboxChange", sour, e);
    };

    const inputChange = (sour, e) => {
      emit("inputChange",sour, e);
    }

    const inputBtnSearch = (sour, val, modelForm) => {
      emit("inputBtnSearch", sour, val, modelForm);
    };

    const resetModelForm = () => {
      state.modelForm = {};
      // 清空表单校验及初始值
      // formRef.value.clearValidate()
      formRef.value.resetFields();
    };

    const stateUpload = reactive({
      imgDialogVisible: false,
      curPic: "",
    });

    const imgSuccess = (res, sour) => {
      emit("imgSuccess", res, sour);
    };

    const imgPreview = (uploadFile) => {
      stateUpload.curPic = uploadFile.url;
      stateUpload.imgDialogVisible = true;
    };

    const imgRemove = (uploadFile, uploadFiles, sour) => {
      emit("imgRemove", uploadFile, uploadFiles, sour);
    };

    const beforeUpload = (rawFile, sour) => {
      emit("beforeUpload", rawFile, sour);
    }

    expose({ resetModelForm });

    const inputSlot = (icon, text, click, prop, s, modelForm) => {
      if (icon) {
        return () => (
          <ElButton
            onClick={() => {
              click(s, state.modelForm[prop], modelForm);
            }}
            icon={icon}
          />
        );
      } else if (text) {
        return () => (
          <span
            onClick={() => {
              click(s, state.modelForm[prop], modelForm);
            }}
            style={{ cursor: "pointer" }}
          >
            {text}
          </span>
        );
      } else {
        return null;
      }
    };

    const renderFormItem = (s, index, modelForm, formRef) => {
      const inputField = (
        <ElInput
          v-model={state.modelForm[s.prop]}
          disabled={s.disabled}
          type={s.type}
          size={s.size}
          rows={s.rows}
          maxlength={s.maxlength}
          minlength={s.minlength}
          show-word-limit={s.showWordLimit}
          placeholder={s.placeholder}
          v-slots={{
            prepend: inputSlot(
              s.prependIcon,
              s.prependTxt,
              inputBtnSearch,
              s.prop,
              s,
              modelForm
            ),
            append: inputSlot(
              s.appendIcon,
              s.appendTxt,
              inputBtnSearch,
              s.prop,
              s,
              modelForm
            ),
          }}
        ></ElInput>
      );

      const dateField = (
        <ElDatePicker
          v-model={state.modelForm[s.prop]}
          type={s.dateType || 'datetimerange'}
          unlink-panels
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          shortcuts={shortcuts}
          format={s.dateFormat || "YYYY-MM-DD HH:mm:ss" }
          value-format={s.dateFormat || "YYYY-MM-DD HH:mm:ss" }
          default-time={s.defaultTime || [new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 2, 1, 23, 59, 59)]}
        />
      );

      const selectField = (
        <ElSelect
          v-model={state.modelForm[s.prop]}
          multiple={s.multiple}
          style={{ width: s.width ? `${s.width}px` : "240px" }}
          onChange={(e) => {
            inputChange(s, e);
          }}
        >
          {isArrayProperty(s, "option") &&
            s.option.map((opt) => (
              <ElOption key={opt.value} value={opt.value} label={opt.label} />
            ))}
        </ElSelect>
      );

      const switchField = <ElSwitch v-model={state.modelForm[s.prop]} />;

      const uploadField = (
        <div>
          <ElUpload
            className={`avatar-uploader ${
              s?.fileList?.length === s?.limit && s.limit ? "noBlock" : ""
            }`}
            action={s?.actionUrl}
            listType={s?.listType || "picture-card"}
            limit={s?.limit || 1}
            fileList={s?.fileList}
            headers={s?.headers}
            onSuccess={(e)=>imgSuccess(e, s)}
            onPreview={(uploadFile)=>imgPreview(uploadFile, s)}
            beforeUpload={(rawFile)=>beforeUpload(rawFile, s)}
            onRemove={(uploadFile, uploadFiles)=>imgRemove(uploadFile, uploadFiles, s)}
          >
            <ElIcon>
              <Plus />
            </ElIcon>
          </ElUpload>
          <ElDialog
            modelValue={stateUpload?.imgDialogVisible}
            width={s?.imgDialogWidth || 400}
            height={400}
            modal-append-to-body={false}
            onClose={() => (stateUpload.imgDialogVisible = false)}
          >
            <img src={stateUpload?.curPic} alt="Image Preview" />
          </ElDialog>
        </div>
      );

      const radioField = (
        <ElRadioGroup
          v-model={state.modelForm[s.prop]}
          onChange={(e) => {
            radioChange(s, e);
          }}
        >
          {s.radioArr?.map((r) => (
            <ElRadio value={r.value} size={r.size} key={r.value}>
              {r.label}
            </ElRadio>
          ))}
        </ElRadioGroup>
      );


      const checkboxField = (
        <ElCheckboxGroup
          v-model={state.modelForm[s.prop]}
          onChange={(e) => {
            checkboxChange(s, e);
          }}
        >
          {s.checkboxArr?.map((r) => (
            <ElCheckbox value={r.value} size={r.size} key={r.value} disabled={r.disabled}>
              {r.label}
            </ElCheckbox>
          ))}
        </ElCheckboxGroup>
      );

      const buttonField = s.btnArr
        ? s.btnArr.map((btn, btnIdx) => (
            <ElButton
              icon={btn.icon}
              disabled={btn.disabled}
              onClick={() =>
                btn.label === "重置" ? resetSearch() : formEvent(btn, formRef)
              }
              key={btnIdx}
              type={btn.color}
            >
              {btn.label}
            </ElButton>
          ))
        : null;

      const fieldTypeMap = {
        input: inputField,
        date: dateField,
        select: selectField,
        switch: switchField,
        upload: uploadField,
        radio: radioField,
        checkbox: checkboxField,
        btn: buttonField,
      };

      return s.vIf !== false ? (
        <ElFormItem
          label={s.filterType === "btn" ? "" : s.label}
          key={index}
          rules={s.rules}
          prop={s.prop}
        >
          {fieldTypeMap[s.filterType]}
        </ElFormItem>
      ) : null;
    };

    const formRef = ref(null);

    return () => (
      <ElForm
        ref={formRef}
        model={state.modelForm}
        inline={inline}
        label-position={labelPosition}
        label-width={labelWidth}
      >
        {formColumns.map((s, index) =>
          renderFormItem(s, index, state.modelForm, formRef)
        )}
      </ElForm>
    );
  },
});
