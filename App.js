import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { ShieldAlert } from 'lucide-react-native';
import CalmModeModal from './src/components/Modals/CalmModeModal';

export default function App() {
  const [calmModeVisible, setCalmModeVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>EduMinds<Text style={{color: '#3182CE'}}>AI</Text></Text>
        
        <TouchableOpacity 
          style={styles.calmButton}
          onPress={() => setCalmModeVisible(true)}
        >
          <ShieldAlert size={20} color="#FFFFFF" />
          <Text style={styles.calmButtonText}>Modo Calma</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Olá! Como você está hoje?</Text>
          <Text style={styles.cardDescription}>
            Sua trilha adaptativa está pronta para começar no seu ritmo.
          </Text>
        </View>
      </View>

      <CalmModeModal 
        visible={calmModeVisible} 
        onClose={() => setCalmModeVisible(false)} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7FAFC' },
  header: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  logoText: { fontSize: 22, fontWeight: '800', color: '#2D3748' },
  calmButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E53E3E',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  calmButtonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 },
  content: { flex: 1, padding: 20 },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    borderLeftWidth: 6,
    borderLeftColor: '#3182CE',
    elevation: 3,
  },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#2D3748', marginBottom: 8 },
  cardDescription: { fontSize: 14, color: '#718096', lineHeight: 20 },
});
