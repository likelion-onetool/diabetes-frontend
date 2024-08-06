import styled from "styled-components";
import { Title, Wrapper as FAQWrapper } from "./FAQ"; // FAQ에서 export한 Title과 Wrapper를 import합니다.
import { Link, useParams } from "react-router-dom";
import FaqBackButton from "./components/FaqBackButton";
import { faqData } from "../../utils/data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Question = styled.h3`
  color: #5cd65c;
  font-size: 1.5rem;
  margin-bottom: 12px;
`;

const Answer = styled.div`
  padding: 12px;
  line-height: 1.6;
  border-left: 4px solid #5cd65c;
  background-color: #f9fff9;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const StyledFaqBackButton = styled(FaqBackButton)`
  margin-top: 20px;
  background-color: #5cd65c;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4bb752;
  }
`;

interface IFaqDetail {
  id: number;
  question: string;
  answer: string;
}

const FAQDetail = () => {
  const params = useParams();
  const id = Number(params.id);
  const data: IFaqDetail[] = faqData;

  const faqDetail = data[id - 1]; // Array index는 0부터 시작하므로 id - 1로 접근

  return (
    <Container>
      <Title>문의사항</Title>
      <FAQWrapper>
        <>
          <Question>Q. {faqDetail?.question}</Question>
          <Answer>A : {faqDetail?.answer}</Answer>
        </>
      </FAQWrapper>
      <Link to="/faq">
        <StyledFaqBackButton>&larr; 뒤로가기</StyledFaqBackButton>
      </Link>
    </Container>
  );
};

export default FAQDetail;
