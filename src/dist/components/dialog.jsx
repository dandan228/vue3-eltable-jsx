import { ElDialog, ElButton } from "element-plus";

export const Dialog = (props, { slots, emit }) => {
  let {
    dialogVisible,
    title,
    width = "",
    cancelLabel = "取消",
    confirmLabel = "确定",
  } = props;

  const cancel = () => {
    emit("cancel");
  };

  const confirm = () => {
    emit("confirm");
  };

  const closeDialog = () => {
    emit('closeDialog'); 
  }

  return (
    <ElDialog
      modelValue={dialogVisible}
      title={title}
      width={width}
      modal-append-to-body={false}
      onClose={closeDialog}
    //   v-slots={{
    //     footer: () => (
    //       <div class="dialog-footer">
    //         <ElButton onClick={cancel}>{cancelLabel}</ElButton>
    //         <ElButton onClick={confirm} type="primary">
    //           {confirmLabel}
    //         </ElButton>
    //       </div>
    //     ),
    //   }}
    >
      {slots.default && slots.default()}
    </ElDialog>
  );
};
