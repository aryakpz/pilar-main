import { useJsonFetch } from "../../hooks";
import { NewsCard } from "../../types";
import { NewsCardOverview } from "./NewsCardOverview";

export const NewsCards = () => {
  const { data } = useJsonFetch();
  return (
    <div className="grid grid-cols-2 gap-3 pl-1 pr-10">
      {data?.newscards?.map((news: NewsCard) => (
        <NewsCardOverview news={news} key={news?.id} />
      ))}
    </div>
  );
};
