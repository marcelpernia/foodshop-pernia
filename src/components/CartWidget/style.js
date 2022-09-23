import styled, {css} from "styled-components";

const hasItemsMixin = css`
  background-color: var(--success);
  &:hover {
    background-color: #218838;
  }
  &:active {
    background-color: var(--success);
  }
  color: white;
`;

export const CartIcon = styled.div`
  a {
    color: var(--text);
    text-decoration: none;
    display: flex;
    align-items: center;
    background-color: var(--graySoft);
    height: 50px;
    padding: 0px 20px;
    border-radius: 30px;
    cursor: pointer;
    &:hover {
      background-color: var(--graySoftHover);
    }
    .icon {
      width: 24px;
      flex: none;
      margin-right: 5px;
    }
    .counter {
      font-size: 16px;
      font-weight: 500;
      text-decoration: none;
    }
    ${(props) => props.hasItems && hasItemsMixin};
  }
`;
