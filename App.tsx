import 'react-native-gesture-handler';

import React from 'react';

import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {KeyboardAvoidingView, Text, View} from 'react-native';
import {createStackNavigator, useHeaderHeight} from '@react-navigation/stack';

import {StackNavigationProp} from '@react-navigation/stack';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

type RootStackParamList = {
  Home: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

enableScreens();

function HomeScreen({navigation}: Props) {
  const headerHeight = useHeaderHeight();
  const [value, setValue] = React.useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({title: value});
  }, [value, navigation]);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="padding"
      keyboardVerticalOffset={headerHeight}>
      <ScrollView>
        <Text>Spacer to push input down</Text>
        <View style={{backgroundColor: 'lightblue', height: 600, margin: 24}} />
        <TextInput
          value={value}
          onChangeText={setValue}
          style={{
            borderColor: 'black',
            borderWidth: 1,
            width: 200,
            fontSize: 24,
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
