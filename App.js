import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ width: '100%' }}>
        <Image
          source={{
            uri: 'https://i.ibb.co/yh01T3k/002.png',
          }}
          style={styles.banner}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image
          source={{
            uri: 'https://i.ibb.co/Mk95tq9/profile.png',
          }}
          style={styles.profile}
        />
        <View style={styles.content}>
          <Text style={styles.h3}>Waritthon Sathidkunrat</Text>
          <Text style={styles.p1}>(6514110025)</Text>
        </View>
        <View style={styles.action}>
          <TouchableOpacity style={styles.btn_primary}>
            <Text style={{ color: '#fff' }}>Follow me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_secondary_outline}>
            <Text style={{ color: '#a7acb1' }}>message</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.p1}>ITMI1301</Text>
          <Text style={styles.p2}>Cross-Plaaorm Application Development</Text>
          <Text style={styles.p2}>with React Framework</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.p2}>Information Technology and Mobile Software Innovation Program</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.p2}>Mahanakorn University of Technology</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    height: 228,
    width: '100%'
  },
  profile: {
    height: 155,
    width: 155,
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 3,
    marginTop: -90,
    marginBottom: 16,
  },
  content: {
    alignItems: 'center',
    marginBottom: 8
  },
  h3: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  p1: {
    fontSize: 18,
    fontWeight: 'regular',
    textAlign: 'center',
  },
  p2: {
    fontSize: 12,
    fontWeight: 'regular',
    textAlign: 'center',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    gap: 8
  },
  btn_primary: {
    width: 124,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d6efd',
    borderRadius: 10,
  },
  btn_secondary_outline: {
    width: 124,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: '#a7acb1',
    borderWidth: 1,
    borderRadius: 10,
  },
});
