import React from "react";
import { GoX } from "react-icons/go";
import styled from "styled-components";
import { CheckBoxStyled, IItem } from "../pages/pay/ShoppingCart";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 145px;
  height: 95px;
  object-fit: cover;
  border-radius: 6px;
  margin-right: 24px;
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
`;

const ItemName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const ItemPriceDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ItemPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const Xbutton = styled(GoX)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

interface ItemProps {
  item: IItem;
  checked: boolean;
  onCheck: (item: IItem) => void;
}

const Item = ({ item, checked, onCheck }: ItemProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (id: number) =>
      axios.delete(`/api/cart/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["cart"]),
    }
  );

  const onClick = (id: number) => {
    mutation.mutate(id);
  };

  return (
    <CartItem>
      <ItemImage src={item.diabetesImg} alt={item.diabetesName} />
      <ItemDetails>
        <ItemName>{item.diabetesName}</ItemName>
      </ItemDetails>
      <ItemPriceDetail>
        <ItemPrice>{item.standardPrice.toLocaleString()}원</ItemPrice>
        <Xbutton onClick={() => onClick(item.id)} />
      </ItemPriceDetail>
    </CartItem>
  );
};

export default Item;
