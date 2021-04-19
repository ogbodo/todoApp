import React from "react";
import AppNavigator from "./src/navigators";
import { RecoilRoot } from 'recoil'

export default function App() {
  return <RecoilRoot>
    <AppNavigator />
  </RecoilRoot>
}
