import { StyleSheet, Text, View } from 'react-native';

   export default function ResultsScreen({ route }: { route: any }) {
     const { analysis } = route.params;

     return (
       <View style={styles.container}>
         <Text style={styles.header}>Resultados del Análisis</Text>
         <Text style={styles.label}>Sentimiento: <Text style={styles.value}>{analysis.sentiment}</Text></Text>
         <Text style={styles.label}>Confianza: <Text style={styles.value}>{(analysis.confidence * 100).toFixed(2)}%</Text></Text>
         <Text style={styles.label}>Detalles:</Text>
         <Text style={styles.value}>{analysis.insights}</Text>
       </View>
     );
   }

   const styles = StyleSheet.create({
     container: { flex: 1, padding: 20 },
     header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
     label: { fontSize: 18, fontWeight: '600', marginTop: 10 },
     value: { fontWeight: 'normal' },
   });