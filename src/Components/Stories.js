import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, Image, View } from 'react-native';

class Stories extends Component {
    constructor(props) {
        super(props);
        const { data } = this.props;
        this.state = {
            imgperfil:
                'https://instagram.fbau3-2.fna.fbcdn.net/v/t51.2885-19/s150x150/119878272_124929889060538_6937223157872859220_n.jpg?_nc_ht=instagram.fbau3-2.fna.fbcdn.net&_nc_ohc=7_NsU38pGVAAX8AJKua&tp=1&oh=bbddc61009eeb47e69ded2469fcd2c7a&oe=5FE4652A',
            feed: data,
        };

        // this.exibeLikes = this.exibeLikes.bind(this);
    }

    render() {
        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.scroll}
            >
                <View style={styles.areaImg}>
                    <View style={styles.areaBorda}>
                        <Image
                            // resizeMode="cover"
                            style={styles.ImgStories}
                            source={{ uri: this.state.imgperfil }}
                        />
                    </View>

                    <Text>Seu story</Text>
                </View>
                <View style={styles.areaImg}>
                    <View style={styles.areaBorda}>
                        <Image
                            // resizeMode="cover"
                            style={styles.ImgStories2}
                        />
                    </View>

                    <Text>user</Text>
                </View>
                <View style={styles.areaImg}>
                    <View style={styles.areaBorda}>
                        <Image
                            // resizeMode="cover"
                            style={styles.ImgStories2}
                        />
                    </View>

                    <Text>user</Text>
                </View>
                <View style={styles.areaImg}>
                    <View style={styles.areaBorda}>
                        <Image
                            // resizeMode="cover"
                            style={styles.ImgStories2}
                        />
                    </View>

                    <Text>user</Text>
                </View>
                <View style={styles.areaImg}>
                    <View style={styles.areaBorda}>
                        <Image
                            // resizeMode="cover"
                            style={styles.ImgStories2}
                        />
                    </View>

                    <Text>user</Text>
                </View>
                <View style={styles.areaImg}>
                    <View style={styles.areaBorda}>
                        <Image
                            // resizeMode="cover"
                            style={styles.ImgStories2}
                            // source={{ uri: this.state.imgperfil }}
                        />
                    </View>

                    <Text>user</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    areaStories: {},
    scroll: {
        marginTop: 10,
        paddingBottom: 5,
        borderBottomWidth: 0.3,
        borderColor: '#999',
    },
    areaBorda: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 65,
        height: 65,
        borderRadius: 37.5,
        borderWidth: 2,
        borderColor: 'red',
    },
    ImgStories: {
        width: 55,
        height: 55,
        borderRadius: 27.5,
    },
    ImgStories2: {
        width: 55,
        height: 55,
        borderRadius: 27.5,
        backgroundColor: 'blue',
    },
    areaImg: {
        flex: 1,
        marginLeft: 15,

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Stories;
