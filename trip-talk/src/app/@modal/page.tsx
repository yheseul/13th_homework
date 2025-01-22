import SignUp from "../_components/SignUp/SignUp";

export default function ModalPage({
  searchParams,
}: {
  searchParams: { modal?: string };
}) {
  const modal = searchParams.modal || "";
  return modal === "signup" && <SignUp />;
}
