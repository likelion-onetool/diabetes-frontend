import styled from "styled-components";
import Input from "../../components/Input";
import { useQuery } from "react-query";
import { getUserInfo } from "../../api";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

const Title = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

const UserProfile = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
`;

const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  span {
    margin-right: 8px;
  }
`;

const LogOutButton = styled.button`
  width: 65px;
  height: 26px;
  border: 1.5px solid red;
  border-radius: 20px;
  color: red;
`;

const Name = styled.span`
  font-size: 15px;
  font-weight: 800;
`;

const Rank = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #a2a2a4;
`;

const Email = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: #a2a2a4;
`;

const Banner = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 24px;
  width: 100%;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  gap: 6px;
  p {
    color: #0029ff;
    font-size: 11px;
    font-weight: 400;
  }
`;

const PasswordChangeButton = styled.button`
  width: 122px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #cccccc;
  font-size: 13px;
  font-weight: 700;
  margin-left: 8px;
`;

const Form = styled.form`
  width: 100%;
`;

const TableRow = styled.div`
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid #dddddd;
  width: 100%;
  span {
    display: flex;
    align-items: center;
    min-width: 170px;
    padding: 0 20px;
    background-color: #f9f9f9;
  }
  i {
    color: #0029ff;
  }
  p {
    font-size: 14px;
    padding: 24px 0 24px 10px;
  }
  input {
    margin-left: 8px;
  }
`;

const TableRowDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 8px;
  padding: 24px 0;
`;

const TableRowCheckBoxDiv = styled.div`
  display: flex;
  padding-top: 24px;
  flex-direction: column;
  align-items: baseline;
  div {
    display: flex;
    align-items: center;
  }
`;

const WithDrawButton = styled.button`
  margin-top: 24px;
  font-size: 15px;
  font-weight: 400;
  text-decoration: underline;
  color: #4e4eff;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 80px;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #cccccc;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
`;

const AcceptButton = styled(Button)`
  color: white;
  background-color: #0034ba;
`;

const HistoryWrapper = styled.div`
  width: 100%;
  margin-top: 72px;
`;

const HitoryTitle = styled.div`
  text-align: center;
  padding: 24px 0;
  border-bottom: 1px solid #cdcdcd;
`;

const HistoryListBox = styled.ul`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fafafc;
  border-bottom: 1px solid #eaeaea;
`;

const HistoryElementBox = styled.div`
  width: 100%;
  height: 89px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eaeaea;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;

interface IProfile {
  email: string;
  password: string;
  birthDate: string;
  name: string;
  phoneNum: string;
  development_field: string;
  isNative: true;
}

interface IForm {
  name: string;
  newPassword: string;
  confirmPassword: string;
  phoneNum: string;
}

const Profile = () => {
  const { data, isLoading, error } = useQuery<IProfile>(["user"], getUserInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const navigate = useNavigate();

  const allChangeClick = async ({
    name,
    newPassword,
    phoneNum,
    confirmPassword,
  }: IForm) => {
    if (newPassword !== confirmPassword) {
      alert("새 비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    try {
      await axios.put(
        "/users",
        {
          password: newPassword,
          name,
          phone_num: phoneNum,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        }
      );
      alert("정보가 성공적으로 수정되었습니다.");
    } catch (error) {
      console.error(error);
      alert("정보 수정에 실패했습니다.");
    }
  };

  const deleteUser = async () => {
    try {
      const res = await axios.delete("/users", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
      });
      if (res.status === 200) {
        alert("탈퇴가 완료되었습니다.");
        sessionStorage.removeItem("accessToken");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>오류가 발생했습니다. 다시 시도해 주세요.</div>;
  }

  return (
    <>
      {data ? (
        <Container>
          <Title>회원정보</Title>
          <UserProfile>
            <UserProfileWrapper>
              <img src="/user.png" alt="user profile" />
              <UserProfileDetail>
                <div>
                  <Name>{data.name}</Name>
                  <Rank>일반회원</Rank>
                </div>
                <div>
                  <Email>{data.email}</Email>
                </div>
              </UserProfileDetail>
            </UserProfileWrapper>
            <LogOutButton>로그아웃</LogOutButton>
          </UserProfile>
          <Banner>
            <span>기본정보</span>
            <p>* 표시는 반드시 입력하셔야 하는 항목입니다.</p>
          </Banner>

          <Form onSubmit={handleSubmit(allChangeClick)}>
            <TableRow>
              <span>아이디</span>
              <p>{data.email}</p>
            </TableRow>
            <TableRow>
              <span>비밀번호</span>
              <TableRowDiv>
                <Input
                  type="password"
                  placeholder="새 비밀번호"
                  {...register("newPassword", {
                    required: true,
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{10,16}$/,
                      message: "비밀번호 형식에 맞게 입력해주세요.",
                    },
                  })}
                />
                {errors.newPassword && (
                  <ErrorMessage>{errors.newPassword.message}</ErrorMessage>
                )}
                <Input
                  type="password"
                  placeholder="새 비밀번호 확인"
                  {...register("confirmPassword", { required: true })}
                />
              </TableRowDiv>
            </TableRow>
            <TableRow>
              <span>
                이름<i>*</i>
              </span>
              <TableRowDiv>
                <Input
                  type="text"
                  defaultValue={data.name}
                  {...register("name", { required: true })}
                />
              </TableRowDiv>
            </TableRow>
            <TableRow>
              <span>
                휴대폰 번호<i>*</i>
              </span>
              <TableRowCheckBoxDiv>
                <Input
                  type="text"
                  defaultValue={data.phoneNum}
                  {...register("phoneNum", { required: true })}
                />
                <div>
                  <input type="checkbox" />
                  <p>이벤트 등의 마케팅 소식을 SMS로 받습니다.</p>
                </div>
              </TableRowCheckBoxDiv>
            </TableRow>
            <ButtonWrapper>
              <AcceptButton type="submit">수정완료</AcceptButton>
              <Button type="button">취소</Button>
            </ButtonWrapper>
          </Form>
          <WithDrawButton onClick={() => deleteUser()}>
            회원 탈퇴하기 {">>"}
          </WithDrawButton>
          <HistoryWrapper>
            <HitoryTitle>
              <span>최근 주문 내역</span>
            </HitoryTitle>
            <HistoryListBox>
              <li>상품 정보</li>
              <li>주문 번호</li>
              <li>상품 금액</li>
              <li>주문 상태</li>
            </HistoryListBox>
            <HistoryElementBox>
              <p>최근 주문 내역이 없습니다.</p>
            </HistoryElementBox>
          </HistoryWrapper>
          <HistoryWrapper>
            <HitoryTitle>
              <span>나의 문의 내역</span>
            </HitoryTitle>
            <HistoryListBox>
              <li>날짜</li>
              <li>문의 제목</li>
              <li>문의 내용</li>
              <li>문의 상태</li>
            </HistoryListBox>
            <HistoryElementBox>
              <p>최근 상품 문의 내역이 없습니다.</p>
            </HistoryElementBox>
          </HistoryWrapper>
        </Container>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Profile;
