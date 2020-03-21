import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList
} from "react-native";
import DefaultButton from "../components/DefaultButton";
import DefaultList from "../components/DefaultList";
import DefaultModal from "../components/DefaultModal";

const HomeScreen = props => {
  const [data, setData] = React.useState({});
  const [showModal, setShowModal] = React.useState(false);
  const [modalData, setModalData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    getData().then(() => setLoading(false));
  }, []);
  const getData = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const result = await res.json();
    setData(result);
  };

  return (
    <View style={styles.home}>
      {loading && <ActivityIndicator size="large" animating={true} />}
      {!loading && (
        <View style={{ width: "100%", alignItems: "center" }}>
          <DefaultButton
            style={styles.btn}
            title="Log Out"
            onPress={() => props.navigation.navigate("Auth")}
          />

          <DefaultList
            data={data}
            onPress={() => {
              setShowModal(true);
              setModalData(data);
            }}
          />

          <DefaultModal
            data={modalData}
            visible={showModal}
            onCloseModal={() => setShowModal(false)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center"
  },
  btn: {
    marginTop: 10
  }
});

export default HomeScreen;
