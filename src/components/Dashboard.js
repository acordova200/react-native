import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import moment from 'moment';
import {PieChart} from 'react-native-chart-kit';
import styles from '../constants/styles';

const Dashboard = ({presupuesto, totalEgreso, egresos}) => {
  const [data, setData] = useState([]);

  /*   CUANDO CAMBIE PRESUPUESTO O TOTAL EGRESO MODIFICARA LOS DATOS EN GRAFICA */
  useEffect(() => {
    /* DATOS DE GRAFICA DE PASTEL */
    setData([
      {
        name: 'Presupuesto',
        monto: presupuesto - totalEgreso,
        color: '#5b4193',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: 'Egresos',
        monto: totalEgreso,
        color: '#b54545',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
    ]);
  }, [presupuesto, totalEgreso]);

  const {width} = Dimensions.get('window');

  return (
    <View style={styles.dashboardContainer}>
      {/* TITULO DE DASHBOARD */}
      <View style={styles.rowContainer}>
        <Text style={[styles.textBold, {color: '#34006a'}]}>Dashboard</Text>
      </View>

      {/* GRAFICA DE PASTEL */}
      <PieChart
        data={data}
        width={width}
        height={225}
        chartConfig={{color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`}}
        accessor={'monto'}
        backgroundColor={'transparent'}
        center={0}
      />

      {/* TITULO DE DETALLE DE EGRESO */}
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray'}}>
          DETALLE DE EGRESO
        </Text>
      </View>

      {/* INFORMACION SOBRE LOS EGRESOS FECHA,NOMBRE DE GASTO Y MONTO */}
      <ScrollView>
        {egresos &&
          egresos.map((egreso, index) => (
            <View key={index} style={styles.detalleContainer}>
              {/*  FECHA DE EGRESO */}
              <Text style={{fontSize: 15}}>
                {moment(egreso.fecha).format('MM/DD/YYYY')}
              </Text>

              {/*  NOMBRE DE EGRESO */}
              <Text style={{fontSize: 15}}>{egreso.nombre.toUpperCase()}</Text>

              {/*  MONTO DE EGRESO */}
              <Text style={{fontSize: 15, color: '#34006a'}}>
                $ {egreso.monto}
              </Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default Dashboard;
