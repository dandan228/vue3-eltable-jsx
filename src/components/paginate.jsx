import { ElPagination } from "element-plus";

export const Pagination = (props, { slots }) => {
  const { data, pageSize, total } = props;

  const handleSizeChange = (val) => {
    props.onSizeChange(val);
  };

  const handleCurrentChange = (val) => {
    props.onPageChange(val);
  };

  return (
    <div>
      <ElPagination
        layout="total, sizes, prev, pager, next, jumper"
        total={total}
        pageSizes={[5, 10, 15, 20]}
        default-page-size={pageSize}
        onSizeChange={handleSizeChange}
        onCurrentChange={handleCurrentChange}
      />
    </div>
  );
};
