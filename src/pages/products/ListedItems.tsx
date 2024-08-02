import styled from "styled-components";
import TopNavBar from "../../components/TopNavBar";
import LeftSidebar from "../../components/LeftSidebar";
import ItemCard from "../../components/ItemCard";
import Footer from "../../components/Footer";
import { useQuery } from "react-query";
import { getItems } from "../../api";
import { useLocation } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
`;

const RightContainer = styled.div`
  width: 100%;
  padding: 0 40px;
  overflow-x: hidden;
`;

const TextContainer = styled.div`
  height: 60px;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #333333;
  margin-left: 30px;
  margin-top: 15px;
`;

const FilterContainer = styled.div`
  margin-left: 30px;
  display: flex;
  gap: 0.5rem;
`;

const FilterButton = styled.button`
  width: 97px;
  height: 36px;
  border: 1px solid #ccc;
  border-radius: 4px;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

const ItemsCount = styled.div`
  margin-left: 30px;
  padding: 16px 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #212b36;
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 0px;
  margin-left: 30px;
`;

const items = [
  { id: 1, name: "Item 1", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Item 2", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Item 3", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Item 4", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Item 5", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Item 6", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Item 7", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Item 8", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Item 9", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Item 10", image: "https://via.placeholder.com/150" },
  { id: 11, name: "Item 11", image: "https://via.placeholder.com/150" },
  { id: 12, name: "Item 12", image: "https://via.placeholder.com/150" },
  { id: 13, name: "Item 13", image: "https://via.placeholder.com/150" },
  { id: 14, name: "Item 14", image: "https://via.placeholder.com/150" },
  { id: 15, name: "Item 15", image: "https://via.placeholder.com/150" },
  { id: 16, name: "Item 16", image: "https://via.placeholder.com/150" },
];

const ListedItems = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const search: string | null = urlParams.get("s") || "도시락";
  const pageParam: string = urlParams.get("page") || "1";
  const page: number = parseInt(pageParam, 10);

  const { data, isLoading, error } = useQuery(["items"], () =>
    getItems({ search, page })
  );
  const itemCount = items.length;

  console.log(data);

  return (
    <>
      <TopNavBar />
      <MainContainer>
        <ContentContainer>
          <LeftSidebar />
          <RightContainer>
            <TextContainer>카테고리 이름</TextContainer>
            <FilterContainer>
              <FilterButton>확장자 ▾</FilterButton>
              <FilterButton>가격순 ▾</FilterButton>
              <FilterButton>판매순 ▾</FilterButton>
              <FilterButton>날짜순 ▾</FilterButton>
            </FilterContainer>
            <ItemsCount>총 {itemCount}개</ItemsCount>
            <ItemsGrid>
              {items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
            </ItemsGrid>
          </RightContainer>
        </ContentContainer>
        <Footer />
      </MainContainer>
    </>
  );
};

export default ListedItems;
