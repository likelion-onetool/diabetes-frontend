import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import styled from "styled-components";
import Item from "../../components/Item";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getCartItems } from "../../api";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: #f8f8fb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aeaeff;
  font-size: 64px;
`;

const Empty = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-top: 8px;
`;
const Go = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #7c7c7c;
  margin-bottom: 12px;
`;

const FamLink = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #4e4eff;
  padding: 13px 23px;
  border-radius: 6px;
  color: #4e4eff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 800;
  width: 100%;
  margin-right: auto;
  margin-bottom: 32px;
`;

const SelectButtons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  color: #88888a;
`;

const MainSection = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  width: 812px;
  height: auto;
`;

const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fafafc;
  gap: 12px;
  border-radius: 6px;
  width: 360px;
  max-height: 400px;
  height: fit-content;
  a {
    width: 100%;
  }
`;

const SummaryText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  font-weight: 600;

  &:last-of-type {
    border-top: 2px solid #e5e7eb;
    padding-top: 8px;
  }

  &:nth-of-type(2) {
    color: #4e4eff;
  }
`;

const Price = styled.span`
  font-size: 16px;
  font-weight: 800;
`;

const ToTalPrice = styled.span`
  font-size: 24px;
  font-weight: 800;
`;

const Button = styled.button`
  font-size: 15px;
  font-weight: 600;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const OrderButton = styled(Button)`
  background-color: #4e4eff;
  color: white;
`;

const ShoppingButton = styled(Button)`
  border: 1px solid #4e4eff;
  color: #4e4eff;
`;

export const CheckBoxStyled = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 12px;
`;

interface IItem {
  image: string;
  name: string;
  price: number;
}

interface ICartItems {
  totalPrice: 53000;
  totalDiscount: 4000;
}

interface ICart {
  isSuccess: boolean;
  result: string | ICartItems[];
}

const ShoppingCart = () => {
  const { data, isLoading, error } = useQuery<ICart>(["cart"], () =>
    getCartItems()
  );

  const [isEmpty, setIsEmpty] = useState<boolean>(false); // 장바구니 비었을 때 테스트용
  const [items, setItems] = useState<IItem[]>([
    {
      image: "./img1.png",
      name: "판타지 초원 환경(Fantasy GrassField)",
      price: 13000,
    },
    {
      image: "./img1.png",
      name: "판타지 초원 환경(Fantasy GrassField)",
      price: 13000,
    },
  ]);
  const [checkedItems, setCheckedItems] = useState<IItem[]>([]);
  const [allChecked, setAllChecked] = useState<boolean>(false);

  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  const totalAmount = items.reduce((total, item) => total + item.price, 0);
  const discount = 4000;
  const finalAmount = totalAmount - discount;

  useEffect(() => {
    if (checkedItems.length === items.length && items.length > 0) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [checkedItems, items]); // 전체 선택 체크박스 로직(다른 체크박스들이 전부 체크되면 전체 체크박스 체크되게)
  // -- useEffect를 사용하지 않을 경우 setAllchecked함수 때문에 무한 rerendering이 되어버린다.

  const ToggleAllCheck = () => {
    if (allChecked) {
      setCheckedItems([]);
    } else {
      setCheckedItems([...items]);
    }
    setAllChecked(!allChecked);
  }; // 전체 체크박스 토글 로직 및 checkedItem리스트에 아이템들 추가

  const handleCheck = (item: IItem) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((i) => i !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  }; // 이미 체크되있던 아이템이면 filter로 거르고, 아니면 CheckedItem리스트에 추가

  return (
    <>
      {data ? (
        <Container>
          {data.result === "장바구니에 상품이 없습니다." ? (
            <Wrapper>
              <Circle>
                <BsCart4 />
              </Circle>
              <Empty>장바구니가 비어있어요.</Empty>
              <Go>지금 담으러 가볼까요?</Go>
              <FamLink to={"/items"}>인기 작품 구경 가기 &rarr;</FamLink>
            </Wrapper>
          ) : (
            <Wrapper>
              <Title>장바구니</Title>
              <SelectButtons>
                <CheckBoxStyled
                  type="checkbox"
                  onChange={ToggleAllCheck}
                  checked={allChecked}
                />
                <Label>전체선택</Label>
              </SelectButtons>
              <MainSection>
                <CartItems>
                  {items.map((item, index) => (
                    <Item
                      key={index}
                      item={item}
                      checked={checkedItems.includes(item)} // 체크된 박스인지는 리스트 하나에서 관리
                      onCheck={handleCheck}
                    />
                  ))}
                </CartItems>
                <CartSummary>
                  <SummaryText>
                    <span>총 상품 금액</span>
                    <Price>{formatPrice(totalAmount)}원</Price>
                  </SummaryText>
                  <SummaryText>
                    <span>총 할인 금액</span>
                    <Price>-{formatPrice(discount)}원</Price>
                  </SummaryText>
                  <SummaryText>
                    <span>결제 금액</span>
                    <ToTalPrice>{formatPrice(finalAmount)}원</ToTalPrice>
                  </SummaryText>
                  <OrderButton>주문하기</OrderButton>
                  <Link to="/items">
                    <ShoppingButton>계속 쇼핑하기</ShoppingButton>
                  </Link>
                </CartSummary>
              </MainSection>
            </Wrapper>
          )}
        </Container>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ShoppingCart;
