import { useRouter } from "next/navigation";

export default function useBoards() {
  const router = useRouter();

  const handleMovePostRegisterPage = () => {
    router.push("/boards/new");
  };

  return handleMovePostRegisterPage;
}
