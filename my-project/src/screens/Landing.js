import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native";

const Container = styled.SafeAreaView`
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Landing = ({ navigation }) => {
  return (
    <Container>
      <StyledText>Landing</StyledText>
      <Button title="Chat" onPress={() => navigation.navigate("Chat")} />
      <Button title="Search" onPress={() => navigation.navigate("Search")} />
    </Container>
  );
};

export default Landing;
