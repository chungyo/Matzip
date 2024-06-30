import React, {useRef} from 'react';
import colors from '../constants/colors.ts';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
  Dimensions,
  Pressable,
} from 'react-native';

interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
  error?: string;
}

const deviceHeight = Dimensions.get('screen').height;

function InputField({disabled = false, error, ...props}: InputFieldProps) {
  const innerRef = useRef<TextInput | null>(null);

  const handleClickInput = () => {
    innerRef.current?.focus();
  };

  return (
    <Pressable onPress={handleClickInput}>
      <View
        style={[
          styles.container,
          disabled && styles.disabled,
          Boolean(error) && styles.inputError,
        ]}>
        <TextInput
          editable={!disabled}
          placeholderTextColor={colors.GRAY_500}
          style={[styles.input, disabled && styles.disabled]}
          autoCapitalize="none"
          spellCheck={false}
          autoCorrect={false}
          {...props}
        />
        {Boolean(error) && <Text style={styles.error}>{error}</Text>}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    padding: deviceHeight > 700 ? 15 : 10,
  },

  disabled: {
    backgroundColor: colors.GRAY_200,
    color: colors.GRAY_700,
  },

  input: {
    fontSize: 16,
    color: colors.BLACK,
    padding: 0,
  },

  inputError: {
    borderColor: colors.RED_300,
  },

  error: {
    color: colors.RED_500,
    fontSize: 12,
    marginTop: 5,
  },
});

export default InputField;
