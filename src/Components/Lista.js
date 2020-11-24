/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    FlatList,
} from 'react-native';

class Lista extends Component {
    constructor(props) {
        super(props);
        const { data } = this.props;
        this.state = {
            feed: data,
        };

        this.exibeLikes = this.exibeLikes.bind(this);
        this.like = this.like.bind(this);
        this.mudaLike = this.mudaLike.bind(this);
    }

    lastTap = null;

    DoubleTap = () => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (this.lastTap && now - this.lastTap < DOUBLE_PRESS_DELAY) {
            this.like();
        } else {
            this.lastTap = now;
        }
    };

    like() {
        const { feed } = this.state;
        const user = feed.nome;

        if (feed.curtida === true) {
            this.setState({
                feed: {
                    ...feed,
                    curtida: false,
                    likers: '',
                },
            });
        } else {
            this.setState({
                feed: {
                    ...feed,
                    curtida: true,
                    likers: user,
                },
            });
        }
    }

    exibeLikes(likes) {
        if (likes === '') {
            return <View />;
        }
        return (
            <View style={styles.areaCurtidas}>
                <Text>Curtido por</Text>
                <TouchableOpacity>
                    <Text style={styles.likers}>{likes}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    mudaLike(curtida) {
        return curtida
            ? require('../img/liked.png')
            : require('../img/like.png');
    }

    render() {
        const { state } = this;
        return (
            <View style={styles.areaFeed}>
                <View style={styles.areaPerfil}>
                    <Image
                        style={styles.fotoPerfil}
                        source={{ uri: state.feed.imgperfil }}
                    />
                    <Text style={styles.nomeUsuario}>{state.feed.nome}</Text>
                </View>
                <TouchableWithoutFeedback onPress={this.DoubleTap}>
                    <Image
                        resizeMode="cover"
                        style={styles.imgPublicacao}
                        source={{ uri: state.feed.imgPublicacao }}
                    />
                </TouchableWithoutFeedback>
                <View style={styles.areaIcones}>
                    <View style={styles.iconesEsquerda}>
                        <TouchableOpacity onPress={this.like}>
                            <Image
                                source={this.mudaLike(state.feed.curtida)}
                                style={styles.icones}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnComment}>
                            <Image
                                source={require('../img/comment.png')}
                                style={styles.icones}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSend}>
                            <Image
                                source={require('../img/send.png')}
                                style={styles.icones}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.btnSave}>
                        <Image
                            source={require('../img/save.png')}
                            style={styles.icones}
                        />
                    </TouchableOpacity>
                </View>
                <View>{this.exibeLikes(state.feed.likers)}</View>
                <View style={styles.areaRodape}>
                    <Text style={styles.nomeUsuario}>{state.feed.nome}</Text>
                    <Text style={styles.descricao}>Legenda aleatória....</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaFeed: {},
    nomeUsuario: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'left',
        color: '#000000',
        paddingLeft: 8,
    },
    fotoPerfil: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
    },
    areaPerfil: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    imgPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center',
    },
    areaIcones: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between',
    },
    iconesEsquerda: {
        flexDirection: 'row',
    },
    icones: {
        width: 25,
        height: 25,
    },
    btnSend: {
        paddingLeft: 10,
    },
    btnComment: {
        paddingLeft: 10,
    },
    btnSave: {},
    areaRodape: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    descricao: {
        paddingLeft: 5,
    },
    areaCurtidas: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
    },
    likers: {
        fontWeight: 'bold',
        padding: 5,
    },
});

export default Lista;
