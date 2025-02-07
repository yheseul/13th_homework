const CreatedAt = ({ createdAt }: { createdAt: string }) => {
  return <>{createdAt?.slice(0, 10).replaceAll("-", ".")}</>;
};

export default CreatedAt;
