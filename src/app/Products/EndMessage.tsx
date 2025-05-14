const END_MESSAGE = '더 이상 불러올 수 없습니다.';

interface EndMessageProps {
  isVisible: boolean;
}

const EndMessage = ({ isVisible }: EndMessageProps) => {
  if (!isVisible) return <></>;

  return (
    <div className="flex justify-center items-center py-[50px] text-gray-500 text-body-2">
      {END_MESSAGE}
    </div>
  );
};

export default EndMessage;
