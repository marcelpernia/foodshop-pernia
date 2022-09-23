import styled from 'styled-components';


export const Container = styled.div`
  width: 98%;
  margin: auto;
  max-width: 1200px;
`;

export const Columns = styled.div`
  display: flex;
  gap: 30px;
  .column {
    width: 100%;
    &.narrow {
      flex: none;
      width: initial;
    }
  }
`;

export const Summary = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 30px;
  width: 300px;
  h3 {
    text-align: center;
    margin-bottom: 10px;
  }
  th, td {
    padding: 10px 0 !important;
  }
  .total {
    text-align: center;
    font-size: 20px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  tr {
    th, td {
      border-bottom: 1px solid #e3e3e3;
    }
    th {
      white-space: nowrap;
      text-transform: uppercase;
      font-size: 12px;
      color: gray;
      font-weight: normal;
    }
    td, th {
      padding: 5px 0;
      &.right {
        text-align: right;
      }
      &.left {
        text-align: left;
      }
      &.center {
        text-align: center;
      }
      &.min-w {
        width: 1px;
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
                width: 50px;
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