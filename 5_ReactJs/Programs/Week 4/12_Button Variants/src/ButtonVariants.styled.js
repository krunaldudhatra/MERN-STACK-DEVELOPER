// import styled from "styled-components";

// // Complete the below given ButtonView style Component

// export const ButtonView = styled.button`
// `;
import styled from "styled-components";

// Complete the below given ButtonView style Component
export const ButtonView = styled.button`
  /* Default styles */
  background-color: ${({ filled, bg }) => (filled ? bg : "#fff")};
  color: ${({ filled, color }) => (filled ? color : "#000")};
  border: ${({ filled }) => (filled ? "none" : "3px solid #000")};
  
  /* General button styles */
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;

  /* Hover effect for better UX */
  &:hover {
    opacity: 0.9;
  }
`;
