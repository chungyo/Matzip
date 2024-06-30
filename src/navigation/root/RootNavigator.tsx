import React from "react";
import MainDrawerNavigator from "../drawer/MainDrawerNavigator"; // MainDrawerNavigator가 있는 경로로 수정하세요.
import AuthStackNavigator from "../stack/AuthStackNavigator.tsx";

function RootNavigator() {
  const isLoggedIn = false;
  return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;

}

export default RootNavigator;
