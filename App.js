/* eslint-disable global-require */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native';

import Stories from './src/Components/Stories';

import Lista from './src/Components/Lista';

// import { Container } from './styles';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {
                    id: '1',
                    nome: 'prjr_dexter',
                    imgperfil:
                        'https://instagram.fbau3-2.fna.fbcdn.net/v/t51.2885-19/s150x150/119878272_124929889060538_6937223157872859220_n.jpg?_nc_ht=instagram.fbau3-2.fna.fbcdn.net&_nc_ohc=7_NsU38pGVAAX8AJKua&tp=1&oh=bbddc61009eeb47e69ded2469fcd2c7a&oe=5FE4652A',
                    imgPublicacao:
                        'https://veja.abril.com.br/wp-content/uploads/2016/05/alx_lista-capitais-europa-mundo-20100806-002_original3.jpeg',
                    curtida: false,
                    likers: '',
                },
                {
                    id: '2',
                    nome: 'gabrielli.rs',
                    imgperfil:
                        'https://instagram.fbau3-2.fna.fbcdn.net/v/t51.2885-19/s150x150/119878272_124929889060538_6937223157872859220_n.jpg?_nc_ht=instagram.fbau3-2.fna.fbcdn.net&_nc_ohc=7_NsU38pGVAAX8AJKua&tp=1&oh=bbddc61009eeb47e69ded2469fcd2c7a&oe=5FE4652A',
                    imgPublicacao:
                        'https://veja.abril.com.br/wp-content/uploads/2016/05/alx_lista-capitais-europa-mundo-20100806-002_original3.jpeg',
                    curtida: false,
                    likers: '',
                },
                {
                    id: '3',
                    nome: 'Mathues',
                    imgperfil:
                        'https://instagram.fbau3-2.fna.fbcdn.net/v/t51.2885-19/s150x150/119878272_124929889060538_6937223157872859220_n.jpg?_nc_ht=instagram.fbau3-2.fna.fbcdn.net&_nc_ohc=7_NsU38pGVAAX8AJKua&tp=1&oh=bbddc61009eeb47e69ded2469fcd2c7a&oe=5FE4652A',
                    imgPublicacao:
                        'https://veja.abril.com.br/wp-content/uploads/2016/05/alx_lista-capitais-europa-mundo-20100806-002_original3.jpeg',
                    curtida: false,
                    likers: '',
                },
            ],
        };
    }

    render() {
        const { state } = this;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image
                            source={require('./src/img/logo.png')}
                            style={styles.logo}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('./src/img/send.png')}
                            style={styles.send}
                        />
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.areaStories}>
                        <Stories data={this.state.feed} />
                    </View>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        data={state.feed}
                        renderItem={({ item }) => <Lista data={item} />}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    areaStories: {
        flex: 1,
    },
    header: {
        height: 55,
        backgroundColor: '#fff9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomWidth: 0.2,
        shadowColor: '#9991',
        elevation: 1,
    },
    logo: {
        marginLeft: 10,
    },
    send: {
        width: 23,
        height: 23,
    },
});

export default App;
