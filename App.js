import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerSign}>
        <Image source={require("./assets/cart.png")} style={styles.cartImage} />
        <Text style={styles.headerText}>Bem-vindo de volta!</Text>
        <Text style={styles.headerSubText}>Sentimos sua falta por aqui</Text>
      </View>

      <View style={styles.loginArea}>
        <Ionicons name='person-outline' size={50} color='black' />
        <Text style={[styles.loginQuestionText, styles.loginFirstQuestion]}>
          Usuário ou E-mail
        </Text>
        <TextInput
          style={styles.input}
          // placeholder='Digite seu usuário ou e-mail'
        />

        <Text style={styles.loginQuestionText}>Senha</Text>
        <TextInput
          style={styles.input}
          // placeholder='Digite sua senha'
          secureTextEntry={true} // para esconder senha
        />

        <TouchableOpacity
          style={styles.buttonEntrar}
          onPress={() => {
            // console.log("Botão pressionado!");
          }}
        >
          <Text style={styles.buttonEntrarText}>Entrar</Text>
        </TouchableOpacity>

        <View>
          <View style={styles.warnArea}>
            <Text style={styles.warnText}>Não tem uma conta? </Text>
            <Text style={[styles.warnText, styles.warnTextEspecial]}>
              Cadastre-se
            </Text>
          </View>
        </View>
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0274BC",
    // alignItems: "center",
    // justifyContent: "center",
  },

  headerSign: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  cartImage: {
    width: 75,
    height: 75,
    resizeMode: "contain",
  },

  headerText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  headerSubText: {
    color: "#EEEEEE",
    fontSize: 10,
  },

  loginArea: {
    backgroundColor: "#fff",
    width: "80%", // não encosta nas bordas da tela
    height: "70%",
    padding: 20, // espaço interno
    borderRadius: 16, // cantos arredondados
    minHeight: 200, // altura mínima (ajuste como quiser)
    // justifyContent: "center",
    // alignItems: "center", // textos alinhados à esquerda
    shadowColor: "#000", // sombra leve (opcional, bom visual)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, // sombra no Android
    marginTop: 20, // espaço externo superior
    alignSelf: "center",
  },

  loginFirstQuestion: {
    marginTop: 30,
  },

  loginQuestionText: {
    color: "#838383",
    fontSize: 15,
  },

  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    paddingHorizontal: 0, // pode deixar zero ou ajustar se quiser
    marginBottom: 20,
  },

  buttonEntrar: {
    backgroundColor: "#FD8700",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },

  buttonEntrarText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  warnText: {
    color: "#171717",
    fontSize: 10,
  },
  warnTextEspecial: {
    color: "#1E90FF",
  },

  warnArea: {
    flexDirection: "row",
    justifyContent: "center", // centraliza horizontalmente (opcional)
    alignItems: "center", // alinha verticalmente no centro (opcional)
    marginTop: 10,
  },
});
