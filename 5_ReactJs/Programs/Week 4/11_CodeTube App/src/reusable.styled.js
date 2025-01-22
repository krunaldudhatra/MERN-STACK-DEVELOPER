// reusable.styled.js
import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.bg || "gray"};
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: ${(props) => props.flex || "1"};
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
