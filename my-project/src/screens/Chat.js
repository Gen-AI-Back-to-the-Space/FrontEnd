import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";

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
  margin-top: 30px;

  align-self: center;
  color: white;
  font-size: 22px;
`;

const IconContainer = styled.View`
  margin-top: 50px;
  margin-left: 30px;
  flex-direction: row;
`;

const ChatIcon = styled.Image`
  width: 60px;
  height: 60px;
  object-fit: cover;
  justify-content: flex-start;
`;

const ChatText = styled.Text`
  margin-left: 16px;
  margin-top: 16px;
  font-size: 20px;
  color: white;
`;

const HeaderAnnounceText = styled.Text`
  margin-top: 50px;
  justify-items: center;
  align-self: center;
  color: white;
  font-size: 18px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const BodyContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const TextInputStyle = styled.TextInput`
  margin: 15px;
  padding: 10px;
  width: 360px;
  height: 45px;
  border: 1px solid #b6b7b8;
  border-radius: 50px;
`;

const Chat = () => {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: "padding", android: undefined })}
        style={styles.avoid}
      >
        <StatusBar backgroundColor="#000C40" />
        {/* 그라디언트 opacity 50% 정도로 끝내야 함 */}
        <LinearGradient
          colors={["#000C40", "#ffffff"]}
          style={styles.linearGradient}
        >
          <HeaderText>Conversation</HeaderText>
          <IconContainer>
            <ChatIcon
              source={require("../../assets/images/backspace_character.png")}
            />
            <ChatText>Backs</ChatText>
          </IconContainer>

          <HeaderAnnounceText>
            당신의 이 전 여행, 앞으로의 여행에 대한 정보를 물어보세요.
          </HeaderAnnounceText>
        </LinearGradient>
        <BodyContainer>
          <TextInputStyle placeholder="Type a Message"></TextInputStyle>
        </BodyContainer>
      </KeyboardAvoidingView>
    </Container>
  );
};

//헤더 스타일
var styles = StyleSheet.create({
  linearGradient: {
    width: Width,
    height: Height / 3,
  },
  avoid: {
    flex: 1,
  },
});

export default Chat;
