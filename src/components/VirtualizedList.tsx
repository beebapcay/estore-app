import React from 'react';
import { FlatList } from 'native-base';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  showScrollIndicator: boolean;
  style?: StyleProp<ViewStyle>;
}

const VirtualizedList: React.FC<Props> = ({ children, showScrollIndicator = true, style }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={showScrollIndicator}
      data={[]}
      renderItem={null}
      ListEmptyComponent={<>{children}</>}
      style={style}
    />
  );
};

export default VirtualizedList;
