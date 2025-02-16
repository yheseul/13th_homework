export interface IBoardList {
  id?: string;
  number?: number;
  _id?: string;
  writer?: string | null;
  title: string;
  createdAt: string;
  youtubeUrl?: string | null;
}

export interface IBoardData {
  fetchBoards: IBoardList[];
}
