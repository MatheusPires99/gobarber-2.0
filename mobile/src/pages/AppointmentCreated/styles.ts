import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  padding: 0 24px;

  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #f4ede8;
  font-family: "RobotoSlab-Medium";
  margin-top: 48px;
  text-align: center;
`;

export const Description = styled.Text`
  font-family: "RobotoSlab-Regular";
  font-size: 18px
  color: #999591;
  margin-top: 16px;
`;

export const OkButton = styled(RectButton)`
  background: #ff9000;
  border-radius: 10px;
  padding: 12px 24px;
  margin-top: 24px;

  align-items: center;
  justify-content: center;
`;

export const OkButtonText = styled.Text`
  font-family: "RobotoSlab-Medium";
  color: #312e38;
  font-size: 18px;
`;
