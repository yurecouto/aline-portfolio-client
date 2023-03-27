import styled from "styled-components";

interface ILateralInfoProps {
  wrap: boolean | undefined;
}

export const Container = styled.div<ILateralInfoProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: ${({ wrap }) => wrap ? "flex-start" : "center"};
  flex-direction: row;
  border: 1px solid yellow;
`;

export const LateralInfo = styled.div<ILateralInfoProps>`
  width: 320px;
  height: 80vh;
  margin-left: ${({ wrap }) => wrap ? "20%" : "0%"};
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border: 3px solid yellow;
  margin-top: 48px;
`;

export const Image = styled.img`
  width: 300px;
  border-radius: 100%;
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HomeTitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const HomeText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 400;
`;

export const SocialMedia = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;
