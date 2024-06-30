import { ElPagination } from "element-plus";

export const Pagination = (props, { slots }) => {
  const { pageInfo } = props;


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
