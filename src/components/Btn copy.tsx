function Btn({
  bg,
  text,
  border,
  onClick,
}: {
  bg: string;
  text: string;
  border?: string;
  onClick?: any;
}) {
  return (
    <button
      className={`flex bg-[${bg}] hover:brightness-75 border-white ${border}  rounded-[77px] text-white order-2 w-[211px] max-sm:w-[158px] flex-none justify-center items-center py-[10px] max-sm:h-[48px] px-8 max-sm:px-2 gap-[10px] my-0 h-[64px]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Btn;
