import React from 'react';
import {SafeAreaView, StyleSheet, View, Image, Dimensions} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {authNavigations} from '../../constants/navigations.ts';
import {AuthStackParamList} from '../../navigation/stack/AuthStackNavigator.tsx';
import CustomButton from '../../components/CustomButton.tsx';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/MATZIP.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="로그인하기"
          variant="filled"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
        <CustomButton
          label="회원가입하기"
          variant="outlined"
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
  },

  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },

  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
  },
});

export default AuthHomeScreen;
