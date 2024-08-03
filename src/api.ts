import axios from "axios";

interface IGetItems {
  search: string;
  page: number;
}

// 검색어로 검색
export async function getItems({ search, page }: IGetItems) {
  try {
    const res = await axios.get(
      `${
        process.env.REACT_APP_Server_IP
      }/diabetes?s=${search}&page=${page}&size=${8}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export interface IContent {
  diabetes: {
    calorie: string;
    capacity: string;
    category: string;
    diabetesDetails: string;
    diabetesDetailsImg: string;
    diabetesImg: string;
    diabetesName: string;
    hits: boolean;
    id: number;
    standardPrice: number;
    storage: string;
  };
}

export interface IItemsProp {
  content: IContent[];
  totalElements: number;
  totalPages: number;
  size: number;
}

// 전체 카테고리
export async function getAllItems(page: number, size: number) {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_Server_IP}/diabetes/all?page=${page}&size=${size}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

interface IGetCategoryItems {
  category: string;
  page: number;
}

//카테고리별 음식 조회
export async function getCategoryItems({ category, page }: IGetCategoryItems) {
  try {
    const res = await axios.get(
      `${
        process.env.REACT_APP_Server_IP
      }/diabetes/c?category=${category}&page=${page}&size=${8}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getDetailItem(id: number) {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_Server_IP}/food/${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
