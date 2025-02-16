import { create } from "zustand";

interface IDateRangeState {
  dateRange: [Date | null, Date | null];
  setDateRange: (range: [Date | null, Date | null]) => void;
}

export const useDateRangeStore = create<IDateRangeState>((set) => ({
  dateRange: [null, null],
  setDateRange: (range) => set({ dateRange: range }),
}));
