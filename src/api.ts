import axios from "axios";

interface IGetItems {
  search: string;
  page: number;
}

export async function getItems({ search, page }: IGetItems) {
  try {
    const data = await axios.get(
      `${process.env.REACT_APP_Server_IP}/blueprint?s=${search}&page=${page}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
