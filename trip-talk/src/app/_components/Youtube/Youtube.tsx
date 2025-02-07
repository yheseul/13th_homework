import ReactPlayer from "react-player";

export default function Youtube({ youtubeUrl }: { youtubeUrl?: string }) {
  return (
    <div className="flex py-6 flex-col items-center gap-2.5">
      {youtubeUrl && <ReactPlayer url={youtubeUrl} />}
    </div>
  );
}
