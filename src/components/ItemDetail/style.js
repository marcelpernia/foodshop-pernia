import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  max-width: 600px;
  text-align: center;
`;

export const BackBtn = styled.div`
  text-decoration: none;
  text-align: left;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: gray;
  .icon {
    width: 24px;
    margin-top: -2px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const Image = styled.figure`
  img {
    display: block;
    width: 100%;
    max-width: 350px;
    margin: auto;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  margin-top: 30px;
`;

export const AddToCart = styled.div`
  margin-top: 30px;
  border-radius: 50px;
  padding: 20px;
  box-shadow: 0px 0px 31px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .add-to-cart-btn {
    margin: initial;
    height: 50px;
    border-radius: 25px;
    width: 50%;
    padding-right: 0;
    button {
      height: 50px;
      width: 50px;
    }
    .icon {
      width: 35px;
      right: 7.5px;
      top: 7.5px;
    }
    span {
      font-size: 18px;
    }
  }
`;

export const Details = styled.div`
  margin-top: 50px;
  padding-bottom: 50px;
  border-bottom: solid 1px #e3e3e3;
  h3 {
    font-size: 18px;
  }
  p {
    margin-top: 10px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Price = styled.div`
  font-size: 20px;
`;