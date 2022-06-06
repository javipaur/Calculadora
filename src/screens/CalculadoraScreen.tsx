import React from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../themes/appTheme'

export const CalculadoraScreen = () => {



    
  return (
    <View style={styles.calculadoraContainer}>
        <Text style={styles.resultado}>CalculadoraScreen</Text>
        <Text style={styles.resultadoPequeno}>CalculadoraScreen</Text>

        <View style={styles.fila}>
           <BotonCalc texto="C" />
           <BotonCalc texto="+/-" />
           <BotonCalc texto="del" />
           <BotonCalc texto="/" color="#FF9427"/>
        </View>

        <View style={styles.fila}>
           <BotonCalc texto="7" />
           <BotonCalc texto="8" />
           <BotonCalc texto="9" />
           <BotonCalc texto="*" color="#FF9427"/>
        </View>

        <View style={styles.fila}>
           <BotonCalc texto="4" />
           <BotonCalc texto="5" />
           <BotonCalc texto="6" />
           <BotonCalc texto="-" color="#FF9427"/>
        </View>

        <View style={styles.fila}>
           <BotonCalc texto="1" />
           <BotonCalc texto="2" />
           <BotonCalc texto="3" />
           <BotonCalc texto="" color="#FF9427"/>
        </View>

        <View style={styles.fila}>
           <BotonCalc texto="0" ancho={true}/>
           <BotonCalc texto="." />
           <BotonCalc texto="=" color="#FF9427"/>
        </View>

        


    </View>
  )
}
