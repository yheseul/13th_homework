import { Controller } from "react-hook-form";
import Input from "../Input/Input";

export default function ControllerInput(props) {
  const { control, id, formState } = props;
  return (
    <Controller
      name={id}
      control={control}
      render={({ field }) => (
        <div className="flex flex-col w-full">
          <Input
            id={id}
            {...field}
            isLabel={true}
            required={true}
            errorMessage={formState.errors[id]?.message}
          />
        </div>
      )}
    />
  );
}
