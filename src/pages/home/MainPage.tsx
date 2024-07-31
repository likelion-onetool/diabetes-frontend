import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcFaq } from "react-icons/fc";
import { FaHandsHelping } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { useState } from "react";
import TopNavBar from "../../components/TopNavBar";
import LeftSidebar from "../../components/LeftSidebar";
import MainBanner from "../../components/MainBanner";
import MainPageSlider from "../../components/MainPageSlider";
import Footer from "../../components/Footer";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
`;

const DetailContainer = styled.div`
  width: 100%;
  padding: 48px 40px;
`;

const BannersContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
`;

const Banner2 = styled.div`
  width: 100%;
  height: 274px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #203a92;
  img {
    width: 200px;
  }
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 24px;
`;

const HorizontalBanners = styled.div`
  width: 100%;
  margin-top: 82px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 64px;
`;

const HorizontalBannerTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const HorizontalElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  img {
    width: 100%;
    max-height: 248px;
    object-fit: cover;
    object-position: center;
    border-radius: 16px;
  }
`;

const SliderPreviewImg = styled.img`
  width: 100%;
  height: 100%;
`;

const HorizontalSliderWrapper = styled.div`
  display: flex;
  gap: 4px;
  button {
    width: 20%;
    height: 70px;
  }
`;

const FamousProductContainer = styled.div`
  border: 1px solid #e7e7e8;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`;

const FamousProduct = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 145px;
    object-fit: cover;
    object-position: center;
    border-radius: 4px;
  }
`;

const FamousProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  gap: 4px;
`;

const FamousProductTitle = styled.span`
  font-size: 11px;
  color: #a0a0a0;
`;

const FamousProductName = styled.span`
  font-size: 13px;
`;

const FamousProductPrice = styled.span`
  font-weight: 700;
  font-size: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

const UseButton = styled.button`
  width: 100%;
  background-color: #f5f5f6;
  border-radius: 100px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 20px 26px;
  font-size: 15px;
  font-weight: 700;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const FaqIcon = styled(FcFaq)`
  font-size: 44px;
  left: 82px;
`;

const PartnerIcon = styled(FaHandsHelping)`
  font-size: 44px;
  left: 82px;
  color: #fbceb1;
`;

const CurrentButton = styled(UseButton)`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

const NewsPaperIcon = styled(ImNewspaper)`
  font-size: 44px;
  left: 82px;
  color: #5b5b5b;
`;

const PartnerBrandWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 16px;
  margin-bottom: 60px;
`;

const BrandLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BrandLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin-bottom: 18px;
`;

const BrandName = styled.span`
  font-size: 13px;
  font-weight: 700;
`;

const BrandProductCount = styled.span`
  font-size: 11px;
  color: #88888a;
`;

const MainPage = () => {
  const [mainImg, setMainImg] = useState<string>("/horizontal1.jpg");
  const [sliderImgArray, setSliderImgArray] = useState<string[]>([
    "/horizontal1.jpg",
    "/horizontal2.jpg",
    "/horizontal3.jpg",
    "/horizontal4.jpg",
    "/horizontal5.jpg",
  ]);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonName = e.currentTarget.name;
    const newMainImg = sliderImgArray[parseInt(buttonName) - 1];
    setMainImg(newMainImg);
  };

  return (
    <>
      <TopNavBar />
      <MainContainer>
        <ContentContainer>
          <LeftSidebar />
          <DetailContainer>
            <BannersContainer>
              <MainBanner />
              <Link
                to={
                  "https://garrulous-bearskin-817.notion.site/ONETOOL-e7a9e586415142ab9a2f49d3b4f0146d?pvs=4"
                }
                target="_blank"
              >
                <Banner2>
                  <img src="/banner2.png" />
                  <p>
                    처음 방문하셨나요? <br />
                    ONETOOL을 소개합니다.
                  </p>
                </Banner2>
              </Link>
            </BannersContainer>
            <HorizontalBanners>
              <HorizontalElementContainer>
                <HorizontalBannerTitle>
                  지금 놓치면 가격이 올라가요
                </HorizontalBannerTitle>
                <img src={mainImg} alt="main" decoding="async" />
                <HorizontalSliderWrapper>
                  {sliderImgArray.map((img, index) => (
                    <button
                      key={index}
                      name={(index + 1).toString()}
                      onClick={onClick}
                    >
                      <SliderPreviewImg
                        src={img}
                        alt={`thumbnail ${index + 1}`}
                        decoding="async"
                      />
                    </button>
                  ))}
                </HorizontalSliderWrapper>
              </HorizontalElementContainer>

              <HorizontalElementContainer>
                <HorizontalBannerTitle>
                  많은 사람들이 구매했어요
                </HorizontalBannerTitle>
                <FamousProductContainer>
                  <FamousProduct>
                    <img src="/horizontal1.jpg" alt="" />
                    <FamousProductInfoWrapper>
                      <FamousProductTitle>네모</FamousProductTitle>
                      <FamousProductName>
                        효과음 오토액션&스타일
                      </FamousProductName>
                      <FamousProductPrice>9,900원</FamousProductPrice>
                    </FamousProductInfoWrapper>
                  </FamousProduct>
                  <FamousProduct>
                    <img src="/horizontal2.jpg" alt="" />
                    <FamousProductInfoWrapper>
                      <FamousProductTitle>네모</FamousProductTitle>
                      <FamousProductName>
                        효과음 오토액션&스타일
                      </FamousProductName>
                      <FamousProductPrice>9,900원</FamousProductPrice>
                    </FamousProductInfoWrapper>
                  </FamousProduct>
                  <FamousProduct>
                    <img src="/horizontal3.jpg" alt="" />
                    <FamousProductInfoWrapper>
                      <FamousProductTitle>네모</FamousProductTitle>
                      <FamousProductName>
                        효과음 오토액션&스타일
                      </FamousProductName>
                      <FamousProductPrice>9,900원</FamousProductPrice>
                    </FamousProductInfoWrapper>
                  </FamousProduct>
                </FamousProductContainer>
              </HorizontalElementContainer>
              <HorizontalElementContainer>
                <HorizontalBannerTitle>
                  한 손에 잡히는 도구, ONETOOL 활용법
                </HorizontalBannerTitle>
                <ButtonWrapper>
                  <Link to={"/faq"}>
                    <UseButton>
                      <span>문의사항 작성하기</span>
                      <div>
                        <FaqIcon />
                        <i>&rarr;</i>
                      </div>
                    </UseButton>
                  </Link>
                  <UseButton>
                    <span>파트너 신청하기</span>
                    <div>
                      <PartnerIcon />
                      <i>&rarr;</i>
                    </div>
                  </UseButton>
                </ButtonWrapper>
                <HorizontalBannerTitle>ONETOOL 거래 현황</HorizontalBannerTitle>
                <CurrentButton>
                  <NewsPaperIcon />
                  <div>
                    <span>총 자료 수 : 2024건 이상</span>
                    <span>누적 다운로드 수 : 1억건 이상</span>
                  </div>
                </CurrentButton>
              </HorizontalElementContainer>
            </HorizontalBanners>

            <HorizontalBannerTitle>ONETOOL 파트너 브랜드</HorizontalBannerTitle>
            <PartnerBrandWrapper>
              <BrandLink to={"/search/onetool"}>
                <BrandLogo src="/onetool-logo.png" alt="" />
                <BrandName>ONETOOL</BrandName>
                <BrandProductCount>20개 상품</BrandProductCount>
              </BrandLink>
              <BrandLink to={"/search/onetool"}>
                <BrandLogo src="/onetool-logo.png" alt="" />
                <BrandName>ONETOOL</BrandName>
                <BrandProductCount>20개 상품</BrandProductCount>
              </BrandLink>
            </PartnerBrandWrapper>

            <MainPageSlider title={"단독 상품!"} />
            <MainPageSlider title={"오늘의 추천"} />
            <MainPageSlider title={"오늘만 할인!"} />
          </DetailContainer>
        </ContentContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default MainPage;
