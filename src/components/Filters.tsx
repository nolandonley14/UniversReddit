import React, { Dispatch, SetStateAction, useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Filter, Theme, ThemeModeContext } from '../screens/HomeScreen';
import LinearGradient from 'react-native-linear-gradient';

type TFilterProps = {
    currentFilter: Filter
    setCurrentFilter: Dispatch<SetStateAction<Filter>>;
}

const CustomHeader: React.FC<TFilterProps> = ({ currentFilter, setCurrentFilter }) => {

    const {theme, mode} = useContext(ThemeModeContext);

    const filterOptions: Filter[] = ["hot", "top", "new", "controversial"]
    //filterOptions.sort((a, b) => a.toLowerCase() == currentFilter ? -1 : b == currentFilter ? 1 : 0)

    return (
        <View style={styles.filterContainer}>
            {filterOptions.map((filter, index) => {
                return (
                    <Pressable key={index} onPress={() => setCurrentFilter(filter)} style={styles.filterButton}>
                        {currentFilter == filter ? (
                            <LinearGradient style={styles.button} start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 0.0}} colors={["#5375df", "#8558e0"]}>
                                <Text style={[styles.filterText, {color: currentFilter == filter ? "white" : (theme == "dark" ? "white" : "black")}]}>{filter.toUpperCase()}</Text>
                            </LinearGradient>
                        ) : (
                            <View style={[styles.button, {borderWidth: 0.5, borderColor: theme == "dark" ? "white" : "black"}]}>
                                <Text style={[styles.filterText, {color: currentFilter == filter ? (theme == "dark" ? "black" : "white") : (theme == "dark" ? "white" : "black")}]}>{filter.toUpperCase()}</Text>
                            </View>
                        )}
                    </Pressable>
                )
            })}
        </View>
    );

};

const styles = StyleSheet.create({
    filterContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    filterButton: {
        marginRight: 10,
        borderRadius: 20,
    },
    filterText: {
        fontSize: 10,
        padding: 5,
        paddingHorizontal: 10,
    },
    button: {
        borderRadius: 20
    }
});

export default CustomHeader;