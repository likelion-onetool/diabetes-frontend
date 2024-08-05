import React from 'react';
import styled from 'styled-components';
import { RiKakaoTalkLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

// Styled components
const FooterContainer = styled.footer`
  background-color: #f0f0f2;
  text-align: left;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 78px;
  border-top: 1px solid #dee2e6;
  border-bottom: 1px solid #dee2e6;
  padding: 15px 72px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 22px;
  
`;

const Button = styled.a`
  font-weight: 500;
  font-size: 13.23px;
  line-height: 14px;
  letter-spacing: 0.15px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`;

const IconContainer = styled.div`
  display: flex;
  margin-right: -30px;
  gap: 15px;
  font-size: 25px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const BottomContainer = styled.div`
  height: 156px;
  padding: 48px 72px 74px 72px;
  display: flex;
  align-items: center;
  color: #6D6D70;
  font-size: 13.31px;
  line-height: 11px;
  font-weight: 400;
  letter-spacing: 0.15px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  margin-left: 70px;
`;

const PhoneNumber = styled.span`
  padding: 10px 0px 0px 0px;
  font-size: 20px;
  font-weight: 700;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <TopContainer>
        <ButtonContainer>
          <Button href="#!">이용약관</Button>
          <Button href="#!">개인정보처리방침</Button>
          <Button href="#!">EULA</Button>
          <Button href="#!">식단 관리 파트너 신청</Button>
          <Button href="#!">고객센터</Button>
          <Button href="#!">공지사항</Button>
        </ButtonContainer>
        <IconContainer>
        <RiKakaoTalkLine />
        <FaInstagram />
    
        </IconContainer>
      </TopContainer>
      <BottomContainer>
        <InfoContainer>
          법인명: 주식회사 원툴 | 대표자: 정재민<br />
          사업자등록번호: 690-95-01701 | 사업자정보확인 | 통신판매업신고번호: -<br />
          주소: 서울특별시 광진구 능동로 209 6층<br />
          개인정보관리책임: 정재민 | 호스팅 제공: Amazon Web Service(AWS)<br />
          Copyright @ 2024 ONETOOL. All Rights Reserved.
        </InfoContainer>
        <ContactContainer>
          대량 구매 / 위탁 배송 / 기업 상담<br />
          일반 문의는 채팅 상담을 사용해주세요.<br />
          <PhoneNumber>02-878-1201</PhoneNumber>
          onetoolfirst@gmail.com
        </ContactContainer>
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
