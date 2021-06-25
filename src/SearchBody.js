import React from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { ListItem, List } from "native-base";
import axios from "axios";

var { height, width } = Dimensions.get("window");
var bg = require("../assets/icons/bg.jpg");

class SearchBody extends React.Component {
  render() {
    var pokemon = this.props.data;
    if (!pokemon) {
      return <View />;
    }
    console.log(pokemon.name);
    return (
      <ImageBackground style={styles.backgroundImage} source={bg}>
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.header}>
            #{pokemon.id} - {pokemon.name.toUpperCase()}
          </Text>
          <View style={styles.viewStyle}>
            <Image
              source={{ uri: pokemon.sprites.front_default }}
              style={styles.img}
            />
          </View>
          <View style={styles.info}>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Type</Text>
            </ListItem>
            <List
              dataArray={pokemon.types}
              renderRow={(item) => (
                <ListItem>
                  <Text>{item.type.name}</Text>
                </ListItem>
              )}
            ></List>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Size</Text>
            </ListItem>
            <ListItem>
              <Text>Weight - {pokemon.weight}</Text>
            </ListItem>
            <ListItem>
              <Text>Height - {pokemon.height}</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Abilities</Text>
            </ListItem>
            <List
              dataArray={pokemon.abilities}
              renderRow={(item) => (
                <ListItem>
                  <Text>{item.ability.name}</Text>
                </ListItem>
              )}
            ></List>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = {
  img: {
    height: 250,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  header: {
    fontSize: 35,
    color: "gold",
    textShadowColor: "black",
    textShadowRadius: 8,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 5,
    fontFamily: "Trebuchet MS",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: width,
    height: height,
  },
  info: {
    flex: 1,
    backgroundColor: "white",
    opacity: 0.8,
  },
};

export default SearchBody;
