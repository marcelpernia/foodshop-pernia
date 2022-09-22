import styled from 'styled-components';


export const Wrapper = styled.div`
  margin: auto;
  max-width: 600px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  tr {
    td, th {
      border: solid 1px #e3e3e3;
      padding: 5px;
      &.right {
        text-align: right;
      }
      &.left {
        text-align: left;
      }
      .delete {
        width: 30px;
        color: crimson;
        cursor: pointer;
      }
    }
    td {
        &.image {
            width: 1px;
            img {
                width: 100px;
            }
        }
    }
  }

`;

export const Empty = styled.div`
  text-align: center;
  .icon {
    width: 50px;
  }
  h4 {
    margin-top: 10px;
    font-size: 24px;
  }
  p {
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;