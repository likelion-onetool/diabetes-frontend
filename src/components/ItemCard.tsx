import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ItemImage = styled.img`
  width: 100%;
  border-radius: 6.65px;
  border: 1px solid #eeeeee;
  object-fit: cover;
  object-position: center;
`;

const BelowContainer = styled.div`
  padding: 12px 6px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const BrandName = styled.h3`
  font-weight: 400;
  font-size: 11.25px;
  line-height: 12px;
  color: #a0a0a0;
`;

const ItemName = styled.h3`
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: #1a1a1a;
`;

const PriceName = styled.h3`
  font-weight: 500;
  font-size: 15.38px;
  line-height: 16px;
  color: #000000;
`;

const TagBox = styled.h3`
  margin: 0.5rem 0;
`;

interface IItem {
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
}

interface ItemCardProps {
  item: IItem;
}

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <ItemCardContainer>
      <Link to={`/items/detail/${item.id}`}>
        <ItemImage src={item.diabetesImg} alt={item.diabetesName} />
        <BelowContainer>
          <ItemName>{item.diabetesName}</ItemName>
          <PriceName>{item.standardPrice}원</PriceName>
          <TagBox></TagBox>
        </BelowContainer>
      </Link>
    </ItemCardContainer>
  );
};

export default ItemCard;
