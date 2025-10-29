import styled from "styled-components";

type AppButtonProps = {
  text: string;
  secundary?: boolean; 
};

export default function AppButton({ text, secundary = false }: AppButtonProps) {
  return <Button secundary={secundary}>{text}</Button>;
}

const Button = styled.button<{ secundary: boolean }>`
  background-color: ${({ secundary }) =>
    secundary ? "rgb(33, 37, 85, 70)" : "rgb(46, 129, 254, 1)"};
  padding: 12px 30px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;

 &:hover {
    background-color: ${({ secundary }) =>
      secundary ? "rgb(17, 21, 69, 100)" : "rgb(36, 109, 214)"};
  }

  &:active {
    background-color: ${({ secundary }) =>
      secundary ? "rgb(37, 21, 69, 100)" : "rgb(26, 89, 194)"};
  }
`;
