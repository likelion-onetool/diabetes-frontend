import styled from "styled-components";
import { useQuery } from "react-query";
import { getAllItems, getCategoryItems, getItems, IItemsProp } from "../../api";
import { useState } from "react";
import ItemCard from "../../components/ItemCard";
import LeftSidebar from "../../components/LeftSidebar";
import TopNavBar from "../../components/TopNavBar";
import Footer from "../../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";

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
    background-color: #5ce65c;
  }
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 30px;
  margin-left: 30px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  gap: 8px;
`;

const PaginationButton = styled.button<{ disabled?: boolean }>`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? "#f0f0f0" : "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#f0f0f0" : "#00AC17")};
    color: ${(props) => (props.disabled ? "#333" : "#fff")};
  }
`;

const AllItemsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const category = new URLSearchParams(location.search).get("category");
  const search = new URLSearchParams(location.search).get("s");
  const pageParam = new URLSearchParams(location.search).get("page") || "0";
  const [page, setPage] = useState(parseInt(pageParam, 10));

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
    },
    { keepPreviousData: true } // 데이터 불러오기 전까지 잠시 기존 데이터로 보여주기
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    navigate({
      search: `?${category ? `category=${category}&` : ""}${
        search ? `s=${search}&` : ""
      }page=${newPage}`,
    });
  };

  if (isLoading) return <div>Loading...</div>;

  const pageTitle = search
    ? `검색 결과: ${search}`
    : category
    ? `${category} 요리/반찬 목록`
    : "전체 상품 목록";

  return (
    <>
      {!data ? (
        <div>Loading...</div>
      ) : (
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
                  <FilterButton>후기순 ▾</FilterButton>
                </FilterContainer>
                <ItemsGrid>
                  {data.content.map((item) => (
                    <ItemCard key={item.id} item={item} />
                  ))}
                </ItemsGrid>
                <PaginationContainer>
                  <PaginationButton
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 0}
                  >
                    이전
                  </PaginationButton>
                  {[...Array(data.totalPages)].map((_, index) => (
                    <PaginationButton
                      key={index}
                      onClick={() => handlePageChange(index)}
                      disabled={index === page}
                    >
                      {index + 1}
                    </PaginationButton>
                  ))}
                  <PaginationButton
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page + 1 >= (data?.totalPages || 1)}
                  >
                    다음
                  </PaginationButton>
                </PaginationContainer>
              </RightContainer>
            </ContentContainer>
            <Footer />
          </MainContainer>
        </>
      )}
    </>
  );
};

export default AllItemsPage;
