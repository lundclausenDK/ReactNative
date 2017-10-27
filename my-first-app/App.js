import React from 'react';
import {Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView} from 'react-native';
import {Constants, WebBrowser} from "expo";
import {StackNavigator} from 'react-navigation';
import Basics from "./Basics";
import Props from "./Props";
import State from "./State";
import Style from "./Style";
import HeightWidth from "./HeightWidth";
import FlexBox from "./FlexBox";
import TextInput from "./TextInput";
import Touches from "./Touches";
import ScrollView from "./ScrollView";
import ListViews from "./ListViews";
import NetWorking from "./NetWorking";
import WhatToDo from "./WhatToDo";


const Touchable = (props) => (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>)



class HomeScreen extends React.Component {
    static navigationOptions = {title: 'Day1 Tutorial'};

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text style={{textAlign: "center", fontSize: 20}}>See all Demos implemented by Mikkel</Text>
                <Touchable onPress={() => navigate('web')} title="What I have to do"/>
                <Touchable onPress={() => navigate('basics')} title="Basics"/>
                <Touchable onPress={() => navigate('props')} title="Props"/>
                <Touchable onPress={() => navigate('state')} title="State" />
                <Touchable onPress={() => navigate('style')} title="Style" />
                <Touchable onPress={() => navigate('heightwidth')} title="Height and Width" />
                <Touchable onPress={() => navigate('flexbox')} title="Layout with Flexbox" />
                <Touchable onPress={() => navigate('textinput')} title="Handling Text Input" />
                <Touchable onPress={() => navigate('touches')} title="Handling Touches" />
                <Touchable onPress={() => navigate('scrollview')} title="Using a ScrollView" />
                <Touchable onPress={() => navigate('listviews')} title="Using List Views" />
                <Touchable onPress={() => navigate('networking')} title="Networking" />

            </View>
        )
    }
}

export default App = () => <RouteStack style={{marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2}}/>

const RouteStack = StackNavigator({
    Home: {screen: HomeScreen},
    web: {screen: WhatToDo},
    basics: {screen: Basics},
    props: {screen: Props},
    state: {screen: State},
    style: {screen: Style},
    heightwidth: {screen: HeightWidth},
    flexbox: {screen: FlexBox},
    textinput: {screen: TextInput},
    touches: {screen: Touches},
    scrollview: {screen: ScrollView},
    listviews: {screen: ListViews},
    networking: {screen: NetWorking}
});

const styles = StyleSheet.create({
    button: {
        margin: 3,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 7,
        fontSize: 18,
        fontWeight: "bold",
        color: 'white'
    }
});