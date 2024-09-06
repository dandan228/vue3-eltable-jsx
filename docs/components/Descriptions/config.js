import { QuestionFilled } from "@element-plus/icons-vue";
import { markRaw } from 'vue';

export const desInfo = data => {
    return {
        title: '概要消息',
        desArr: [
            {
                label: '提示',
                val: data.tip,
                btn: {
                    type: "primary",
                    link: true,
                    txt: "修改"
                },
                tooltipInfo: {
                    icon: markRaw(QuestionFilled),
                    content: '提示'
                },
                componentType: 'select',
                option: [
                    { label: "全部", value: 0 },
                    { label: "通过", value: 1 },
                    { label: "取消", value: 2 },
                    { label: "禁用", value: 3 },
                ],
                defaultVal: 0,
            },
            {
                label: '提示',
                val: '2',
                btn: {
                    type: "primary",
                    link: true,
                    txt: "修改"
                },
            },
            {
                label: '提示',
                val: '3',
            },
            {
                label: '提示',
                val: '4',
            },
            {
                label: '提示',
                val: '5',
            },
        ]
    };
};
