import styled from "styled-components";
import { useQuery } from "react-query";
import { getAllItems, IItemsProp } from "../../api";
import { useState } from "react";
import ItemCard from "../../components/ItemCard";

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
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery<IItemsProp>(
    ["items", "all", page],
    () => getAllItems(page)
  );

  return (
    <>
      <TextContainer>전체 아이템 목록</TextContainer>
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
    </>
  );
};

export default AllItemsPage;
