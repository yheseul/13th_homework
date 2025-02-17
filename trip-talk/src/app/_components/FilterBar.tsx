import { usePathname } from "next/navigation";
import Button from "./Button/Button";
import CustomDatePicker from "./CustomDatePicker/CustomDatePicker";
import SearchBar from "./SearchBar/SearchBar";
import { useRouter } from "next/navigation";

const FilterBar = () => {
  const path = usePathname();
  const isPurchasePage = path.includes("purchase");
  const router = useRouter();

  const handleNavigate = () => {
    if (isPurchasePage) router.push("#");
    else router.push("/boards/new");
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-3 w-[1000px]">
        <CustomDatePicker />
        <SearchBar />
        <Button color="black" id="search" width="100px" />
      </div>
      <div>
        <Button
          color="blue"
          id={isPurchasePage ? "sale" : "register"}
          width="150px"
          onClick={handleNavigate}
        />
      </div>
    </div>
  );
};

export default FilterBar;
