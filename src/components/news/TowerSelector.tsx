import { useJsonFetch } from "../../hooks";

export const TowerSelector = () => {
  const { data } = useJsonFetch();
  console.log(data?.NewsTowers)
  return (
    <div className="w-52">
      <div>
        <div className="flex">
          <div className="relative w-full">
            <select className="block w-full border bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500  rounded-lg p-2.5 text-sm appearance-none bg-down-arrow bg-no-repeat bg-size pr-5 bg-arrow-position">
              <option value="" hidden>
                Select Tower
              </option>
              {data?.NewsTowers?.map((tower: string) => (
                <option value={tower} key={tower}>
                  {tower}
                </option>
              ))}   
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
