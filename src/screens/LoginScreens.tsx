import { StyleSheet, Text, View } from "react-native";

function LoginScreen(){
  return(
    <View>
      <Text>로그인 스크린</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
