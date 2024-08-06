import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { isUserLoggedIn } from "../utils/functions";

const TopNavBarContainer = styled.div`
  display: flex;
  height: 128px;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 4px 40px;
  border: 1px solid #e8e8e8;
  margin-bottom: 2rem;
`;

const Logo = styled.img`
  width: 250px;
  height: auto;
  margin-left: -15px;
`;

const SearchBar = styled.input`
  width: 900px;
  height: 46px;
  border-radius: 50px;
  border: 3px solid #dadada;
  padding: 26px;
  font-size: 16px;
  margin-left: -80px;
`;

const Icons = styled.div`
  width: 64px;
  height: 128px;
  padding: 11px 0px;
  gap: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

interface IForm {
  search: string;
}

const TopNavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<IForm>();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const result = await isUserLoggedIn();
      setIsLoggedIn(result);
    };

    checkUserLoggedIn();
  }, []);

  const onValid = ({ search }: IForm) => {
    navigate(`/items?s=${search}&page=${0}`);
  };

  return (
    <TopNavBarContainer>
      <Link to={"/"}>
        <Logo src="/onetooldiabeteslogo.jpg" alt="Logo" />
      </Link>
      <form onSubmit={handleSubmit(onValid)}>
        <SearchBar
          type="text"
          placeholder="어떤 제품을 찾고 계신가요?"
          {...register("search", { required: true })}
        />
      </form>
      <Icons>
        {isLoggedIn ? (
          <>
            <Link to="/cart">
              <PiShoppingCartSimpleBold
                style={{ width: "26px", height: "26px"}}
              />
            </Link>
            <Link to="/users/profile">
              <FaRegUser style={{ width: "23px", height: "23px" }} />
            </Link>
          </>
        ) : (
          <Link to="/users/login">
            <FaRegUser style={{ width: "23px", height: "23px" }} />
          </Link>
        )}
      </Icons>
    </TopNavBarContainer>
  );
};

export default TopNavBar;
