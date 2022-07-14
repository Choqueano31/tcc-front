import React from 'react';
import  {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
  Font,
  
} from '@react-pdf/renderer';
import 'moment/locale/pt-br';
import BrasaoPM from '../../../../assets/img/new_logo.png';
// import BrasaoPM from '../../../assets/pmpa.png';
import BrasaoEstado from '../../../../assets/img/new_logo.png';
import ReactDOM from 'react-dom';
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

 const styles = StyleSheet.create({
  teste: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Oswald',
  },

  page: {
    flexDirection: 'row',
  },
  body: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 30,
  },
  imgPM: {
    marginTop: 0,
    alignItems: 'flex-end',
    marginLeft: 510,
    width: 50,
    height: 50,
  },

  imgQr: {
    width: 50,
    height: 50,
  },
  containerQrcode: {
    marginTop: 5,
    flexDirection: 'row',
  },
  imgEstado: {
    marginTop: -58,
    width: 50,
    height: 50,
    marginLeft: 30,
  },
  textHeader: {
    textAlign: 'center',
    marginTop: -50,
    fontSize: 13,
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 14,
  },
  assin: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 11,
  },
  locale: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 11,
  },
  textSpace: {
    marginTop: 10,
  },
  paragraph: {
    fontSize: 10,
    marginTop: 5,
    textAlign: 'left',
    marginLeft: 40,
    marginRight: 40,
  },
  paragraph1: {
    textAlign: 'left',
    marginLeft: 40,
    marginRight: 40,
  },
  row: {
    marginTop: 10,
    textAlign: 'left',
    marginLeft: 40,
    marginRight: 40,
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  form: {
    marginTop: 10,
    fontSize: 13,
    textAlign: 'left',
    marginLeft: 40,
    marginRight: 40,
  },
  inputWith: {
    marginLeft: 30,
    marginTop: 4,
  },
  inputs: {
    marginTop: 4,
    marginRight: 50,
  },
  titleForm: {
    marginTop: 7,
    marginBottom: 3,
    textAlign: 'left',
    marginLeft: 0,
    marginRight: 40,
    fontWeight: 'bold',
    fontSize: 10,
    lineHeight: 1.5,
  },
  tableOrd: {
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 10,
    width: 100,
    height: 25,
    marginTop: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  negrito: {
    fontWeight: 'bold',
    color: 'black',
  },
  tableJor: {
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 10,
    width: 160,
    height: 25,
    marginTop: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tableItens: {
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 10,
    marginTop: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 15,
    left: 0,
    right: 0,
    textAlign: 'right',
    color: 'black',
    marginRight: 65,
  },
  pageText: {
    position: 'absolute',
    fontSize: 12,
    bottom: 15,
    left: 0,
    right: 0,
    textAlign: 'left',
    color: 'black',
    marginLeft: 30,
  },
  rodape: {
    position: 'absolute',
    fontSize: 9,
    bottom: 30,
    left: 0,
    right: 0,
    width: 500,
    textAlign: 'left',
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#888',
  },
  rodape2: {
    position: 'absolute',
    fontSize: 9,
    bottom: 30,
    left: 0,
    right: 0,
    width: 500,
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 100,
  },
  signature: {
    width: 100,
    height: 20,
    marginLeft: 200,
  },
  alignFirst: {
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    marginLeft: 25,
    marginRight: 25,
  },
});
export const PdfReqDiaria = () => 
  (
   
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.body}>
          <View style={styles.imgPM}>
            <Image src={BrasaoPM} />
          </View>
          <View style={styles.textHeader}>
            <Text>GOVERNO DO ESTADO DO PARÁ</Text>
            <Text>SECRETARIA DE SEGURANÇA PÚBLICA E DEFESA SOCIAL</Text>
            <Text>POLÍCIA MILITAR DO PARÁ</Text>
            <Text>UNIDADE </Text>
            <Text> </Text>
          </View>
          <View style={styles.imgEstado}>
            <Image src={BrasaoEstado} />
          </View>
          <View style={styles.paragraph1}>
            <Text>
              __________________________________________________________________
            </Text>
          </View>
          <View>
            <Text style={styles.title}>REQUISIÇÃO DE DIÁRIA:</Text>
          </View>
          <View style={styles.alignFirst}>
            <Text style={{ marginLeft: 5, fontWeight: 'bold', marginTop: 5 }}>
              MOTIVO DO DESLOCAMENTO:
            </Text>
          </View>
          <View style={styles.paragraph}>
            <Text>Atividade: </Text>
          </View>
          <View style={styles.paragraph}>
            <Text>Tipo: </Text>
          </View>
          <View style={styles.paragraph}>
            <Text>Modalidade: </Text>
          </View>
          <View style={styles.paragraph}>
            <Text>Processo: </Text>
          </View>
          <View style={styles.paragraph}>
            <Text>Circunstância </Text>
          </View>

          <View style={styles.paragraph}>
            <Text>Local de apresentação: </Text>
          </View>
          <View style={styles.paragraph}>
            <Text>Endereço:</Text>
          </View>
          <View style={styles.paragraph}>
            <Text>Perimetro: </Text>
          </View>
          <View style={styles.paragraph}>
            <Text>Local ou Referência: </Text>
          </View>
          <View style={styles.paragraph}>
            <Text>Ordem de Serviço / Operação Vinculada:</Text>
          </View>
          <View style={styles.paragraph}>
            <Text>Efetivo Escalado: </Text>
          </View>
          <View style={styles.paragraph}>
            <Text>Detalhamento da Missão: </Text>
          </View>
        </View>

        <View style={styles.rodape} />
        <View style={styles.pageNumber}>
          <Text> Página 1</Text>
        </View>
        <View style={styles.pageText}>
          <Text> Gestor Web</Text>
        </View>
      </Page>
    </Document>
  
  );
  ReactDOM.render(<PdfReqDiaria />, document.getElementById('root'));


