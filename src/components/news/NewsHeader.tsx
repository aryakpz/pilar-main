import { ButtonVariant } from "../../types";
import { Button } from "../Button";
import { DateSelectbox } from "./DateSelectbox";
import { TowerSelector } from "./TowerSelector";

export const NewsHeader = () => {
  const handleAddNews=()=>{

  }
  return (
    <div className="flex flex-col gap-3 mb-6">
      <div className="flex items-center gap-2 w-full justify-between flex-row ">
        <div>
          <div className="font-semibold text-3xl leading-10 text-gray-900">
            News
          </div>
          <div className="flex gap-4 mt-6">
            <DateSelectbox value="Start date" />
            <DateSelectbox value="End date" />
            <TowerSelector />
          </div>
        </div>    
        <Button
          label="Add News"
          variant={ButtonVariant.DARK}
          showAddIcon={true}
          onClick={handleAddNews}
          />
      </div>
    </div>
  );
};
