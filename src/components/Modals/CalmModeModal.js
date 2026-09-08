import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Animated } from 'react-native';
import { Heart, X } from 'lucide-react-native';

export default function CalmModeModal({ visible, onClose }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (visible) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 2.2,
            duration: 4000,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      scaleAnim.setValue(1);
    }
  }, [visible]);

  return (
    <Modal visible={visible} animationType="fade" transparent={false}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <X size={32} color="#4A5568" />
        </TouchableOpacity>

        <Text style={styles.title}>Modo Calma</Text>
        <Text style={styles.subtitle}>Siga o ritmo do círculo para desacelerar</Text>

        <View style={styles.animationContainer}>
          <Animated.View
            style={[
              styles.breathingCircle,
              { transform: [{ scale: scaleAnim }] },
            ]}
          />
          <Heart size={48} color="#FFFFFF" style={styles.iconOverlay} />
        </View>

        <Text style={styles.instruction}>Inspire... e Expire...</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF8FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2B6CB0',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#4A5568',
    textAlign: 'center',
    marginBottom: 60,
  },
  animationContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 60,
  },
  breathingCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#63B3ED',
    opacity: 0.6,
    position: 'absolute',
  },
  iconOverlay: {
    zIndex: 10,
  },
  instruction: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2B6CB0',
  },
});
