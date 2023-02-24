import {StyleSheet} from 'react-native';

export const BaseStyles = StyleSheet.create({
  fill_and_center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  standard_gap: {height: 16, width: 16},
  standard_border: {padding: 16},
  header: {flexDirection: 'row', gap: 16, alignItems: 'center'},
});

export default BaseStyles;
