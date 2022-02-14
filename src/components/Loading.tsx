export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-full " data-testid="loading">
      <div className="loader mr-1 animate-bounce" />
      <div className="loader mr-1 animate-bounce200" />
      <div className="loader animate-bounce400" />
    </div>
  );
};
