import React from "react"
import CollectionMenu from "../CollectionMenu/CollectionMenu"
import { HeaderWrapper, LogoContainer, InputContainer, ActionContainer } from "./styles"
import {
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiSearch,
} from "react-icons/fi"
import { Link } from "gatsby"

export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        <LogoContainer>
          <Link to="/">
            <img src="/logo.png" alt="logo"/>
          </Link>
        </LogoContainer>
        <InputContainer>
          <input placeholder="O que você quer comprar hoje?"></input>
          <FiSearch />
        </InputContainer>
        <ActionContainer>
            <FiShoppingCart />
            <FiHeart />
            <FiUser />
        </ActionContainer>
      </div>

      <CollectionMenu />
    </HeaderWrapper>
  )
}
