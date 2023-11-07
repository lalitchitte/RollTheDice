import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import DiceOne from './src/images/One.png';
import DiceTwo from './src/images/Two.png';
import DiceThree from './src/images/Three.png';
import DiceFour from './src/images/Four.png';
import DiceFive from './src/images/Five.png';
import DiceSix from './src/images/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps) => {
  return (
    <View>
      <Image source={imageUrl} style={styles.diceImage}></Image>
    </View>
  );
};

const App = () => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDice = () => {
    let ranNum = Math.floor(Math.random() * 6) + 1;
    switch (ranNum) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}></Dice>
      <Pressable onPress={rollDice}>
        <Text style={styles.rollDiceButtonTxt}>Roll The Dice</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceButtonTxt: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'black',
    fontSize: 16,
    color: 'blue',
    fontWeight: '600',
  },
});

export default App;
