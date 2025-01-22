"use client";

import { CloseOutlined } from "@ant-design/icons";
import useSignUp from "../../../commons/hooks/useSignUp";
import Button from "../Button/Button";
import ControllerInput from "../ControllerInput/ControllerInput";
import ModalContainer from "../ModalContainer/ModalContainer";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const { onClickSubmit, handleSubmit, control, formState, isModalOpen } =
    useSignUp();
  const router = useRouter();

  return (
    <div
      className="fixed inset-0 z-40 w-full bg-black bg-opacity-50"
      onClick={() => router.back()}
    >
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onClickSubmit)}
          onClick={(event) => event.stopPropagation()}
          className="flex flex-col relative h-1/2 min-h-[544px] w-1/3 min-w-[350px] max-w-md gap-3 rounded-2xl bg-white px-6 pb-4 pt-11"
        >
          <CloseOutlined
            className="absolute right-3 top-3"
            onClick={() => router.back()}
          />
          <div className="self-stretch text-lg not-italic font-semibold leading-6 text-center text-black">
            회원가입
          </div>
          <div className="self-stretch text-[color:var(--gray-800,#333)] text-center text-sm not-italic font-medium leading-5">
            회원가입을 위해 아래 빈칸을 모두 채워 주세요.
          </div>
          <ControllerInput control={control} id="email" formState={formState} />
          <ControllerInput control={control} id="name" formState={formState} />
          <ControllerInput
            control={control}
            id="password"
            formState={formState}
          />
          <ControllerInput
            control={control}
            id="checkPassword"
            formState={formState}
          />
          <Button id="singUp" color="white" width="100%" />
          {isModalOpen && (
            <ModalContainer
              isSwitched={false}
              children="ALERT!!"
              isPrompt={false}
              alertMessage="회원가입을 축하드려요."
            />
          )}
        </form>
      </div>
    </div>
  );
}
