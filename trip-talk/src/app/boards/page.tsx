"use client";

import { useQuery } from "@apollo/client";
import styles from "./styles.module.css";
import BoardList from "../_components/BoardList/BoardList";
import { FetchBoardsDocument } from "../../commons/graphql/graphql";
import Pagination from "../_components/Pagination/Pagination";
import FilterBar from "../_components/FilterBar";
import useBoards from "../../commons/hooks/useBoards";
import { IBoardList } from "../../types/board.type";

export default function Boards() {
  const { data, loading, error, refetch } = useQuery(FetchBoardsDocument);
  const { lastPage, isDateRange, filteredData } = useBoards(data);

  if (loading) {
    //  skeleton
  }
  if (error) {
    // error
  }

  return (
    <div className="px-4">
      <FilterBar />
      <div className={styles.post_contain}>
        <div className={styles.boards_header}>
          <div className={styles.boards_header_number}>번호</div>
          <div className={styles.boards_header_title}>제목</div>
          <div className={styles.boards_header_writer}>작성자</div>
          <div className={styles.boards_header_createdAt}>날짜</div>
        </div>
        <ul className={styles.posts}>
          {isDateRange
            ? data?.fetchBoards.map((board, index: number) => (
                <BoardList
                  key={board._id}
                  id={board._id}
                  number={index + 1}
                  title={board.title}
                  writer={board.writer as string}
                  createdAt={board.createdAt}
                />
              ))
            : filteredData?.map((board: IBoardList, index: number) => (
                <BoardList
                  key={board._id}
                  id={board._id}
                  number={index + 1}
                  title={board.title}
                  writer={board.writer as string}
                  createdAt={board.createdAt}
                />
              ))}
        </ul>
      </div>
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
