import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  icon: string;
  initialState: string;
  url: string | null | undefined;
  setPage: (url: string) => void;
}

const ButtonPagination: React.FC<Props> = ({
  icon,
  url,
  initialState,
  setPage,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={url === null || undefined ? true : false}
      onPress={() => setPage(url ? url : initialState)}>
      <Ionicons
        name={icon}
        size={35}
        color={url === null || undefined ? 'gray' : 'green'}
      />
    </TouchableOpacity>
  );
};

export default ButtonPagination;
