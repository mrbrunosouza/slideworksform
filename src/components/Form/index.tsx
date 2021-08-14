import { Container, Input } from "./styles";

export function Form() {
  return(
    <Container>
      <Input>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </Input>
      <Input>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </Input>
    </Container>
  )
}