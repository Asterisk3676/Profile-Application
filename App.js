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
      <View style={{ flex: 1, padding: 15 }}>
        <Image
          source={{
            uri: 'https://i.ibb.co/Mk95tq9/profile.png',
          }}
          style={styles.profile}
        />
        <View style={styles.username}>
          <Text style={styles.h3}>Asterisk</Text>
          <Text style={styles.p1}>(キツネじゃい)</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.p1}>ITMI1301</Text>
          <Text style={styles.p2}>Cross-Plaaorm Application Development</Text>
          <Text style={styles.p2}>with React Framework</Text>
          <Text style={styles.p2}>Information Technology and Mobile Software Innovation Program</Text>
          <Text style={styles.p2}>Mahanakorn University of Technology</Text>
        </View>
        <View style={styles.action}>
          <TouchableOpacity style={styles.btn_primary}>
            <Text style={{ color: '#fff' }}>Follow me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_secondary_outline}>
            <Text style={{ color: '#a7acb1' }}>message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_action}>
            <Text style={{ color: '#a7acb1' }}>...</Text>
          </TouchableOpacity>
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
    marginTop: -120,
    marginBottom: 16,
  },
  username: {
    flexDirection: 'row',
    marginBottom: 8,
    gap: 8,
  },
  content: {
    marginBottom: 8
  },
  h3: {
    fontSize: 24,
    fontWeight: '700',
  },
  p1: {
    fontSize: 18,
    fontWeight: 'regular',
  },
  p2: {
    fontSize: 12,
    fontWeight: 'regular',
  },
  action: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 8
  },
  btn_primary: {
    width: 155,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d6efd',
    borderRadius: 10,
  },
  btn_secondary_outline: {
    width: 155,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: '#a7acb1',
    borderWidth: 1,
    borderRadius: 10,
  },
  btn_action: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: '#a7acb1',
    borderWidth: 1,
    borderRadius: 10,
  }
});
