import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const BannerWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const TestBanner = styled(motion.div)<{ bgImage: string }>`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* 이미지 어두운 효과 */
    border-radius: 16px;
    z-index: 1;
  }
  p {
    margin-left: 64px;
    z-index: 2;
    position: relative;
  }
  svg {
    color: white;
    width: 20px;
    height: 20px;
    z-index: 2;
  }
`;

const PrevBtn = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 16px;
  z-index: 2;
`;

const NextBtn = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 16px;
  z-index: 2;
`;

const variants = {
  enter: {
    opacity: 0,
    scale: 0.9,
    zIndex: 0,
  },
  center: {
    opacity: 1,
    scale: 1,
    zIndex: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    zIndex: 0,
  },
};

const MainBanner = () => {
  const imgs = [
    "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1667389723440-dbbde959df52?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVCJThGJTg0JUVDJThCJTlDJUVCJTlEJUJEfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1547132717-0cd6145a2e6b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVCJThGJTg0JUVDJThCJTlDJUVCJTlEJUJEfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1508170754725-6e9a5cfbcabf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fCVFQiU4RiU4NCVFQyU4QiU5QyVFQiU5RCVCRHxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1498534097/ko/%EC%82%AC%EC%A7%84/%ED%86%A0%EB%A7%88%ED%86%A0-%EC%8C%80-%EA%B0%88%EC%9D%80-%EC%87%A0%EA%B3%A0%EA%B8%B0%EB%A5%BC-%EA%B3%81%EB%93%A4%EC%9D%B8-%EC%96%91%EC%83%81%EC%B6%94-%EC%83%90%EB%9F%AC%EB%93%9C%EB%A5%BC-%EA%B3%81%EB%93%A4%EC%9D%B8-%EB%8F%84%EC%8B%9C%EB%9D%BD.webp?b=1&s=170667a&w=0&k=20&c=SZa7TgHqhlLehR7a2WFdzKPTQ65AFUd8_WKYt12ib-U=",
    "https://media.istockphoto.com/id/2081769995/ko/%EC%82%AC%EC%A7%84/holding-a-bowl-of-chicken-salad.webp?b=1&s=170667a&w=0&k=20&c=DmbIHpKsYYtlraAfOUuvXVpUSyL7RKp_o1f-hgxM2Q0=",
  ];

  const texts = [
    ["당뇨병 환자도 즐길 수 있는 건강한 도시락!", "지금 바로 확인하세요"],
    ["균형 잡힌 영양소로 가득한 도시락!", "건강을 지키는 첫걸음"],
    ["맛있고 건강한 당뇨병 전용 도시락!", "지금 주문하세요"],
    ["당뇨병 관리, 쉽고 맛있게!", "식단 계획 고민 끝!"],
    ["당뇨병에도 맛을 포기하지 마세요!", "건강한 한 끼를 만나보세요"],
    ["당신의 건강을 위한 특별한 도시락", "정성을 담아 준비했습니다"],
  ];

  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % imgs.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, imgs.length]);

  const handleNext = () => {
    if (isLeaving) {
      return;
    }
    toggleLeaving();
    setIndex((prevIndex) => (prevIndex + 1) % imgs.length);
  };

  const handlePrev = () => {
    if (isLeaving) {
      return;
    }
    toggleLeaving();
    setIndex((prevIndex) => (prevIndex - 1 + imgs.length) % imgs.length);
  };

  const toggleLeaving = () => setIsLeaving((prev) => !prev);

  return (
    <BannerWrapper>
      <AnimatePresence
        initial={false}
        custom={index}
        onExitComplete={() => setIsLeaving(false)}
      >
        <TestBanner
          key={index}
          custom={index}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7 }}
          bgImage={imgs[index]}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p>{texts[index][0]}</p>
          <p>{texts[index][1]}</p>
          <NextBtn>
            <button onClick={handleNext}>
              <IoIosArrowDown />
            </button>
          </NextBtn>
          <PrevBtn>
            <button onClick={handlePrev}>
              <IoIosArrowUp />
            </button>
          </PrevBtn>
        </TestBanner>
      </AnimatePresence>
    </BannerWrapper>
  );
};

export default MainBanner;
