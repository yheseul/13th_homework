import { useState } from "react";

export default function usePurchase() {
  const [buttonColor, setButtonColor] = useState(true);

  const onClickReservationAvailable = () => {
    setButtonColor(true);
  };

  const onClickReservationClosed = () => {
    setButtonColor(false);
  };

  return {
    buttonColor,
    onClickReservationAvailable,
    onClickReservationClosed,
  };
}
