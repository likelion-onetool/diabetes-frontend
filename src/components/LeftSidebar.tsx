import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
`;

const MainCategoryContainer = styled.div`
  padding: 0px;
`;


const Category = styled.div<CategoryProps>`
  border-radius: 13px;
  padding: 8px;

  font-weight: 600;
  font-size: 15.23px;
  line-height: 30px;
  letter-spacing: 0.15px;
  padding-left: 15px;
 margin-left: -7px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
  transition:0.5s;
    background-color: #5CE65C;
  }
`;

const LeftSidebar = () => {
  const navigate = useNavigate();
  const [categoryToggle, setCategoryToggle] = useState<boolean>(true);

  const handleCategoryClick = (index: number) => {
    if (index === 0) {
      navigate("/items");
    }
  };

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
            <Category active={false} onClick={() => handleCategoryClick(0)}>
              전체
            </Category>
          </MainCategoryContainer>

          <MainCategoryContainer>
            <Category active={false} onClick={() => handleCategoryClick(1)}>
              메인요리/반찬
            </Category>
            
          </MainCategoryContainer>

          <MainCategoryContainer>
            <Category active={false} onClick={() => handleCategoryClick(2)}>
              국/탕/찌개
            </Category>
        
          </MainCategoryContainer>

          <MainCategoryContainer>
            <Category active={false} onClick={() => handleCategoryClick(3)}>
              밥/면/죽
            </Category>
          </MainCategoryContainer>

          <MainCategoryContainer>
            <Category active={false} onClick={() => handleCategoryClick(4)}>
              간편식/샐러드
            </Category>
           
          </MainCategoryContainer>
        </CategoryContainer>
      </HorizontalBorder>
    </SidebarContainer>
  );
};

export default LeftSidebar;
