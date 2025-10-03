import { Link } from "expo-router";
// import { StyleSheet, Text, View } from "react-native";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import 'react-native-reanimated';
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const images = [
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1023/600/400",
  "https://picsum.photos/id/1024/600/400",
];

export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text>Edit app/index.tsx to edit this screen. elamuruhu</Text>
      <Link href="/login" style={styles.loginBtn}>Login Page</Link>
      <Carousel
        loop
        width={width}
        height={250}
        autoPlay={true}
        autoPlayInterval={2000}
        data={images}
        scrollAnimationDuration={3000}
        mode="parallax"
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
  },
  loginBtn:{
     width:100,
        height:20,
        backgroundColor:"coral",
        textAlign:"center",
        color:"white",
        borderRadius:6,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
  },
})
