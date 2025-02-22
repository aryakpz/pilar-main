import { useNavigate } from "react-router-dom";
import { useJsonFetch } from "../../hooks";
import { NewsCard } from "../../types";
import { NewsCardOverview } from "./NewsCardOverview";

export const NewsCards = () => {
  const { data } = useJsonFetch();
  const nav=useNavigate()
  const handleCardClick=(news:NewsCard)=>{
    console.log(news)
    nav('/overview/newscardoverview',{state:{news:news}})
  }
  return (
    <div className="grid grid-cols-2 gap-3 pl-1 pr-10">
      {data?.newscards?.map((news: NewsCard) => (
        <NewsCardOverview news={news} key={news?.id}  onClick={handleCardClick}/>
      ))}
    </div>
  );
};
