import React, { Component } from 'react'

import {
    TouchableOpacity,
    Image,
    Text,
    View,
    Platform,
    TextInput

} from 'react-native'

import {
    FONTS,
    COLORS,
    SIZES,
    icons,
    images,
    dummyData
} from "../constants"

import { TextButton, LineDivider } from "../components"

const FormInput = ({ value, error }) => {
    return (
        <View
            style={{
                justifyContent: 'center'
            }}
        >

            <Image
                source={(value == "" || (value != "" && error == "") ? icons.correct : icons.cancel)}
                style={{
                    height: 20,
                    width: 20,
                    tintColor: (value == "") ? COLORS.gray : (value != "" && error == "") ? COLORS.green : COLORS.red
                }}
            />

        </View>

    )
}

export default FormInput