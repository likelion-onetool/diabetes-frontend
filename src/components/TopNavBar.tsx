import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import axios from "axios";

const TopNavBarContainer = styled.div`
  display: flex;
  height: 128px;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 4px 40px;
  border: 1px solid #e8e8e8;
`;

const Logo = styled.img`
  width: 220px;
  height: auto;
  margin-left: -15px;
`;

const SearchBar = styled.input`
  width: 832px;
  height: 46px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  padding: 26px;
  font-size: 16px;
  margin-left: -30px;
`;

const Icons = styled.div`
  width: 64px;
  height: 128px;
  padding: 11px 0px;
  gap: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface IForm {
  search: string;
}

const TopNavBar = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const navigate = useNavigate();

  const onValid = ({ search }: IForm) => {
    navigate(`/items?s=${search}&page=${1}`);
  };

  return (
    <TopNavBarContainer>
      <Link to={"/"}>
        <Logo src="/onetooldiabeteslogo.jpg" alt="Logo" />
      </Link>
      <form onSubmit={handleSubmit(onValid)}>
        <SearchBar
          type="text"
          placeholder="어떤 도면을 찾고 계신가요?"
          {...register("search", { required: true })}
        />
      </form>
      <Icons>
        <Link to="/cart">
          <PiShoppingCartSimpleBold style={{ width: "22px", height: "22px" }} />
        </Link>
        <Link to="/users/login">
          <FaRegUser style={{ width: "18px", height: "18px" }} />
        </Link>
      </Icons>
    </TopNavBarContainer>
  );
};

export default TopNavBar;
