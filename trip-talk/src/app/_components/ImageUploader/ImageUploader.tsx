import Image from "next/image";
import useImageUploader from "../../../commons/hooks/useImageUploader";
import { DeleteOutlined } from "@ant-design/icons";

export default function ImageUploader({ id }: { id: string }) {
  const {
    onClickImage,
    onCLickDelete,
    handleImageUpload,
    imageUrl,
    fileRef,
    showDeleteIcon,
    handleMouseOver,
    handleMouseOut,
  } = useImageUploader(id);

  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center w-40 h-40 gap-2 bg-white rounded-lg"
        onClick={onClickImage}
      >
        {!imageUrl && (
          <Image src="/svgs/add.svg" alt="add" width={24} height={24} />
        )}
        {imageUrl && (
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img className="w-40 h-40 rounded-lg" src={imageUrl} />
            {showDeleteIcon && (
              <button
                className="absolute top-1 right-1"
                onClick={onCLickDelete}
              >
                <DeleteOutlined />
              </button>
            )}
          </div>
        )}
        {!imageUrl && (
          <div className="text-base font-normal text-dimGray">
            클릭해서 사진 업로드
          </div>
        )}
      </div>
      <input
        className="hidden"
        type="file"
        onChange={handleImageUpload}
        ref={fileRef}
      />
    </>
  );
}
