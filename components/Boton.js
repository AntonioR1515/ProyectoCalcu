import { Button, StyleSheet } from "react-native";

export default function Boton({ onPress, ...props }) {
    return <Button onPress={() => onPress(props.title)} {...props} style={buttonstyles.button} />
}

// const buttonstyles = StyleSheet.create({
//     button: {
//         backgroundColor: 'red',
//         fontSize: 40
//     }
// })