import { ReactNode } from "react";
import { Container } from "./styles";

interface CheckboxProps {
  id: string;
  description: string;
  children: ReactNode;
}

export function Checkbox({ id, children, description }: CheckboxProps) {
  return (
    <Container>
      {children}
      <label htmlFor={id}>{description}</label>
    </Container>
  )
}