import styled from "styled-components";


export const Wrapper = styled.div`
  position: relative;   
  margin-bottom: 20px;
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top:  0;
  left: 0;  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  width: 100%;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }
  }
  p {
    color: #fff;
    font-size: x-large;
    font-style: italic;
  }
`