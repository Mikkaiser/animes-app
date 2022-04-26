import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Card from '../../components/Card';
import VideoService from '../../services/videoService';

type RootStackParamList = {
  Home: undefined;
  AnotherScreen: undefined;
};

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Home',
  'AnotherScreen'
>;

export default class Home extends Component<Props> {
  state = {
    animesResult: [],
  };

  async componentDidMount() {
    const videoService = new VideoService();

    const result = await videoService.get('/anime');

    this.setState({
      animesResult: result,
    });
  }

  renderCard(item: any) {
    return (
      <TouchableOpacity
        onPress={() => {
          // @ts-ignore
          this.props.navigation.navigate('AnotherScreen', {
            itemId: item.id,
          });
        }}>
        <Card
          description={item.attributes.synopsis}
          title={item.attributes.titles.en_jp}
          imageSource={item.attributes.posterImage.tiny}
        />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView style={style.body}>
        <FlatList
          data={this.state.animesResult}
          renderItem={({item}: any) => this.renderCard(item)}
          keyExtractor={(item: any) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  body: {
    backgroundColor: 'black',
  },
});
