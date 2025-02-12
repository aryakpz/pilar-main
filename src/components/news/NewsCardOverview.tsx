import { useState } from "react";
import { NewsCard } from "../../types";
import attachment from "/assets/images/attachment.svg";

type NewsCardProps = {
  news: NewsCard;
};

export const NewsCardOverview: React.FC<NewsCardProps> = ({ news }) => {
  const [showArchive, setShowArchive] = useState<boolean>(false);

  return (
    <div className="flex rounded-lg border-gray-200 bg-white shadow-md border relative">
      <div className="flex h-full flex-col justify-center gap-4 p-6 w-full">
        <div className="flex flex-row justify-between p-2">
          <div className="flex flex-col align-top">
            <div className="flex">
              <span className="flex-1 font-semibold text-lg leading-7">
                {news?.title}
              </span>
            </div>
            <div className="text-sm leading-5 w-96 text-gray-500 mb-3">
              {news?.sub_title}
            </div>
            <div className="max-w-full"></div>
            <div className="text-sm leading-5 text-gray-500">
              Updated At: {news?.date}, {news?.time}
            </div>
            {news?.attachments ? (
              <div className="pt-2 flex items-center">
                <img src={attachment} />
                <p className="text-sm leading-5 pl-2">{news?.attachments}</p>
              </div>
            ) : null}
          </div>
          <div className="w-36">
            <div className="h-fill">
              <img src={news?.image} />
            </div>
          </div>
          <div>
            <div className="w-fit">
              <button
                className="text-gray-500 bg-white border border-gray-300 hover:bg-gray-200 p-0.5 pr-[0px] text-center  font-medium rounded-lg group flex h-min items-center justify-center"
                onClick={() => setShowArchive(!showArchive)}
              >
                <span className="flex items-center rounded-md text-xs justify-center align-middle rotate-90 pl-3 pr-2 pb-1 pt-1  mr-[-4px] tracking-widest ">
                  {" "}
                  ...
                </span>
              </button>
            </div>
            {showArchive && (
              <div className="z-10 w-fit rounded divide-y divide-gray-100 shadow absolute -top-4 right-2 ">
                <div className="py-1 text-sm text-gray-700 cursor-pointer bg-gray-50 bg">
                  <ul className="py-1 hover:bg-gray-200">
                    <li className="flex items-center justify-start py-1 px-4 text-sm">
                      Archive
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
