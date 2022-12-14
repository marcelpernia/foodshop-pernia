import styled from 'styled-components'

export const Count = styled.div`
  height: 40px;
  border-radius: 20px;
  background-color: var(--primary);
  width: 170px;
  margin: auto;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-weight: 600;
    font-size: 16px;
    color: white;
  }
  button {
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    background-color: transparent;
    color: white;
    cursor: pointer;
    .icon {
        width: 30px;
    }
    &:hover {
      background-color: rgba(0,0,0,.1);
    }
    &:active {
      background-color: transparent;
    }
  }
`;

export const AddToCart = styled.button`
    border: none;
    cursor: pointer;
    height: 40px;
    border-radius: 20px;
    background-color: var(--primary);
    width: 170px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    color: white;
    position: relative;
    .icon {
      width: 30px;
      position: absolute;
      right: 5px;
      top: 5px;
    }
    &:hover {
      box-shadow: inset 0 -60px 0 rgba(0,0,0,.1);
    }
    span:not(:only-child) {
      padding-right: 25px;
    }
`;