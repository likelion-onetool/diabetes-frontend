import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: #5cd65c; /* 제목에 포인트 색상 적용 */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
`;

const Line = styled(Link)`
  border-bottom: 0.5px solid #3e3e3e;
  width: 900px;
  padding: 12px;
  color: black;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #5cd65c; /* 마우스 호버시 색상 변경 */
  }
`;

const WriteButton = styled(Link)`
  margin-top: 36px;
  margin-left: auto;
  padding: 10px 20px;
  background-color: #5cd65c; /* 버튼 배경색 */
  color: white;
  font-weight: 600;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4bb752; /* 마우스 호버시 버튼 색상 변경 */
  }
`;

const FAQ = () => {
  const faqItems = [
    "제품 배송은 어떻게 이루어지나요?",
    "환불 정책에 대해 알고 싶습니다.",
    "상품 재고 문의를 할 수 있는 방법은 무엇인가요?",
  ]; // 실제로는 API로 불러올 내용들

  return (
    <>
      <Title>자주 묻는 질문</Title>
      <Wrapper>
        {faqItems.map((item, index) => (
          <Line key={index} to={`/faq/${index + 1}`}>
            {index + 1}. {item}
          </Line>
        ))}
      </Wrapper>
    </>
  );
};

export default FAQ;
