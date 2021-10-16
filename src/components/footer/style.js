import styled from "styled-components/macro";

export const Container = styled.section`
  padding: 10% 10% 8%;
`;
export const CheckButton = styled.div`
  width: fit-content;
  margin-left: auto;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  .parent {
    width: 2rem;
    height: 1rem;
    ${({ darkTheme }) =>
      darkTheme ? "background: #e9dff2;" : "background: #46127b;"};
    border-radius: 1.8rem;
    position: relative;
    cursor: pointer;
    margin-right: .5rem;

    .move {
      position: absolute;
      top: 0;
      ${({ darkTheme }) => (darkTheme ? "left: 0" : "left: 100%; transform: translate(-100%, 0);")};
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: #e9dff2;
      ${({ darkTheme }) =>
        darkTheme ? "background: #46127b" : "background: #e9dff2"};
    }
  }
`;
export const Inner = styled.div``;
export const Header = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1.2rem;
`;
export const Ul = styled.ul`
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.2rem;
`;
export const Item = styled.li`
  margin-bottom: 1rem;
  cursor: pointer;
  transition: .15s font-weight ease;
  > svg {
    width: 70;
  }
  &:hover {
    font-weight: bold;
  }
`;
