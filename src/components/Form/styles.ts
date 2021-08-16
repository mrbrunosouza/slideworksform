import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 20px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-height: 700px) {
    align-items: flex-start;
  }
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column; 
  justify-content: center;

  .haserrors {
    border: 1px solid red !important;
    border-radius: 5px;
    padding: 5px;
  }

  .firstSection {
    display: flex;
    align-items: flex-end;
    margin-bottom: 3rem;
    column-gap: 2rem;

    @media (max-width: 1080px) {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
  }

  .secondSection {
    display: flex;
    align-items: center;
    column-gap: 2rem;
    margin-bottom: 3rem;

    .dropdownSection {
      display: flex;
      flex-direction: column;
      flex: 1;

      @media (max-width: 1080px) {
        width: 100%;
        margin-top: 1rem;
      }
    }

    @media (max-width: 1080px) {
      flex-direction: column;
      align-items: center;
      gap: 0;
    }
  }

  .thirdSection {
    display: flex;
    align-items: flex-end;
    gap: 3rem;
    margin-bottom: 20px;

    div {
      flex: 1;
    }

    @media (max-width: 1080px) {
      flex-direction: column;
      align-items: center;
      gap: 0;
    }
  }

  label {
    color: #38abfc;
    font-weight: bold;
    font-size: 0.8rem;
  }
`

export const TextArea = styled.textarea`
  max-width: 35rem;
  width: 100%;
  border: 3px solid #d3eafd;
  border-radius: 2px;
  resize: none;
  padding: 0.5rem;
`

export const CheckboxGroup = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Dropdown = styled.select`
  height: 2.7rem;
  border: 2px solid #d3eafd;
  border-radius: 10px;
  background-color: #f1f9ff;
  color: #38abfc;
`

export const SubmitSection = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 1500px) {
    flex-direction: column;
  }
`

export const Tags = styled.div`

`

interface TagProps {
  active: boolean;
  color: string;
}

export const Tag = styled.button<TagProps>`
  background: #f1f9ff;
  border: 3px solid #d3eafd;
  border-radius: 5px;
  
  margin: 0.3rem 0.2rem;
  padding: 0.2rem 0.3rem;

  font-size: 0.75rem;

  transition: background 0.2s;

  ${(props) => props.active && css`
    background: ${props.color};
    border-color: ${props.color};
    color: #FFF;
  `}

  &:hover {
    background: #d3eafd;
    border-color: ${({ color }) => color};
  }
`

export const Submit = styled.button`
  background: #38abfc;
  border: none;
  padding: 1rem 1.5rem;

  transition: filter 0.2s;

  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #FFF;

  &:hover {
    filter: brightness(0.7);
  }
`