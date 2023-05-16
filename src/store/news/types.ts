import { INewsDetail } from "types/INewsDetail";

export interface Istore {
    list: INewsDetail[];
    error: string | null;
}