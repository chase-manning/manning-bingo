import styled from "styled-components";

interface CardProps {
  $large?: boolean;
  $dark?: boolean;
  $primary?: boolean;
  $secondary?: boolean;
}

const CardContainer = styled.div<CardProps>`
  position: relative;
`;

const StyledCard = styled.div<CardProps>`
  width: 100%;
  height: 100%;
  border: solid 1px var(--main);
  background: var(--bg);
  background: ${({ $dark, $primary, $secondary }) => {
    if ($dark) return "var(--main)";
    if ($primary) return "var(--primary)";
    if ($secondary) return "var(--secondary)";
    return "var(--bg)";
  }};
  border-radius: 1rem;
  position: relative;
  padding: 0.5rem;
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--main);
  border-radius: 1rem;
  transform: translate(0.2rem, 0.2rem);
`;

interface Props {
  children: React.ReactNode;
  dark?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

const Card = ({ children, dark, primary, secondary }: Props) => {
  return (
    <CardContainer>
      <Shadow />
      <StyledCard $dark={dark} $primary={primary} $secondary={secondary}>
        {children}
      </StyledCard>
    </CardContainer>
  );
};

export default Card;
