import Mock from 'mockjs';

// 模拟带有分页功能的接口
Mock.mock('/api/getList', 'post', (options) => {
  const params = JSON.parse(options.body);

  // 模拟数据总数和每页条数
  const total = 20; // 假设总数据量为20条
  const pageSize = params.pageSize || 5; // 每页默认10条数据
  const page = params.page || 1; // 默认第一页

  // 模拟生成当前页的数据
  const data = Mock.mock({
    [`data|${pageSize}`]: [
      {
        date: '@date("yyyy-MM-dd")',
        name: params.name || '@name',
        'state|0-3': 0,
        btn: '按钮@natural(1, 4)',
      },
    ],
  }).data;

  return {
    code: 200,
    message: 'Success',
    data: {
      total,
      page,
      pageSize,
      list: data,
    },
  };
});
