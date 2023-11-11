import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert

} from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";

export default function Home() {
const [participants, setParticipants] = useState<string[]>([]);
const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
      return Alert.alert("Participante existente", "Já existe um participante na lista com esse nome.")
    }

    if(participantName === "" ) {
      return Alert.alert("Aviso" ,"Preencha participante antes de adicioná-lo.")
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName("");
  }
 
  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => setParticipants(prevState => prevState.filter(Participant => Participant !== name))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
  }



  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Terça, 7 de novembro de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Partipante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
      data={participants}
      keyExtractor={item => item}
      renderItem={
        ({item}) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Ninguém chegou no evento ainda? Adicione participantes na sua lista de presença
        </Text>
      )}
      />
    </View>
  );
}
