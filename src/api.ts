import axios from "axios";

interface IGetItems {
  search: string;
  page: number;
}

// 검색어로 검색
export async function getItems({ search, page }: IGetItems) {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_Server_IP}/food?s=${search}&page=${page}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

// 전체 카테고리
export async function getAllItems() {
  try {
    const data = await axios.get(`${process.env.REACT_APP_Server_IP}/food/all`);
    return data;
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
    const data = await axios.get(
      `${process.env.REACT_APP_Server_IP}/food?category=${category}&page=${page}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
