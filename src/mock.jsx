import Mock from "mockjs";

// 模拟带有分页功能的接口
Mock.mock("/api/getList", "post", (options) => {
  const params = JSON.parse(options.body);

  // 模拟数据总数和每页条数
  const total = 20; // 假设总数据量为20条
  const pageSize = params.pageSize || 5; // 每页默认5条数据
  const pageNum = params.pageNum || 1; // 默认第一页

  // 模拟生成当前页的数据
  const data = Mock.mock({
    [`data|${pageSize}`]: [
      {
        date:
          params.date && params.date.length >= 2
            ? [`${params.date[0]}`, `${params.date[1]}`]
            : ['2024-05-02', '2024-05-03'],
        name: params.name || "@name", // 使用传递的 name 参数，如果没有传递则生成随机名称
        state: params.state !== undefined ? params.state : "@integer(0, 3)", // 根据传递的 state 参数进行过滤，否则生成随机状态值
        btn: "按钮@natural(1, 4)",
        isTrue: Mock.Random.boolean(),
        imageUrl: "@image('200x100', '@color', 'el-table-jsx')"
      },
    ],
  }).data;

  return {
    code: 200,
    message: "Success",
    data: {
      total,
      pageNum,
      pageSize,
      list: data,
    },
  };
});
