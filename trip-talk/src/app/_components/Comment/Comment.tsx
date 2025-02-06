import { ICommentList } from "../../../types/components.type";
import styles from "./styles.module.css";
import useComment from "../../../commons/hooks/UseComment";
import StarRating from "../StarRating/StarRating";
import CommentEditForm from "../CommentEditForm/CommentEditForm";
import { CloseOutlined, EditOutlined, UserOutlined } from "@ant-design/icons";

export default function Comment(props: ICommentList) {
  const { onClickEditComment, onClickDeleteComment, commentData, isEdit } =
    useComment(props);

  return (
    <li className={styles.comment_layout}>
      {!isEdit ? (
        <div>
          <div className={styles.action_container}>
            <div>
              <div className={styles.profile}>
                <UserOutlined />
                <span>{commentData.writer}</span>
              </div>
              <div className={styles.rating_stars}>
                <StarRating defaultValue={commentData.rating} />
              </div>
            </div>
            <div>
              <EditOutlined
                className="cursor-pointer"
                onClick={onClickEditComment}
              />
              <CloseOutlined
                className="cursor-pointer"
                onClick={onClickDeleteComment}
              />
            </div>
          </div>
          <div>{commentData.contents}</div>
          <span className={styles.date}>
            {commentData.createdAt.slice(0, 10).replaceAll("-", ".")}
          </span>
        </div>
      ) : (
        <div>
          <CommentEditForm commentData={commentData} />
        </div>
      )}
    </li>
  );
}
