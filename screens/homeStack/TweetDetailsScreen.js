import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Button, StyleSheet, View } from "react-native";

import TweetContent from "../../components/TweetContent";

const TweetDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { params } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.tweet.author.name,
    });
  }, []);

  return (
    <View testID="TweetDetailScreen" style={styles.container}>
      <Button title="GO Back" onPress={() => navigation.goBack()} />
      <TweetContent tweet={params.tweet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TweetDetailScreen;
