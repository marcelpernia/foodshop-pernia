import styled from 'styled-components';

export const Header = styled.header`
  height: 100px;
  border-bottom: solid 1px #e3e3e3;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;

  .menu {
    display: flex;
    gap: 30px;
    a {
        color: #464646;
        text-decoration: none;
        font-size: 14px;
        text-transform: uppercase;
        transition: all 200ms linear;
        &:hover {
            color: var(--primary);
        }
    }
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140px;
  }
`;
