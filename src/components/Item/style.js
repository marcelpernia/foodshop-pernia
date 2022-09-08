import styled from 'styled-components';

export const ProductItem = styled.div`
  width: 170px;
  text-align: center;
`;

export const Image = styled.figure`
  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
`;

export const Stock = styled.div`
    text-align: center;
    margin-top: 5px;
    font-size: 12px;
    color: gray;
`;

export const Price = styled.div`
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 10px;
`;

