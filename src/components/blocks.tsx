export default function Blocks({
  title,
  desc,
  itemList,
  imgSrc,
  imgAlt,
  reversed,
}: {
  title: string;
  desc: string;
  itemList?: string[];
  imgSrc: string;
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
        <div className="flex flex-col max-w-[564px] w-full gap-6 max-sm:text-center">
          <div className="flex flex-col items-start w-full gap-6">
            <h2 className="text-[#1E1E1E] w-full font-semibold text-4xl max-sm:text-2xl font-unaego">
              {title}
            </h2>
            <p className="text-lg max-sm:text-sm font-unaego-light">{desc}</p>
          </div>
          <ul className="text-[#545454] text-lg list-inside list-disc max-sm:text-sm font-customLight">
            {itemList &&
              itemList.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <img
          className="max-sm:w-full rounded-[20px] max-sm:rounded-[5.4px] hidden md:flex md:justify-center md:items-center"
          width={612}
          src={imgSrc}
          alt={imgAlt}
        />
        <img
          className="max-sm:w-full rounded-[20px] max-sm:rounded-[5.4px] md:hidden flex justify-center items-center"
          width={100}
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
    </div>
  );
}
