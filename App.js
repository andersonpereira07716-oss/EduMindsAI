import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView, 
  StatusBar,
  Alert 
} from 'react-native';

export default function App() {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { id: 'focado', label: '🎯 Focado', color: '#4CAF50' },
    { id: 'ansioso', label: 'Calmo 🧘', color: '#FF9800' },
    { id: 'cansado', label: '😴 Leve', color: '#9C27B0' },
    { id: 'motivado', label: '🚀 Motivado', color: '#2196F3' },
  ];

  const tracks = {
    focado: [
      { title: 'Sessão Intensa de Foco', desc: '45 min de estudo com exercícios avançados.' },
      { title: 'Desafio Prático', desc: 'Resolução de 5 questões complexas.' }
    ],
    ansioso: [
      { title: 'Técnica de Respiração 4-7-8', desc: '5 min para estabilizar o foco antes dos estudos.' },
      { title: 'Revisão Leve', desc: 'Leitura interativa de resumos visuais.' }
    ],
    cansado: [
      { title: 'Micro-aprendizado', desc: 'Sessão de 10 min com conceitos em flashcards.' },
      { title: 'Áudio Guia', desc: 'Escute as definições principais sem forçar a visão.' }
    ],
    motivado: [
      { title: 'Avançar Módulo', desc: 'Aprenda um novo conceito do seu curso hoje.' },
      { title: 'Simulado Rápido', desc: 'Teste seus conhecimentos gerais.' }
    ]
  };

  const handlePanicMode = () => {
    Alert.alert(
      "Modo Suporte",
      "Respire fundo. Deseja iniciar um exercício rápido de descompressão mental?",
      [
        { text: "Agora não", style: "cancel" },
        { text: "Sim, vamos lá", onPress: () => alert("Iniciando técnica de calma...") }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>EduMinds</Text>
        <TouchableOpacity style={styles.panicButton} onPress={handlePanicMode}>
          <Text style={styles.panicButtonText}>🛡️ Modo Calma</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Banner do Estado */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Olá! Como você está hoje?</Text>
          <Text style={styles.cardSubtitle}>
            Sua trilha adaptativa é ajustada de acordo com o seu estado atual.
          </Text>

          {/* Seleção de Humor */}
          <View style={styles.moodGrid}>
            {moods.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.moodChip,
                  selectedMood === item.id && { backgroundColor: item.color, borderColor: item.color }
                ]}
                onPress={() => setSelectedMood(item.id)}
              >
                <Text style={[
                  styles.moodText,
                  selectedMood === item.id && { color: '#ffffff', fontWeight: 'bold' }
                ]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Trilha de Estudos Adaptativa */}
        {selectedMood && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Trilha Recomendada para Você</Text>
            {tracks[selectedMood].map((track, index) => (
              <TouchableOpacity key={index} style={styles.trackCard}>
                <Text style={styles.trackTitle}>{track.title}</Text>
                <Text style={styles.trackDesc}>{track.desc}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  panicButton: {
    backgroundColor: '#EF4444',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  panicButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#2563EB',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 16,
  },
  moodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  moodChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    backgroundColor: '#F1F5F9',
  },
  moodText: {
    fontSize: 13,
    color: '#334155',
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 12,
  },
  trackCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  trackTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 4,
  },
  trackDesc: {
    fontSize: 13,
    color: '#64748B',
  },
});
