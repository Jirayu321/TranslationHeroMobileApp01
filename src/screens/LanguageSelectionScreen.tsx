import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Title, Provider, Menu} from 'react-native-paper';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<any>;
};

const languages = ['Thai', 'Germany', 'English'];

const LanguageSelectionScreen: React.FC<Props> = ({navigation}) => {
  const [languageFrom, setLanguageFrom] = useState(languages[0]);
  const [menuVisibleFrom, setMenuVisibleFrom] = useState(false);

  const [languageTo, setLanguageTo] = useState(languages[0]);
  const [menuVisibleTo, setMenuVisibleTo] = useState(false);

  return (
    <Provider>
      <View style={{flex: 1, justifyContent: 'center', padding: 16}}>
        <Title>Select Languages</Title>

        <Menu
          visible={menuVisibleFrom}
          onDismiss={() => setMenuVisibleFrom(false)}
          anchor={
            <Button mode="outlined" onPress={() => setMenuVisibleFrom(true)}>
              {languageFrom}
            </Button>
          }>
          {languages.map((lang, index) => (
            <Menu.Item
              key={index}
              onPress={() => {
                setLanguageFrom(lang);
                setMenuVisibleFrom(false);
              }}
              title={lang}
            />
          ))}
        </Menu>

        <Menu
          visible={menuVisibleTo}
          onDismiss={() => setMenuVisibleTo(false)}
          anchor={
            <Button mode="outlined" onPress={() => setMenuVisibleTo(true)}>
              {languageTo}
            </Button>
          }>
          {languages.map((lang, index) => (
            <Menu.Item
              key={index}
              onPress={() => {
                setLanguageTo(lang);
                setMenuVisibleTo(false);
              }}
              title={lang}
            />
          ))}
        </Menu>

        <Button
          mode="contained"
          onPress={() =>
            navigation.navigate('FileSelection', {languageFrom, languageTo})
          }>
          Select File
        </Button>
      </View>
    </Provider>
  );
};

export default LanguageSelectionScreen;
