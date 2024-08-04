import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcFaq } from "react-icons/fc";
import { FaHandsHelping } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";
import { useEffect, useState } from "react";
import TopNavBar from "../../components/TopNavBar";
import LeftSidebar from "../../components/LeftSidebar";
import MainBanner from "../../components/MainBanner";
import MainPageSlider from "../../components/MainPageSlider";
import Footer from "../../components/Footer";
import { useQuery } from "react-query";
import { getAllItems, IItemsProp } from "../../api";
import { formatPrice } from "../../components/ItemCard";

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

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }
`;

const InfoOverlay = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.5); /* Background with transparency */
  color: #fff;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const OverlayText = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const OverlayPrice = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const MainPage = () => {
  const { data, isLoading, error } = useQuery<IItemsProp>(["main"], () =>
    getAllItems(0, 13)
  );
  const [mainImg, setMainImg] = useState<string>("");
  const [mainProductName, setMainProductName] = useState<string>("");
  const [mainProductPrice, setMainProductPrice] = useState<string>("");
  const [mainProductId, setMainProductId] = useState<number>(0);
  const [sliderImgArray, setSliderImgArray] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      const firstItem = data.content[0];
      setMainImg(firstItem.diabetes.diabetesImg);
      setMainProductName(firstItem.diabetes.diabetesName);
      setMainProductPrice(`${formatPrice(firstItem.diabetes.standardPrice)}원`);
      setMainProductId(firstItem.diabetes.id);
      const images = data.content.map((item) => item.diabetes.diabetesImg);
      setSliderImgArray(images.slice(0, 5));
    }
  }, [data]);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonIndex = parseInt(e.currentTarget.name) - 1;
    const selectedItem = data?.content[buttonIndex];
    if (selectedItem) {
      setMainImg(selectedItem.diabetes.diabetesImg);
      setMainProductName(selectedItem.diabetes.diabetesName);
      setMainProductPrice(
        `${formatPrice(selectedItem.diabetes.standardPrice)}원`
      );
      setMainProductId(selectedItem.diabetes.id);
    }
  };

  const sliderData1 = data?.content?.slice(0, 6) || [];
  const sliderData2 = data?.content?.slice(6, 12) || [];
  console.log(sliderData1);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {" "}
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
                    <HorizontalBannerTitle>인기 상품</HorizontalBannerTitle>
                    <ImageWrapper>
                      <Link to={`/items/detail/${mainProductId}`}>
                        <img src={mainImg} alt="main" />
                      </Link>
                      <InfoOverlay>
                        <OverlayText>{mainProductName}</OverlayText>
                        <OverlayPrice>{mainProductPrice}</OverlayPrice>
                      </InfoOverlay>
                    </ImageWrapper>
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
                      {data?.content.slice(0, 2).map((item, index) => (
                        <Link
                          to={`/items/detail/${item.diabetes.id}`}
                          key={index}
                        >
                          <FamousProduct>
                            <img
                              src={item.diabetes.diabetesImg}
                              alt={item.diabetes.diabetesName}
                            />
                            <FamousProductInfoWrapper>
                              <FamousProductTitle>
                                {item.diabetes.category}
                              </FamousProductTitle>
                              <FamousProductName>
                                {item.diabetes.diabetesName}
                              </FamousProductName>
                              <FamousProductPrice>
                                {formatPrice(item.diabetes.standardPrice)}원
                              </FamousProductPrice>
                            </FamousProductInfoWrapper>
                          </FamousProduct>
                        </Link>
                      ))}
                    </FamousProductContainer>
                  </HorizontalElementContainer>
                  <HorizontalElementContainer>
                    <HorizontalBannerTitle>
                    당뇨병 관리 식단 서비스, ONETOOL 활용법
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
                        <span>단체주문 작성하기</span>
                        <div>
                          <PartnerIcon />
                          <i>&rarr;</i>
                        </div>
                      </UseButton>
                    </ButtonWrapper>
                    <HorizontalBannerTitle>
                      식단 관리 고객 리뷰
                    </HorizontalBannerTitle>
                    <CurrentButton>
                      <NewsPaperIcon />
                      <div>
      
                        <span>고객님들이 선택한 식단을<br />확인해보세요!</span>
                      </div>
                    </CurrentButton>
                  </HorizontalElementContainer>
                </HorizontalBanners>

                <HorizontalBannerTitle>
                  ONETOOL 파트너 브랜드
                </HorizontalBannerTitle>
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

                <SliderWrapper>
                  <MainPageSlider title={"단독 상품!"} content={sliderData1} />
                  <MainPageSlider title={"오늘의 추천"} content={sliderData2} />
                </SliderWrapper>
              </DetailContainer>
            </ContentContainer>
          </MainContainer>
          <Footer />
        </>
      )}
    </>
  );
};

export default MainPage;
