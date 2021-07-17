import React from 'react';
import {TextInput} from 'react-native';
import styles from '../constants/styles';

interface Props {
  placeholder: string;
  setSearch: (text: string) => void;
}

const SearchInput: React.FC<Props> = ({placeholder, setSearch}: Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={(value) => setSearch(value)}
      style={styles.textInput}
    />
  );
};

export default SearchInput;
