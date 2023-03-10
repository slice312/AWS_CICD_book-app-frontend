import {AxiosResponse} from "axios";

import {axiosInstance} from "./axiosInstance";
import * as DTO from "./types";


const getBookByIsbn = (isbn: string): Promise<AxiosResponse<DTO.Book>> => {
    return axiosInstance.get(`Books/${isbn}`);
};


export const Api = {
    getBookByIsbn
};