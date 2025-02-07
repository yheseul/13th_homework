import Button from "../Button/Button";
import useBoardsDetail from "../../../commons/hooks/useBoardsDetail";
import LikeButton from "../LikeButton/LikeButton";
import DisLikeButton from "../DisLikeButton/DisLikeButton";
import Youtube from "../Youtube/Youtube";
import Divider from "../Divider";
import {
  EnvironmentOutlined,
  LinkOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import BoardsDetailImage from "./BoardsDetailImage";
import Contents from "../Contents";

export default function BoardsDetail() {
  const { boardId, boardData } = useBoardsDetail();
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6">
      <div className="text-3xl font-bold text-black">{boardData?.title}</div>
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex items-center gap-1 text-xl">
            <UserOutlined />
            <p>{boardData?.writer}</p>
          </div>
          <div className="flex items-center justify-end gap-2 text-sm font-normal text-grayMuted">
            <div>{boardData?.createdAt.slice(0, 10).replaceAll("-", ".")}</div>
          </div>
        </div>
        <Divider />
        <div className="flex justify-end gap-2 text-xl">
          <LinkOutlined />
          <EnvironmentOutlined />
        </div>
      </div>
      <BoardsDetailImage images={boardData?.images || undefined} />
      <Contents contents={boardData?.contents} />
      <Youtube youtubeUrl={boardData?.youtubeUrl || undefined} />
      <div className="flex items-center justify-center gap-6">
        <DisLikeButton />
        <LikeButton />
      </div>
      <div className="flex items-center justify-center gap-6">
        <Button
          color="white"
          id="list"
          onClick={() => router.push("/boards")}
        />
        <Button
          color="white"
          id="edit"
          onClick={() => router.push(`${boardId}/edit`)}
        />
      </div>
    </div>
  );
}
