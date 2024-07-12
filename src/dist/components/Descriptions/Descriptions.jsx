import { defineComponent } from "vue";
import {
  ElDescriptions,
  ElDescriptionsItem,
  ElButton,
  ElIcon,
} from "element-plus";
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
            {renderButton(s.btn, s)}
          </ElDescriptionsItem>
        ))}
      </ElDescriptions>
    );
  },
});
