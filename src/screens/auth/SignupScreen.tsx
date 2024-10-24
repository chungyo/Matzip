import { StyleSheet, Text, View } from "react-native";

function SignupScreen(){
  return(
    <View>
      <Text>회원가입 스크린</Text>
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

export default SignupScreen;
