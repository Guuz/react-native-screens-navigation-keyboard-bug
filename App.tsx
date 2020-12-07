import 'react-native-gesture-handler';

import React from 'react';

import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {StackNavigationProp} from '@react-navigation/stack';
import {TextInput} from 'react-native-gesture-handler';

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
  const [value, setValue] = React.useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({title: value});
  }, [value, navigation]);

  return (
    <View style={{flex: 1}}>
      <Text>Spacer to push input down</Text>
      <View style={{backgroundColor: 'lightblue', height: 600, margin: 24}} />
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Type something..."
        style={{borderColor: 'black', borderWidth: 1, width: 200, fontSize: 24}}
      />
    </View>
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
