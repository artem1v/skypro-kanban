import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #ffffff;
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  img {
    width: 84.13323974609375;
    height: 17.18410873413086;
    opacity: 1;
    top: 27.91px;
    left: 135px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
`;

export const HeaderButton = styled.button`
  background: #565eef;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  font-size: 14px;

  &:hover {
    background: #3d44b3;
    transform: translateY(-1px);
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export const HeaderUser = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #565eef;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 4px;
  position: relative;

  &:hover {
    color: #3d44b3;
    background: #f0f2ff;
  }

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

  ${(props) =>
    props.$isOpen &&
    `
    &::after {
      transform: rotate(180deg);
    }
  `}
`;
