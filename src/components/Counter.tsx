export interface counterProps {
  itemCount: string;
  value: string;
}

export const Counter = ({ itemCount, value }: counterProps) => {
  return (
    <div className="font-courier h-28 w-28 md:h-36 md:w-36 flex justify-center items-center flex-col bg-black text-white rounded-lg border-2 border-white border-double">
      <span className="text-lg md:text-xl font-bold">{itemCount}</span>
      <span className="text-sm md:text-lg">{value} left</span>
    </div>
  );
};
