import styled from "styled-components";
import { LuBox } from "react-icons/lu";
import { LuPencilLine } from "react-icons/lu";
import { FaWonSign } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { BsCreditCardFill } from "react-icons/bs";
import { MdAccountBalance } from "react-icons/md";
import { useState } from "react";
import { redirect, useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCartItems, getDetailItem } from "../../api";
import { IDetailItem } from "../products/DetailedItem";
import axios from "axios";

const Title = styled.span`
  font-size: 22px;
  font-weight: 800;
  width: 100%;
  margin-right: auto;
`;

const Banner = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 24px;
  width: 100%;
  margin-top: 70px;
  display: flex;
  gap: 6px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: 1px solid black;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Label = styled.span`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 343px;
  height: 40px;
  padding: 8px;
  border: 1px solid #dbe0e4;
  border-radius: 7px;
`;

const BoxTitle = styled.span`
  margin: 24px 0;
`;

const BoxWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Box = styled.div<{ isActive: boolean }>`
  width: 294px;
  height: 218px;
  padding: 25px;
  border: ${(props) =>
    props.isActive ? "1px solid #4e4eff" : "1px solid #A2A2A4"};
  border-radius: 4px;
  background-color: ${(props) =>
    props.isActive ? "#4e4eff0a" : "transparent"};
  cursor: pointer;
  span {
    margin-left: 8px;
  }
  p {
    margin-top: 20px;
  }
`;

const PriceWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleBox = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const TotalPrice = styled(Price)`
  font-size: 14px;
  font-weight: 700;
`;

const Discount = styled(Price)`
  font-size: 14px;
  font-weight: 700;
  color: #4e4eff;
`;

const FinalPrice = styled(Price)`
  font-size: 22px;
  font-weight: 800;
  border-top: 1px solid #f5f5f6;
  border-bottom: 1px solid #f5f5f6;
  padding: 10px 0;
`;

const CardWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
`;

const Card = styled.button<{ isActive: boolean }>`
  width: 184px;
  height: 48px;
  border: ${(props) =>
    props.isActive ? "1px solid #5cd65c" : "1px solid #A2A2A4"};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#5cd65c" : "transparent")};
`;

const CheckBoxWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  p {
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
  }
  span {
    font-size: 11px;
    font-weight: 400;
    color: green;
  }
`;

const PurchaseButton = styled.button`
  width: 196px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid #cccccc;
  font-size: 15.13px;
  display: flex;
  align-items: center;
  justify-content: center;

   &:hover {
    transition: 0.5s;
    border: 1px solid #5cd65c;
    background-color: #5ce65c;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

interface CheckedItems {
  terms: boolean;
  productInfo: boolean;
  emailConfirm: boolean;
}

const Payment = () => {
  const [cardToggle, setCardToggle] = useState(false);
  const params = useParams();
  const { id } = params;
  console.log(id);

  const { data, isLoading, error } = useQuery<IDetailItem>(["pay"], () =>
    getDetailItem(Number(id))
  );

  const [personState, setPersonState] = useState<boolean>(true);
  const [institutionState, setInstitutionState] = useState<boolean>(false);
  const navigate = useNavigate();

  const onPersonClicked = () => {
    setPersonState(true);
    setInstitutionState(false);
  };

  const onInstitutionClicked = () => {
    setPersonState(false);
    setInstitutionState(true);
  };

  const [checkedItems, setCheckedItems] = useState<CheckedItems>({
    terms: false,
    productInfo: false,
    emailConfirm: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handlePurchaseClick = async () => {
    if (!isAllChecked()) {
      alert("유의사항에 전부 동의해주세요!");
    } else {
      await axios.post(
        `/orders/complete`,
        {
          totalPrice: data?.standardPrice,
          orderList: [{ foodId: Number(data?.id) }],
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        }
      );
    }
  };

  const isAllChecked = () => {
    return Object.values(checkedItems).every(Boolean);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <Title>주문결제</Title>
      <Banner>
        <LuBox /> 
        <TitleBox>주문상품</TitleBox>
      </Banner>

      <CartItem>
        <ItemImage src={data?.diabetesImg} alt={data?.diabetesName} />
        <ItemDetails>
          <ItemName>{data?.diabetesName}</ItemName>
        </ItemDetails>
        <ItemPriceDetail>
          <ItemPrice>{data?.standardPrice.toLocaleString()}원</ItemPrice>
        </ItemPriceDetail>
      </CartItem>

      <Banner>
        <FaRegUser />
        <TitleBox>주문자</TitleBox>
      </Banner>
      <Form>
        <FormGroup>
          <Label>주문자명</Label>
          <Input type="text" placeholder="(예시) 홍길동" />
        </FormGroup>
        <FormGroup>
          <Label>휴대폰 번호</Label>
          <Input type="text" placeholder="휴대폰 번호" />
        </FormGroup>
        <FormGroup>
          <Label>이메일</Label>
          <Input type="text" placeholder="example@example.com" />
        </FormGroup>
      </Form>
      
      
        
      <Banner>
        <FaWonSign />
        <TitleBox>결제 금액</TitleBox>
      </Banner>
      <PriceWrapper>
        <TotalPrice>
          <span>총 상품 금액</span>
          <span>{data?.standardPrice.toLocaleString()}원</span>
        </TotalPrice>
      </PriceWrapper>
      <FinalPrice>
        <span>최종 결제 금액</span>
        <span>{data?.standardPrice.toLocaleString()}원</span>
      </FinalPrice>
      <Banner>
        <MdOutlinePayment />
        <TitleBox>결제 수단</TitleBox>
      </Banner>
      <CardWrapper>
        <Card onClick={() => setCardToggle(false)} isActive={!cardToggle}>
          <BsCreditCardFill />
          <span>신용카드</span>
        </Card>
        <Card onClick={() => setCardToggle(true)} isActive={cardToggle}>
          <MdAccountBalance />
          <span>가상계좌</span>
        </Card>
      </CardWrapper>
      <Banner>
        <AiOutlineExclamationCircle />
        <span>유의 사항 및 구매 확인</span>
      </Banner>
      <CheckBoxWrapper>
        <div>
          <input
            type="checkbox"
            name="terms"
            checked={checkedItems.terms}
            onChange={handleCheckboxChange}
            required={true}
          />
          <p>
            제품 성분 및 섭취 시 유의사항을 모두 확인하였습니다.
            <span> (필수)</span>
          </p>
        </div>
        <div>
          <input
            type="checkbox"
            name="productInfo"
            checked={checkedItems.productInfo}
            onChange={handleCheckboxChange}
            required={true}
          />
          <p>
            구매하실 상품의 확장자 등 상품 및 결제정보를 확인하였으며,
            구매진행에 동의합니다. <span> (필수)</span>
          </p>
        </div>
        <div>
          <input
            type="checkbox"
            name="emailConfirm"
            checked={checkedItems.emailConfirm}
            onChange={handleCheckboxChange}
            required={true}
          />
          <p>
            주문내역과 구매하신 영수증은 이메일로 전송됩니다. 이메일이 정확한지 다시 한번 확인
            하십시오.
            <span> (필수)</span>
          </p>
        </div>
      </CheckBoxWrapper>
      <ButtonWrapper>
        <PurchaseButton onClick={handlePurchaseClick}>결제하기</PurchaseButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Payment;
