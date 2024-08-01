import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/Input";
import UserFormGroup from "./components/UserFormGroup";
import UserLabel from "./components/UserLabel";
import { Button } from "./Login";
import { useForm } from "react-hook-form";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

const InnerTab = styled(Link)<{ isActive: boolean }>`
  width: 171.5px;
  height: 40px;
  border-bottom: 2px solid
    ${(props) => (props.isActive ? "#333333" : "#cccccc")};
  text-align: center;
  color: ${(props) => (props.isActive ? "#333333" : "#cccccc")};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    color: #333333;
  }
`;

const FindIdButton = styled(Button)`
  background-color: #999999;
  color: #ffffff;
`;

const SuccessWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  span {
    font-weight: 700;
  }
  font-weight: 400;
  font-size: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const FindUserId = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [idSuccess, setIDSuccess] = useState<boolean>(false);

  const onClick = () => {
    setIDSuccess((prev) => !prev);
  };
  // test목적으로 사용됨.

  return (
    <Container>
      <Tab>
        <InnerTab to="/users/find/id" isActive={true}>
          <span>아이디 찾기</span>
        </InnerTab>
        <InnerTab to="/users/find/password" isActive={false}>
          <span>비밀번호 찾기</span>
        </InnerTab>
      </Tab>
      {idSuccess ? (
        <SuccessWrapper>
          <span>정재민</span>님의 아이디는
          <br />
          <span>onetool@gmail.com</span> 입니다.
        </SuccessWrapper>
      ) : (
        <Form>
          <UserFormGroup>
            <UserLabel>이름</UserLabel>
            <Input
              type="text"
              placeholder="이름을 입력해주세요."
              {...register("name", { required: true })}
            />
          </UserFormGroup>
          <UserFormGroup>
            <UserLabel>전화번호</UserLabel>
            <Input type="text" placeholder="전화번호를 입력해주세요." />
          </UserFormGroup>
          <FindIdButton onClick={onClick}>아이디 찾기</FindIdButton>
        </Form>
      )}
    </Container>
  );
};

export default FindUserId;
