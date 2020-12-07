# react-native-screens-navigation-keyboard-bug

Reproduction of a bug using RNS+RN+KeyboardAvoidingView

Using React Navigation, React Native Screens, KeyboardAvoidingView and `navigation.setOptions()` results in weird glitches. This happens on iOS.

In our app we have screens that have 1 or more TextInputs. If the input is valid a submit button appears in the header. Thats why `setOptions()` is used. We also enabled React Native Screens (`enableScreens()`) as recommended in the docs. For making text input possible a KeyboardAvoidingView is used. We do this in the "standard" way. At least based on our search online on how other people use KeyboardAvoidingView and React Navigation. By wrapping the entire screen and using `flex: 1`.

All these things combined lead to a strange bug where the height of the views "collapse" and expand again. See the videos below.

Bug:
[https://streamable.com/2opla6](https://streamable.com/2opla6)

How it should look:
[https://streamable.com/en62cm](https://streamable.com/en62cm)

There are 2 things that seem to influence this. I'm not exactly sure why and what happens under the hood. But not using RNS (remove `enableScreens()`) causes this issue to go away. The other one is by not using `setOptions()`.
