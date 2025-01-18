import { PageCountType } from "./enum";

export type OverviewCard = {
    id: number;
    image: string;
    title: string;
    city: string;
}
export type LeftSideBarType = {
    id: number;
    title: string;
    image: string;
    dropDown?: string
    menu?: MenuType
}

export type MenuType = {
    id: number;
    data: string
}[]

export type TowersType = {
    id: number;
    title: string;
    position?: string
}

export type OfficeDataType = {
    id: number,
    subAsset: string,
    number: string,
    volume: number,
    rooms: number,
    rent: number,
    occupancy: boolean
}

export type PageCountValueType = {
    id: number,
    value: PageCountType

}