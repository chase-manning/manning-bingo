import styled from "styled-components";
import { ITEMS, ItemType } from "../app/constants";
import Item from "./Item";
import useCompleted from "../hooks/completed";
import { hasBingo } from "../app/bingo-helper";

const StyledBingo = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.5rem;
  width: calc(100% - 4rem);
`;

const Bingo = () => {
  const { items, updateCompleted } = useCompleted();

  return (
    <StyledBingo>
      {ITEMS.map((item: ItemType) => {
        const completed = items.includes(item.id);
        return (
          <Item
            completed={completed}
            bingo={hasBingo(
              ITEMS.map((i) => i.id),
              items,
              item.id
            )}
            label={item.label}
            toggle={() => updateCompleted(item.id, !completed)}
          />
        );
      })}
    </StyledBingo>
  );
};

export default Bingo;
