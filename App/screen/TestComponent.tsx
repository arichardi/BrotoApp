import React from "react";
import { View, StyleSheet} from 'react-native'
import PlantCard from "../components/PlantCard";

export default function TestComponent(){
    return(
        <View style={styles.container}>
            <PlantCard title='teste' subtitle='teste teste'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})