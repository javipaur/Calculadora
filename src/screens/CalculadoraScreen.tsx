import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../themes/appTheme'

export const CalculadoraScreen = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('100');

    const limpiar =()=>{
        setNumero('0')
    }

   const montarNumero=(numeroTexto:string)=>{
         setNumero(numero+numeroTexto);
   }

    

  return (
    <View style={styles.calculadoraContainer}>
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
        <Text 
        style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>

        <View style={styles.fila}>
           <BotonCalc texto="C" accion={limpiar} color="#9B9B9B" />
           <BotonCalc texto="+/-" color="#9B9B9B" accion={limpiar} />
           <BotonCalc texto="del" color="#9B9B9B" accion={limpiar}/>
           <BotonCalc texto="/" color="#FF9427" accion={limpiar}/>
        </View>

        <View style={styles.fila}>
           <BotonCalc texto="7" accion={montarNumero} />
           <BotonCalc texto="8" accion={montarNumero}/>
           <BotonCalc texto="9" accion={montarNumero}/>
           <BotonCalc texto="*" color="#FF9427" accion={limpiar}/>
        </View>

        <View style={styles.fila}>
           <BotonCalc texto="4" accion={montarNumero}/>
           <BotonCalc texto="5" accion={montarNumero}/>
           <BotonCalc texto="6" accion={montarNumero}/>
           <BotonCalc texto="-" color="#FF9427"accion={limpiar}/>
        </View>

        <View style={styles.fila}>
           <BotonCalc texto="1" accion={montarNumero}/>
           <BotonCalc texto="2" accion={montarNumero}/>
           <BotonCalc texto="3" accion={montarNumero}/>
           <BotonCalc texto="" color="#FF9427" accion={limpiar}/>
        </View>

        <View style={styles.fila}>
           <BotonCalc texto="0" ancho={true} accion={montarNumero}/>
           <BotonCalc texto="." accion={montarNumero}/>
           <BotonCalc texto="=" color="#FF9427" accion={limpiar}/>
        </View>

        


    </View>
  )
}
