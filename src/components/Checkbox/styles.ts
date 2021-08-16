import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.3rem;

  label {
    font-weight: 500;
    width: 3.5rem;
  }

  input {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  @media (max-width: 1080px) {
    gap: 0.3rem;
    
    input {
      width: 1rem;
      height: 1rem;
    }

    label {
      margin-left: 0.3rem;
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;
    
    input {
      width: 1rem;
      height: 1rem;
    }    
  }
`