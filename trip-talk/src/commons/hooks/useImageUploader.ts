import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import checkValidationFile from "../Libraries/checkValidationFile";
import { ICheckValidationFile } from "../../types/components.type";
import { useImageStore } from "../stores/useImageStore";

export default function useImageUploader(id: string) {
  const { imageMap, setImage } = useImageStore();
  const fileRef = useRef<HTMLInputElement>(null);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  const handleMouseOver = () => setShowDeleteIcon(true);
  const handleMouseOut = () => setShowDeleteIcon(false);

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const isValid = checkValidationFile(file as ICheckValidationFile);
    if (!isValid) return true;

    const imageUrl = URL.createObjectURL(file);
    setImage(id, imageUrl);
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onCLickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    delete imageMap[id];
  };

  return {
    onClickImage,
    onCLickDelete,
    handleImageUpload,
    imageUrl: imageMap[id] || "",
    fileRef,
    showDeleteIcon,
    handleMouseOver,
    handleMouseOut,
  };
}
