import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles.module.css";
import { CalendarOutlined } from "@ant-design/icons";
import { useDateRangeStore } from "../../../commons/stores/useDateRangeStore";

export default function CustomDatePicker() {
  const { dateRange, setDateRange } = useDateRangeStore();
  const [startDate, endDate] = dateRange;

  return (
    <div className={styles.calendar}>
      <CalendarOutlined className={styles.date_icon} />
      <DatePicker
        className={styles.date_picker}
        selectsRange={true}
        startDate={startDate || undefined}
        endDate={endDate || undefined}
        placeholderText="YYYY.MM.DD - YYYY.MM.DD"
        dateFormat="yyyy.MM.dd"
        onChange={(update) => {
          setDateRange(update);
        }}
      />
    </div>
  );
}
