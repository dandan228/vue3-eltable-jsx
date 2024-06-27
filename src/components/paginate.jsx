import { ElPagination } from "element-plus";

export const Pagination = (props, { slots }) => {
  const { data } = props;

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
        total={data.length}
        pageSizes={[1, 2, 3, 4]}
        default-page-size={1}
        onSizeChange={handleSizeChange}
        onCurrentChange={handleCurrentChange}
      />
    </div>
  );
};
