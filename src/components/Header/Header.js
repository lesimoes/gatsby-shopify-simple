import React from "react"
import CollectionMenu from "../CollectionMenu/CollectionMenu"
import { HeaderWrapper, LogoContainer, InputContainer } from "./styles"
import {
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiSearch,
} from "react-icons/fi"

export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        <LogoContainer>
          <FiShoppingBag />
        </LogoContainer>
        <InputContainer>
          <input placeholder="O que você quer comprar hoje?"></input>
          <FiSearch />
        </InputContainer>
      </div>

      <CollectionMenu />
    </HeaderWrapper>
  )
}
