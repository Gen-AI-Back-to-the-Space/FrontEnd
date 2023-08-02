import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, StyleSheet, Dimensions } from "react-native";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.TextInput`
  margin: 15px;
  padding: 15px;
  width: 320px;
  height: 50px;
  border: 1px solid #f0f0f0;
  background-color: #f0f0f0;
  opacity: 0.5;
  border-radius: 7px;
`;

const Search = () => {
  return (
    <LinearGradient
      colors={["#000C40", "#ffffff"]}
      style={styles.linearGradient}
    >
      <Container>
        <SearchInput placeholder="Search" />
      </Container>
    </LinearGradient>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    width: Width,
    height: Height,
  },
});
export default Search;
