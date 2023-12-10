import React, {memo, useEffect, useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';

function BottomSheet({
  children,
  open,
  onClose,
  height,
  isDraggable,
  isPressable,
  containerStyle,
  draggableStyle,
  animation,
  paddingHorizontal = 16,
}) {
  const refRBSheet = useRef();
  const navigation = useNavigation();
  useEffect(() => {
    if (open) {
      refRBSheet.current.open();
    } else {
      refRBSheet.current.close();
    }
  }, [open]);
  return (
    <RBSheet
      animationType={animation ? animation : 'fade'}
      ref={refRBSheet}
      closeOnDragDown={isDraggable}
      closeOnPressMask={isPressable}
      height={height ? height : 300}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0, 0, 0, 0.6))',
        },
        draggableIcon: {
          backgroundColor: 'rgba(196, 196, 196,1)',
          ...draggableStyle,
        },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal,
          ...containerStyle,
        },
      }}
      onClose={() => onClose(false)}
      onOpen={() => onClose(true)}>
      <View className="mt-2 flex-row" />
      {children}
    </RBSheet>
  );
}

export default memo(BottomSheet);
