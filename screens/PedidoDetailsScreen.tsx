import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react'
import { Alert, Dimensions, LogBox, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Toast from 'react-native-easy-toast';
import { Button, Card, Icon, Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import HighScore from '../components/HighScore';
import { MenuCompraComp } from '../components/MenuCompraComp';
import Modal from '../components/Modal';
import UpdateDeleteScore from '../components/UpdateDeleteScore';
import { RootStackParams } from '../navigation/StackNavigator';
import { pedidoDetailsStyles } from '../theme/PedidoDetailsTheme';

interface Props extends StackScreenProps<RootStackParams, 'PedidoDetailsScreen'>{};
const {width : width} = Dimensions.get('screen');
export default function PedidoDetailsScreen({navigation, route}:Props) {

    const idPedido = route.params.idPedido;
    const estadoPedido = route.params.estadoPedido;
    const calificacionRestaurante = route.params.calificacionRestaurante; //Es true si el restaurante ya tiene calificacion
    const reclamo = route.params.reclamo;
    const menus = route.params.menus;

    const [cantidad, setCantidad] = React.useState<number>(0);
    const toastRef = React.useRef<any>()
    const [ refrescar, setRefrescar ] = useState( false );
    const [ calificacion, setCalificacion ] = useState( calificacionRestaurante );
    const [mostrarModal, setMostrarModal] = useState(false)
    const [renderComponent, setRenderComponent] = useState(<HighScore />)

    
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
        navigation.setOptions({
            title:'Pedido',
            headerTitleAlign:'center',
            headerShown: true,
            headerBackTitle: 'Atras',
            headerBackTitleStyle:{color:'black'},
            headerTintColor: 'black',
            headerTitleStyle:({color:'white'}),
            headerStyle:({backgroundColor:'#FD801E'})
        })
        console.log('Prueba')
        setRefrescar(false)

    }, [refrescar])

    //const { agregarProducto} = useContext( CarritoContext );

    const altaBajaModificarPuntuacion =() => {
         
        if (calificacion=='false') {
            setRenderComponent(
                <HighScore
                toastRef={toastRef} idPedido={idPedido} setMostrarModal={setMostrarModal} setCalificacion={setCalificacion} setRefrescar ={setRefrescar}
                />
            )
            setMostrarModal(true)
            return;
        }
            setRenderComponent(
                <UpdateDeleteScore
                toastRef={toastRef} idPedido={idPedido} setMostrarModal={setMostrarModal} setCalificacion={setCalificacion} setRefrescar ={setRefrescar} calificacion={calificacion}
                />
            )
            setMostrarModal(true)


    }

    return (
      <>       
        <ScrollView>    
        <View style={{ flex: 1,backgroundColor:"#f2f2f2"}}>           
            <View style={{width: width, padding:15, alignItems:'center' }}>
              <Text style={{fontWeight: 'bold', fontSize:20,paddingStart:5}}> Menus</Text>
              <MenuCompraComp vertical={true} productos={menus} width={150} height={250} />         
            </View>
        
        <View style={{flex:1, justifyContent:'center'}}>
        {
            (estadoPedido == 'Rechazado' || estadoPedido == 'Finalizado' || estadoPedido == 'Devuelto') ?
            (
                <Button
                    type="outline"
                    buttonStyle = {pedidoDetailsStyles.button}
                    activeOpacity={ 0.8 }
                    style={ pedidoDetailsStyles.button }
                    onPress={() => altaBajaModificarPuntuacion()}
                    title = {(calificacion== 'false')? ('Calificar'):('Modificar calificacion')}
                    titleStyle= {pedidoDetailsStyles.title}
                />
            ):(null )}
        {
            (estadoPedido == 'Finalizado' && reclamo == undefined) ?
            (
                <Button
                    type="outline"
                    buttonStyle = {pedidoDetailsStyles.button}
                    activeOpacity={ 0.8 }
                    style={ pedidoDetailsStyles.button }
                    onPress={()=> navigation.navigate('ReclamoScreen',{'idPedido':idPedido,'reclamo':reclamo}) }
                    title = 'Reclamar'
                    titleStyle= {pedidoDetailsStyles.title}
                />
            ):(null )}
        </View>    
            <Modal visible={mostrarModal} setVisible={setMostrarModal}>
                {
                    renderComponent
                }
            </Modal>
        </View>
        <Toast ref={toastRef} position="bottom" opacity={0.9}/> 
        </ScrollView>    
    </>
    )
}
