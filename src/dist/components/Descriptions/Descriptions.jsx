import { defineComponent } from "vue";
import {
  ElDescriptions,
  ElDescriptionsItem,
  ElButton,
  ElIcon,
  ElInput,
  ElSelect,
  ElOption
} from "element-plus";
import { isArrayProperty } from "../../utils/judgeType";
import { Tooltip } from "../../index";

export const Descriptions = defineComponent({
  name: "DescriptionsComponent",
  props: {
    desInfo: {
      type: Object,
      default: () => ({}),
    },
    column: {
      type: Number,
      default: 3,
    },
  },
  setup(props, { emit }) {
    const { desInfo, column } = props;

    const desRightClick = (item) => {
      emit("desRightClick", item);
    };

    const selectChange = (sour, e) => {
      emit("selectChange",sour, e);
    }

    const renderIcon = (s) => {
      if (s?.tooltipInfo?.icon) {
        return (
          <Tooltip tooltipInfo={s.tooltipInfo}>
            <ElIcon style={{ cursor: "pointer" }}>
              <s.tooltipInfo.icon />
            </ElIcon>
          </Tooltip>
        );
      }
      return null;
    };

    const renderButton = (btn, row) => {
      if (btn) {
        return (
          <ElButton
            style={{ verticalAlign: "middle" }}
            type={btn.type}
            link
            onClick={() => desRightClick(row)}
          >
            {btn.txt}
          </ElButton>
        );
      }
      return null;
    };

    const renderFormItem = (s) => {
      const inputField = (
        <ElInput
          v-model={s.defaultVal}
          disabled={s.disabled}
          type={s.type}
          size={s.size}
          rows={s.rows}
          placeholder={s.placeholder}
        ></ElInput>
      );

      const selectField = (
        <ElSelect
          v-model={s.defaultVal}
          multiple={s.multiple}
          style={{ width: s.width ? `${s.width}px` : "240px" }}
          onChange={(e) => {
            selectChange(s, e);
          }}
        >
          {isArrayProperty(s, "option") &&
            s.option.map((opt) => (
              <ElOption key={opt.value} value={opt.value} label={opt.label} />
            ))}
        </ElSelect>
      );

      const fieldTypeMap = {
        input: inputField,
        select: selectField,
      };

      return fieldTypeMap[s.componentType];
    };

    return () => (
      <ElDescriptions title={desInfo.title} column={column}>
        {desInfo?.desArr?.map((s, q) => (
          <ElDescriptionsItem
            key={q}
            label={
              <span style={{ display: "inline-flex", alignItems: "center" }}>
                {renderIcon(s)}
                {s.label}
              </span>
            }
          >
            {s.val}
            <span className="des-style">
              {renderFormItem(s)}
            </span>
            {renderButton(s.btn, s)}
          </ElDescriptionsItem>
        ))}
      </ElDescriptions>
    );
  },
});
