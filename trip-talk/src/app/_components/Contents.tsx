const Contents = ({ contents }: { contents?: string }) => {
  return (
    <div
      className="text-base font-normal text-black text-start"
      dangerouslySetInnerHTML={{ __html: contents || "" }}
    ></div>
  );
};

export default Contents;
