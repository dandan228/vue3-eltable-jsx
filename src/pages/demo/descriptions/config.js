import { QuestionFilled } from "@element-plus/icons-vue";

export const desInfo = data => {
    console.log('data0-------', data);
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
                    icon: QuestionFilled,
                    content: '提示'
                }
            },
            {
                label: '提示',
                val: '2',
                btn: {
                    type: "primary",
                    link: true,
                    txt: "修改"
                }
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
    }
}