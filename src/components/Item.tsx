import styled from "styled-components";
import Card from "./Card";

const StyledItem = styled.div`
  aspect-ratio: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
`;

interface Props {
  completed: boolean;
  bingo: boolean;
  label: string;
  toggle: () => void;
}

const Item = ({ label, completed, bingo, toggle }: Props) => {
  return (
    <Card primary={bingo} secondary={completed && !bingo}>
      <StyledItem onClick={toggle}>{label}</StyledItem>
    </Card>
  );
};

export default Item;
