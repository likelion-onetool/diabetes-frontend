import { SiMinutemailer } from "react-icons/si";

import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const Circle = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
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

const PaymentSuccess = () => {
  return (
    <Wrapper>
      <Circle>
        <SiMinutemailer />
      </Circle>
      <Empty>결제가 완료되었습니다.</Empty>
      <Go>일주일 이내로 상품이 전송예정입니다.</Go>
      <FamLink to={"/items"}>새로운 상품 구경가기 &rarr;</FamLink>
    </Wrapper>
  );
};

export default PaymentSuccess;
