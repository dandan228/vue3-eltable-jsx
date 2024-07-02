import { ElPagination } from "element-plus";

export const Pagination = (props, { slots }) => {
  let {
    pageInfo = {
      total: 0,
      page: 1,
      pageSize: 10,
    },
  } = props;

  // 判断对象是否为空对象
  const isEmptyObject = (obj) => {
    return JSON.stringify(obj) === "{}" && obj.constructor === Object;
  };

  if (isEmptyObject(pageInfo)) {
    pageInfo = {
      total: 0,
      page: 1,
      pageSize: 10,
    };
  }

  const pageSizeEvent = (val) => {
    props.onSizeChange(val);
  };

  const curPageChange = (val) => {
    props.onPageChange(val);
  };

  return (
    <div>
      <ElPagination
        layout="total, sizes, prev, pager, next, jumper"
        total={pageInfo.total}
        pageSizes={[5, 10, 15, 20]}
        currentPage={pageInfo.page}
        pageSize={pageInfo.pageSize}
        onSizeChange={pageSizeEvent}
        onCurrentChange={curPageChange}
      />
    </div>
  );
};
