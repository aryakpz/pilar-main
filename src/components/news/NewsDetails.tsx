import { useLocation } from "react-router-dom";
import { LanguageSelector } from "../languageSelectbox";
import { Divider } from "../Divider";
import { Button } from "../Button";
import { ButtonVariant } from "../../types";

export const NewsDetails = () => {
  const loc = useLocation();
  const data = loc.state.news;

  return (
    <main className="w-full overflow-y-auto p-4 bg-white">
      <div className="w-3/4">
        <div>
          <LanguageSelector handleLanguage={()=>''} />
          <Divider style="my-5" />
          <div className="flex justify-between items-center">
            <div>
              <h5 className="font-medium text-base leading-6 text-gray-900">
                {data?.title}
              </h5>
            </div>
            <Button
              label="Edit"
              variant={ButtonVariant.LIGHT}
              showAddIcon={false}
              onClick={()=>''}
              style="border-zinc-200 p-1 px-[9px]"
            />
          </div>
          <div className="pt-8 flex flex-row pb-6 w-full flex-wrap">
            <p className="font-medium text-sm">{data?.sub_asset}</p>
          </div>
          <div>
            <h5 className="font-semibold text-3xl leading-10 text-gray-800">
              {data?.sub_title}
            </h5>
            <p className="mt-2 mb-8 text-sm leading-10 text-gray-500">
              {data?.date},{data?.time}
            </p>
            {data?.image && (
              <div className="mb-6 w-full">
                <img src={data?.image} className="w-full"/>
              </div>
            )}
            <div>
              <p>{data?.text}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
 