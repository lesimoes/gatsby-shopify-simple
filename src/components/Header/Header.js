import React from "react"
import CollectionMenu from "../CollectionMenu/CollectionMenu"
import { HeaderWrapper, LogoContainer, InputContainer, ActionContainer } from "./styles"
import {
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiShoppingBag,
  FiSearch,
} from "react-icons/fi"
import { Link } from "gatsby"

export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        <LogoContainer>
          <Link to="/">
            <FiShoppingBag />
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
