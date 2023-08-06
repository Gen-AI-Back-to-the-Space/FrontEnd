import React, { useState, useEffect, useCallback } from "react";
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
import { GiftedChat } from "react-native-gifted-chat";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const Container = styled.SafeAreaView`
  justify-items: center;
  align-items: center;
  background-color: #ffffff;
  flex: 1;
  width: 100%;
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
  align-self: center;
  color: white;
  font-size: 18px;
`;

const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

// const BodyContainer = styled.View`
//   flex: 1;
//   justify-content: flex-end;
// `;

const TextInputStyle = styled.TextInput`
  margin: 15px;
  padding: 10px;
  width: 360px;
  height: 45px;
  border: 1px solid #b6b7b8;
  border-radius: 50px;
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "안녕하세요. 당신의 이 전 여행, 앞으로의 여행에 대한 정보를 물어보세요.",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Space",
          // avatar: "../../assets/images/backspace_character.png",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const url = "https://space.skflyaiproject.store/";

  const fetchQuery = async () => {
    // 데이터 가져오기

    return answer;
  };

  return (
    <Container>
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
      {/* <BodyContainer> */}
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: "padding", android: undefined })}
        style={styles.avoid}
      >
        <GiftedChat
          messages={messages}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 1,
          }}
        />

        {/* <TextInputStyle
            placeholder="Type a Message"
            value={message}
            onChangeText={setMessage}
          ></TextInputStyle> */}
        {/* </BodyContainer> */}
      </KeyboardAvoidingView>
    </Container>
  );
};

//헤더 스타일
var styles = StyleSheet.create({
  linearGradient: {
    width: Width,
    height: Height / 5,
  },
  avoid: {
    flex: 1,
  },
});

export default Chat;
