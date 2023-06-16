import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Title, Provider} from 'react-native-paper';
import {StackNavigationProp} from '@react-navigation/stack';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';

type Props = {
  navigation: StackNavigationProp<any>;
};

const FileSelectionScreen: React.FC<Props> = ({navigation}) => {
  const [file, setFile] = useState<DocumentPickerResponse | null>(null);

  const pickFile = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });

      setFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled file picker');
      } else {
        throw err;
      }
    }
  };

  return (
    <Provider>
      <View style={{flex: 1, justifyContent: 'center', padding: 16}}>
        <Title>Select File</Title>

        <Button mode="outlined" onPress={pickFile}>
          Pick File
        </Button>

        {file && (
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Translation', {file})}>
            Confirm Translation
          </Button>
        )}
      </View>
    </Provider>
  );
};

export default FileSelectionScreen;
