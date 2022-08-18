import styled from 'styled-components';

export const CartIcon = styled.div`
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
  }
`;