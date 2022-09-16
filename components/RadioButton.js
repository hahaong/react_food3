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

const RadioButton = ({
    containerStyle,
    label,
    labelStyle,
    iconStyle,
    isSelected,
    onPress
}) =>{
    return(
        <TouchableOpacity
            style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',
                ...containerStyle
            }}
            onPress = {onPress}
        >
            <Image
                source = {isSelected ? icons.check_on : icons.check_off}
                style={{
                    marginLeft:5,
                    width:20,
                    height:20,
                    ...iconStyle
                }}
            />

            <Text
                style={{
                    marginLeft:SIZES.radius,
                    color:COLORS.gray,
                    ...FONTS.body3,
                    ...labelStyle
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default RadioButton