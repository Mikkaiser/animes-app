import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, useTheme } from '@rneui/themed';

type Props = {
    title: string,
    imageSource: string,
    description: string,
}

export default class Card extends Component<Props, { value: string }> {
    render() {
        return(
            <View style={style.cardBody}>
                <Image
                    source={{uri: this.props.imageSource}}
                    style={style.cardImages}
                />
                <View style={style.textStyle}>
                    <Text 
                        h4
                        h4Style={style.h4Style}
                    >
                        {this.props.title}
                    </Text>
                    <Text style={style.descriptionStyle}>
                        {`${this.props.description.substring(0, 200)}...`}
                    </Text>
                </View>

            </View>
        )
    }
}


const style = StyleSheet.create({
    cardBody: {
        backgroundColor: '#252525',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '5%',
        padding: 10
    },
    cardImages: {
        width: 120,
        height: 200
    },
    textStyle: {
        width: '70%',
        // borderColor: 'red',
        // borderWidth: 2,
        padding: '2%',
        textAlign: 'center',
        color: 'white'
    },
    h4Style: {
        fontSize: 20,
        color: 'white', 
        padding: 5
    },
    descriptionStyle: {
        marginTop: 10,
        color: 'white',
        padding: 5
    }
});