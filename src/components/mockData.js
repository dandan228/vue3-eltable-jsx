// mockData.js

import Mock from 'mockjs';

const res = Mock.mock({
  'data|4': [
    {
      date: '@date("yyyy-MM-dd")',
      name: '@name',
      'state|0-3': 0,
      btn: '按钮@natural(1, 4)',
    },
  ],
});

export default res;
