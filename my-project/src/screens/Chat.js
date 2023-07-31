import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const Container = styled.SafeAreaView`
  justify-items: center;
  align-items: center;
  background-color: #ffffff;
  flex: 1;
`;

const HeaderContainer = styled.View`
  align-items: center;
  background-color: red;
`;

const HeaderText = styled.Text`
  margin-top: 20px;
  justify-items: center;
  align-self: center;
  color: white;
  font-size: 22px;
`;
const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Chat = () => {
  return (
    <Container>
      {/* 그라디언트 opacity 50% 정도로 끝내야 함 */}
      <LinearGradient
        colors={["#000C40", "#ffffff"]}
        style={styles.linearGradient}
      >
        <HeaderText>Conversation</HeaderText>
      </LinearGradient>

      <StyledText>Chat</StyledText>
    </Container>
  );
};

//헤더 스타일
var styles = StyleSheet.create({
  linearGradient: {
    width: Width,
    height: Height / 4,
  },
});

export default Chat;
