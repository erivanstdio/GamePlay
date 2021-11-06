import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: 'Rajdhani-Medium',
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 5,
  },
  userName: {
    fontFamily: 'Rajdhani-Bold',
    fontSize: 24,
    color: theme.colors.heading,
  },
  message: {
    fontFamily: 'Inter-Regular',
    color: theme.colors.highlight,
  }

});

export default styles;