import styled from "styled-components";
import { useQuery } from "react-query";
import { getAllItems, getCategoryItems, getItems, IItemsProp } from "../../api";
import { useState } from "react";
import ItemCard from "../../components/ItemCard";
import LeftSidebar from "../../components/LeftSidebar";
import TopNavBar from "../../components/TopNavBar";
import Footer from "../../components/Footer";
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
`;

const TextContainer = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #333333;
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
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

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 30px;
  margin-left: 30px;
`;

const AllItemsPage = () => {
  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");
  const search = new URLSearchParams(location.search).get("s");
  const pageParam = new URLSearchParams(location.search).get("page") || "0";
  const page = parseInt(pageParam, 10);

  console.log(search);

  const { data, isLoading, error } = useQuery<IItemsProp>(
    search
      ? ["items", "search", search, page]
      : category
      ? ["items", "category", category, page]
      : ["items", "all", page],
    () => {
      if (search) return getItems({ search, page });
      if (category) return getCategoryItems({ category, page });
      return getAllItems(page, 8);
    }
  );

  if (isLoading) return <div>Loading...</div>;

  const pageTitle = search
    ? `검색 결과: ${search}`
    : category
    ? `카테고리: ${category}`
    : "전체 아이템 목록";

  return (
    <>
      <TopNavBar />
      <MainContainer>
        <ContentContainer>
          <LeftSidebar />
          <RightContainer>
            <TextContainer>{pageTitle}</TextContainer>
            <FilterContainer>
              <FilterButton>가격순 ▾</FilterButton>
              <FilterButton>판매순 ▾</FilterButton>
              <FilterButton>날짜순 ▾</FilterButton>
            </FilterContainer>
            <ItemsGrid>
              {data?.content.map((item) => (
                <ItemCard key={item.diabetes.id} item={item.diabetes} />
              ))}
            </ItemsGrid>
          </RightContainer>
        </ContentContainer>
        <Footer />
      </MainContainer>
    </>
  );
};

export default AllItemsPage;
