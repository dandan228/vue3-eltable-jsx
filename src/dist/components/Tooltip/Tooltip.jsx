import { defineComponent } from "vue";
import { ElTooltip, ElIcon } from "element-plus";
import { Search } from "@element-plus/icons-vue";

export const Tooltip = defineComponent({
  name: "TooltipComponent",
  props: {
    tooltipInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit, slots }) {
    const { tooltipInfo } = props;

    return () => (
      <ElTooltip
        effect={tooltipInfo.effect}
        content={tooltipInfo.content}
        trigger={tooltipInfo.trigger}
        placement={tooltipInfo.placement}
      >
        {slots.default ? slots.default() : null}
      </ElTooltip>
    );
  },
});
