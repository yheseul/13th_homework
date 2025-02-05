"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import useBoardsDetail from "../../../commons/hooks/useBoardsDetail";
import LikeButton from "../LikeButton/LikeButton";
import DisLikeButton from "../DisLikeButton/DisLikeButton";
import Youtube from "../Youtube/Youtube";
import Divider from "../Divider";

export default function BoardsDetail() {
  const { boardId, boardData } = useBoardsDetail();

  return (
    <div className="flex flex-col gap-6">
      <div className="text-3xl font-bold text-black">{boardData?.title}</div>
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex items-center gap-1">
            <Image
              src="/svgs/profileIcon.svg"
              alt="profileIcon"
              width={24}
              height={24}
            />
            <p>{boardData?.writer}</p>
          </div>
          <div className="flex items-center justify-end gap-2 text-sm font-normal text-grayMuted">
            <div>{boardData?.createdAt.slice(0, 10).replaceAll("-", ".")}</div>
          </div>
        </div>
        <Divider />
        <div className="flex justify-end gap-2">
          <Image src="/svgs/link.svg" alt="link" width={24} height={24} />
          <Image
            src="/svgs/location.svg"
            alt="location"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div>
        {boardData?.images?.map((image) => (
          <Image
            src={`https://storage.googleapis.com/${image}`}
            alt="post-image"
            width={400}
            height={531}
          />
        ))}
      </div>
      <div
        className="text-base font-normal text-black text-start"
        dangerouslySetInnerHTML={{ __html: boardData?.contents }}
      ></div>
      <div className="flex py-6 flex-col items-center gap-2.5">
        {boardData?.youtubeUrl && (
          <Youtube youtubeUrl={boardData?.youtubeUrl} />
        )}
      </div>
      <div className="flex items-center justify-center gap-6">
        <DisLikeButton />
        <LikeButton />
      </div>
      <div className="flex items-center justify-center gap-6">
        <Link href={"/boards"}>
          <Button color="white" id="list" />
        </Link>
        <Link href={`${boardId}/edit`}>
          <Button color="white" id="edit" />
        </Link>
      </div>
    </div>
  );
}
