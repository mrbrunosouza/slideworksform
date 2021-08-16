import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  
  input {
    width: 100%;
    max-width: 35rem;
    height: 2.7rem;
    border: 2px solid #d3eafd;
    border-radius: 10px;
    background-color: #f1f9ff;
  }

  @media (max-width: 1080px) {
    width: 100%;
  }
`