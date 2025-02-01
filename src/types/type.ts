export type OverviewCard = {
    id: number;
    image: string;
    title: string;
    city: string;
}
export type CardOverViewType = {
    id: number,
    count: number,
    data: string,
    details?: string
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