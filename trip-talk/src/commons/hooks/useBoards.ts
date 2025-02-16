import { useQuery } from "@apollo/client";
import { FetchBoardsCountDocument } from "../graphql/graphql";
import { useDateRangeStore } from "../stores/useDateRangeStore";
import { IBoardData, IBoardList } from "../../types/board.type";

export default function useBoards(data?: IBoardData) {
  const { data: dataBoardsCount } = useQuery(FetchBoardsCountDocument);
  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10);
  const { dateRange } = useDateRangeStore();

  const isDateRange = dateRange[0] === null && dateRange[1] === null;
  const startDate = dateRange[0]?.getTime() ?? 0;
  const endDate = dateRange[1]?.getTime() ?? 0;

  const filteredData = data?.fetchBoards.filter((board: IBoardList) => {
    const createdAt = new Date(board.createdAt).getTime();
    return startDate <= createdAt && createdAt < endDate + 86400000;
  });

  return { lastPage, isDateRange, filteredData };
}
