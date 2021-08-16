import { ReactNode } from "react";
import { Container } from "./styles";

interface InputProps {
  description: string;
  children: ReactNode;
}

export function Input({ description, children }: InputProps) {
  return (
    <Container>
      <label htmlFor={description}>{description}</label>
      {children}
    </Container>
  )
}