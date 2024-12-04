export default function Blocks({
  title,
  desc,
  imgSrc,
  imgAlt,
  reversed,
}: {
  title: string;
  desc: string;
  imgSrc: any;
  imgAlt: string;
  reversed?: boolean;
}) {
  return (
    <div className="flex max-w-[1240px] w-full">
      <div
        className={
          !reversed
            ? "flex flex-row w-full justify-between gap-6 max-lg:flex-col"
            : "flex flex-row-reverse w-full justify-between gap-6 max-sm:flex-col"
        }
      >
        <div className="flex flex-col justify-center max-w-[564px] w-full gap-6 max-sm:text-center">
          <div className="flex flex-col items-start w-full gap-6">
            <h2 className="text-[#1E1E1E] w-full font-semibold text-4xl max-sm:text-2xl font-custom">
              {title}
            </h2>
            <p className="text-lg max-sm:text-sm font-customLight">{desc}</p>
          </div>
        </div>
        <img
          className="max-sm:w-full rounded-[20px] max-sm:rounded-[5.4px]"
          width={612}
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
    </div>
  );
}
