import { usePathname } from "next/navigation";

export default function useLayout() {
  const HIDDEN_HEADER = ["/boards/new", "/boards"];

  const pathname = usePathname();
  const isBoardDetailPage = /^\/boards\/[a-zA-Z0-9]+$/.test(pathname);

  const isHiddenHeader = HIDDEN_HEADER.includes(pathname) || isBoardDetailPage;

  return isHiddenHeader;
}
