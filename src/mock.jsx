import Mock from "mockjs";
import { reactive } from "vue";

// 创建一个响应式数据对象
const state = reactive({
  data: [],
});

// 模拟带有分页功能的接口
Mock.mock("/api/getList", "post", (options) => {
  const params = JSON.parse(options.body);

  // 模拟数据总数和每页条数
  const total = 20; // 假设总数据量为20条
  const pageSize = 5; // 每页固定为5条数据
  const page = params.page || 1; // 默认第一页

  // 模拟生成当前页的数据
  state.data = Mock.mock({
    [`data|${pageSize}`]: [
      {
        date:
          params.date && params.date.length >= 2
            ? `${params.date[0]} ${params.date[1]}`
            : Mock.Random.date("yyyy-MM-dd"), // 使用 Mock.js 随机生成日期
        name: params.name || Mock.Random.cname(), // 使用 Mock.js 随机生成姓名
        state:
          params.state !== undefined ? params.state : Mock.Random.integer(0, 3), // 根据传递的 state 参数进行过滤，否则生成随机状态值
        btn: "按钮" + Mock.Random.natural(1, 4), // 使用 Mock.js 随机生成按钮标签
        isTrue: Mock.Random.boolean(), // 使用 Mock.js 随机生成 true 或 false
      },
    ],
  }).data;

  // 检查生成的数据中是否全部为 true 或全部为 false，如果是则重新生成一次，确保数据随机性
  const allTrue = state.data.every((item) => item.isTrue === true);
  const allFalse = state.data.every((item) => item.isTrue === false);
  if (allTrue || allFalse) {
    state.data.forEach((item) => {
      item.isTrue = Mock.Random.boolean();
    });
  }

  // 返回模拟的接口数据
  return {
    code: 200,
    message: "Success",
    data: {
      total,
      page,
      pageSize,
      list: state.data,
    },
  };
});
