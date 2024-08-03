import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

interface CategoryProps {
  active: boolean;
}

const SidebarContainer = styled.div`
  min-width: 200px;
  padding: 24px 40px 48px 40px;
  margin-left: -10px;
  border-right: 1px solid #cccccc;
`;

const HorizontalBorder = styled.div`
  padding: 0px 0px 2px 0px;
`;

const CategoryHeader = styled.h2`
  display: flex;
  justify-content: space-between;
  padding: 24px 6px;
  font-weight: 600;
  font-size: 17.25px;
  line-height: 16px;
  margin-bottom: 10px;
`;

const CategoryContainer = styled.div`
  padding: 0px 0px 30px 0px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const MainCategoryContainer = styled.div`
  padding: 0px;
`;

const Category = styled(Link)<CategoryProps>`
  border-radius: 13px;
  padding: 8px;
  display: block;
  font-weight: 600;
  font-size: 15.23px;
  line-height: 30px;
  letter-spacing: 0.15px;
  padding-left: 15px;
  margin-left: -7px;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: #5ce65c;
  }
`;

const LeftSidebar = () => {
  const [categoryToggle, setCategoryToggle] = useState<boolean>(true);

  return (
    <SidebarContainer>
      <HorizontalBorder>
        <CategoryHeader>
          <span>카테고리</span>
          <button onClick={() => setCategoryToggle((prev) => !prev)}>
            {categoryToggle ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </CategoryHeader>
        <CategoryContainer>
          <MainCategoryContainer>
            <Category to={"/items"} active={false}>
              전체
            </Category>
          </MainCategoryContainer>

          <MainCategoryContainer>
            <Category
              to={`/items/c?category=${"category1"}&page=${0}`}
              active={false}
            >
              육류 요리/반찬
            </Category>
          </MainCategoryContainer>

          <MainCategoryContainer>
            <Category
              to={`/items/c?category=${"category2"}&page=${0}`}
              active={false}
            >
              해산물 요리/반찬
            </Category>
          </MainCategoryContainer>

          <MainCategoryContainer>
            <Category
              to={`/items/c?category=${"category3"}&page=${0}`}
              active={false}
            >
              닭고기 요리/반찬
            </Category>
          </MainCategoryContainer>

          <MainCategoryContainer>
            <Category
              to={`/items/c?category=${"category4"}&page=${0}`}
              active={false}
            >
              채소&두부 요리/반찬
            </Category>
          </MainCategoryContainer>
        </CategoryContainer>
      </HorizontalBorder>
    </SidebarContainer>
  );
};

export default LeftSidebar;
