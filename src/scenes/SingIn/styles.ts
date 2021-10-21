import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 64,
  },
});

export default styles;