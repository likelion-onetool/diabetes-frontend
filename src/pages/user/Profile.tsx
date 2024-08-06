import styled from "styled-components";
import Input from "../../components/Input";
import { useQuery } from "react-query";
import { getUserInfo, IContent } from "../../api";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

const Title = styled.span`
  font-size: 17px;
  font-weight: 600;
`;

const UserProfile = styled.div`
  display: flex;
  gap: 12px;
  padding: 10px 23px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
  border: 1px solid #cccccc;
  border-radius: 50px;
`;

const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
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
  padding: 10px 8px;
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
  font-size: 17px;
  font-weight: 700;
  p {
    color: red;
    font-size: 12px;
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
    color: red;
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
const WithDrawWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const WithDrawButton = styled.button`
  color: black;
  width: 160px;
  height: 45px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: -20px;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
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
  border: #5ce65c;
  background-color: #5ce65c;
`;

const HistoryWrapper = styled.div`
  width: 100%;
  margin-top: 72px;
`;

const ProfilePic = styled.div`
  font-size: 40px;
`;
const HitoryTitle = styled.div`
  text-align: center;
  padding: 24px 0;
  border-bottom: 1px solid #cdcdcd;
  font-size: 18px;
  font-weight: 600;
`;

const HistoryListBox = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fafafc;
  border-bottom: 1px solid #eaeaea;
  padding: 10px 0;
  font-weight: 600;
  font-size: 13px;

  li {
    flex: 1;
    text-align: center;
    color: #333;
  }
`;

const HistoryElementBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #eaeaea;
  padding: 15px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;

  &:last-child {
    border-bottom: none;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;

const ListItem = styled.li`
  display: flex;
  margin-bottom: 10px;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const ItemPrice = styled.span`
  font-size: 12px;
  color: grey;
`;

interface IProfile {
  email: string;
  password: string;
  birthDate: string;
  name: string;
  phoneNum: string;
  development_field: string;
  isNative: true;
  orderCompleteResponseDtos: ICartData[];
}

interface ICartData {
  totalPrice: number;
  items: IContent[];
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

  const logOutClick = () => {
    const token = sessionStorage.removeItem("accessToken");
    alert("로그아웃 되었습니다.");
    navigate("/");
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
              <ProfilePic>
                {" "}
                <CgProfile />
              </ProfilePic>

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
            <LogOutButton onClick={() => logOutClick()}>로그아웃</LogOutButton>
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
              <span>
                비밀번호<i>*</i>
              </span>
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
              <AcceptButton type="submit">수정 완료</AcceptButton>
              <Button type="button">취소</Button>
            </ButtonWrapper>
          </Form>
          <WithDrawWrapper>
            <WithDrawButton onClick={() => deleteUser()}>
              회원 탈퇴하기 {">>"}
            </WithDrawButton>
          </WithDrawWrapper>
          <HistoryWrapper>
            <HitoryTitle>
              <span>최근 주문 내역</span>
            </HitoryTitle>
            <HistoryListBox>
              <li>상품 정보</li>
            </HistoryListBox>
            <HistoryElementBox>
              {data.orderCompleteResponseDtos.map((item, index) => (
                <ListItem key={index}>
                  <ItemImage
                    src={item.items[0].diabetesImg}
                    alt={item.items[0].diabetesName}
                  />
                  <ItemInfo>
                    <ItemName>{item.items[0].diabetesName}</ItemName>
                    <ItemPrice>{item.items[0].standardPrice}</ItemPrice>
                  </ItemInfo>
                </ListItem>
              ))}
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
