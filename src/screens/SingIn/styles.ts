import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -20,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
    fontFamily: 'Rajdhani-Bold',
    lineHeight: 40,
  },
  subtitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 60,
    fontFamily: 'Rajdhani-Medium',
    lineHeight: 25,
  },
});

export default styles;