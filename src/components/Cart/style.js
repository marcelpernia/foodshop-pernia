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