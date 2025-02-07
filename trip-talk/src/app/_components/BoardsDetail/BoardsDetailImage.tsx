import Image from "next/image";

const BoardsDetailImage = ({ images }: { images?: string[] }) => {
  return (
    <div>
      {images?.map((image) => (
        <Image
          src={`https://storage.googleapis.com/${image}`}
          alt="post-image"
          width={400}
          height={531}
        />
      ))}
    </div>
  );
};

export default BoardsDetailImage;
