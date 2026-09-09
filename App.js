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
    { id: 'focado', label: '🎯 Focado', color: '#16A34A' },
    { id: 'ansioso', label: '🧘 Calmo', color: '#D97706' },
    { id: 'cansado', label: '😴 Leve', color: '#9333EA' },
    { id: 'motivado', label: '🚀 Motivado', color: '#2563EB' },
  ];

  const tracks = {
    focado: [
      { title: 'Sessão Intensa de Foco', desc: '45 min de estudo focado com exercícios avançados.' },
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
        <TouchableOpacity style={styles.panicButton} onPress={handlePanicMode} activeOpacity={0.8}>
          <Text style={styles.panicIcon}>🛡️</Text>
          <Text style={styles.panicButtonText}>Calma</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Card do Estado Emocional */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Olá! Como você está hoje?</Text>
          <Text style={styles.cardSubtitle}>
            Sua trilha adaptativa é ajustada de acordo com o seu estado atual.
          </Text>

          {/* Seleção de Humor */}
          <View style={styles.moodGrid}>
            {moods.map((item) => {
              const isSelected = selectedMood === item.id;
              return (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.7}
                  style={[
                    styles.moodChip,
                    { backgroundColor: isSelected ? item.color : '#F1F5F9', borderColor: isSelected ? item.color : '#CBD5E1' }
                  ]}
                  onPress={() => setSelectedMood(item.id)}
                >
                  <Text style={{ fontSize: 14, color: isSelected ? '#FFFFFF' : '#334155', fontWeight: 'bold' }}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Trilha Adaptativa */}
        {selectedMood && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Trilha Recomendada para Você</Text>
            {tracks[selectedMood].map((track, index) => (
              <TouchableOpacity key={index} style={styles.trackCard} activeOpacity={0.8}>
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
    paddingTop: StatusBar.currentHeight || 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  panicButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EF4444',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
  },
  panicIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  panicButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  content: {
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    borderLeftWidth: 5,
    borderLeftColor: '#2563EB',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 16,
    lineHeight: 18,
  },
  moodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  moodChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 10,
  },
  trackCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  trackTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 4,
  },
  trackDesc: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 18,
  },
});
