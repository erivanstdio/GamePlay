import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // para o caso de uso de iPhone X
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,

  }
})

export default styles;