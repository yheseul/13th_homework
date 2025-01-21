import { useState } from "react";

export default function useIsEditComments() {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEditComment = () => {
    setIsEdit(!isEdit);
  };

  return {
    onClickEditComment,
    isEdit,
  };
}
