import styled from "styled-components";
import { Outlet } from "react-router-dom";
import TopNavBar from "../../../components/TopNavBar";
import LeftSidebar from "../../../components/LeftSidebar";
import Footer from "../../../components/Footer";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
`;

const RightContainer = styled.div`
  width: 100%;
  padding: 0 40px;
  overflow-x: hidden;
`;

const SharedLayout = () => {
  return (
    <>
      <TopNavBar />
      <MainContainer>
        <ContentContainer>
          <LeftSidebar />
          <RightContainer>
            <Outlet /> {/* 각 페이지의 컨텐츠가 여기에 렌더링됩니다 */}
          </RightContainer>
        </ContentContainer>
        <Footer />
      </MainContainer>
    </>
  );
};

export default SharedLayout;
