import React, { Dispatch, SetStateAction, useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Filter, Mode, Theme, ThemeModeContext } from '../screens/HomeScreen';
import Feather from 'react-native-vector-icons/Feather';
import Filters from './Filters';

type THeaderProps = {
    setTheme: Dispatch<SetStateAction<Theme>>;
    setMode: Dispatch<SetStateAction<Mode>>;
    currentFilter: Filter
    setCurrentFilter: Dispatch<SetStateAction<Filter>>;
}

const CustomHeader: React.FC<THeaderProps> = ({ setTheme, setMode, currentFilter, setCurrentFilter }) => {

    const {theme, mode} = useContext(ThemeModeContext);
    console.log(mode)

    return (
        <View style={[styles.header, {backgroundColor: theme == "dark" ? "black" : "white"}]}>
            <View style={{alignItems: "flex-start"}}>
              <Text style={[styles.headerText, {color: theme == 'dark' ? "white" : "black"}]}>r/pics</Text>
              <Filters currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
            </View>
            <View style={{height: "100%"}}>
              <Pressable style={[styles.themeButton, {backgroundColor: theme == 'dark' ? "white" : "black"}]} onPress={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
                {theme == 'dark' ? (
                  <Feather name="sun" size={13} color="black" />
                ) : (
                  <Feather name="moon" size={13} color="white" />
                )}
              </Pressable>
              <Pressable style={[styles.themeButton, {marginVertical: 10, backgroundColor: theme == 'dark' ? "white" : "black"}]} onPress={() => setMode(mode == 'info' ? 'clean' : 'info')}>
                {mode == 'clean' ? (
                  <Feather name="eye-off" size={13} color={theme == 'dark' ? "black" : "white"} />
                ) : (
                  <Feather name="eye" size={13} color={theme == 'dark' ? "black" : "white"} />
                )}
              </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "JosefinSans-Bold"
  },
  themeButton: {
    padding: 6,
    borderRadius: 20,
  }
});

export default CustomHeader;