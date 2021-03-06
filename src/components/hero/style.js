import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 10% 10% 0;
  min-height: 100vh;
  background: #46127b;
  border-radius: 0px 0px 3rem 3rem;
  margin-right: 0;
  margin-left: 0;

  @media (max-width: 768px) {
    padding: 5rem 2rem; 
  }
`;
export const TextContainer = styled.div`
  color: #ffffff;
  padding-top: 2rem;
  margin-bottom: 2rem;
  > h3 {
    font-style: normal;
    font-weight: 900;
    font-size: 3.3rem;
    line-height: 3.5rem;
    width: 100%;
    margin-bottom: 1.5rem;
    width: 90%;
  }
  > p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.8rem;
    width: 70%;
    margin-bottom: 6rem;
  }
  @media (max-width: 768px) {
    p {
      width: 100%;
      margin-bottom: 3rem;
    }
  }
`;
export const Button = styled.button`
  width: 17rem;
  height: 6.5rem;
  font-size: 1.8rem;
  font-weight: 900;
  background: #feaf04;
  border-radius: 2rem;
  color: #46127b;
  border: none;
  &:hover {
    background: #eca408;
    color: #46127b;
  }
  @media(max-width: 992px) {
    height: 5.7rem;
  };
  @media(max-width: 768px) {
    width: 12rem;
    height: 5rem;
    font-size: 1.5rem;
  }
`;
export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  > svg {
    transform: scale(1.3);
    @media (max-width: 768px) {
      transform: scale(1);
    }
  }
`;
