import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
       <ScrollView 
        style={styles.scroll}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{alignItems: 'center'}}
> {/*esse safado tem q ficar aqui, deu erro da ultima vez;-;*/}

{/* cabeçalho*/}
   <View style={styles.cabesalho} >
    <Text style={styles.titulo}>Jonh MacAfee</Text>
    <Text style={styles.subtitulo}>o Pioneiro do anti-vírus</Text>
   </View>

{/* main */}
<View style={styles.main}>
<Image style={styles.img} 
source={{ uri:'https://tm.ibxk.com.br/2016/06/21/21171850912253.jpg?ims=1500x600/filters:quality(80)'}} 
/>
   {/* tag de image é <Image/> diferente das de mais ate aqui */}

  <Text style={styles.conteudo}> <Text style={{fontWeight:"bold"}}>John McAfee</Text> foi um programador e empresário norte-americano que teve grande importância no início da área de segurança da informação.
     Nos anos 1980, quando os vírus de computador começaram a surgir, ele percebeu que seria necessário criar formas de proteger os computadores pessoais.
     Por isso, fundou a empresa McAfee em 1987, ajudando a iniciar o mercado de softwares de proteção digital e tornando-se uma figura relevante no desenvolvimento da cibersegurança.
  </Text> {/*esse text c font é pra uma frase ficar em negrito.*/}

  <Text style={styles.conteudo2}>O principal produto criado por ele foi o <Text style={{fontWeight:"bold"}}> McAfee Antivirus</Text>, um dos primeiros antivírus comerciais para computadores pessoais. 
    O programa funcionava analisando arquivos do sistema e comparando-os com padrões conhecidos de vírus, identificando e removendo arquivos maliciosos antes que causassem danos. 
    Para a época, o software foi considerado bastante eficiente, pois conseguia detectar vários dos vírus existentes e ajudou a estabelecer a prática de usar antivírus regularmente para proteger computadores.
    </Text>
</View>

{/*main...*/}
<View style={styles.main2}>
  <Image style={styles.img2} 
source={{ uri:'https://crdms.images.consumerreports.org/prod/products/cr/models/398509-antivirus-for-windows-mcafee-antivirus-plus-2019-10004945.png'}} 
/>

  <Text style={styles.conteudo3}>antivírus teve grande relevância no início da computação pessoal, pois ajudou a combater um problema que começava a crescer: os vírus de computador.
     Naquela época, muitos usuários não tinham nenhuma forma de proteção, e programas maliciosos podiam se espalhar facilmente por disquetes e arquivos compartilhados.
      O software contribuiu para popularizar o uso de antivírus e mostrou a <Text style={{fontWeight: "bold"}}>importância da segurança digital</Text>, influenciando o desenvolvimento de outras ferramentas de proteção e ajudando a estruturar o setor de cibersegurança. </Text>
</View>
 
 {/*footer*/}
 <View style={styles.footer}>
  <Text style={styles.gitHub}>Git Hub</Text>
  <Text style={styles.git}>@GreiceTreviso</Text>
  <Text style={styles.git}>@BisBranc</Text>
 </View>

</ScrollView>
    </View>
  );
}
// style padrao
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:'40'
  },

  scroll: {
    width: '100%'
  },

  //* cabeçalho
  cabesalho: {
   backgroundColor: '#FF0000',
   width:'100%', //largura
   height:'10%', //altura
   alignItems: 'center', //centraliza horizontalmente
   justifyContent:'center', //centraliza vertical
   marginBottom:'20', //espaço abaixo
  
   //sombreamento
   shadowColor:'#000', //cor
   shadowOpacity:0.2, //opacidade
   shadowRadius:6, // raio 
   elevation:5 //no android
  },
  
  //titulos
  titulo: {
fontFamily:'oswald'
  },

  // imagens
  img:{ //lembrete que a imagem precisa de estilização se nn o cod n funciona ;-;
   width: '50%',
   height: '30%',
   borderRadius:20,
   margin:10,
   alignItems:'center'
  },

 img2:{
   width: '70%',
   height: '70%',
   borderRadius:20,
   marginTop:30, //espaço encima
   alignItems:'center',
   alignSelf:'center', //força img pro meio

   resizeMode:'contain' //faz a imagem caber inteira mesmo com margin
  },


  //conteudos
conteudo:{
  margin:20, //espaçamento entre linhas   QUE SALVA VIDAS
  marginBottom: 10, //espço abaixo 
},

conteudo2:{
margin:20,
marginBottom:90,
},

conteudo3:{
  marginBottom:20 //espaço abaixo
},
 
//footer
footer:{
backgroundColor: '#FF0000',
width:'100%', 
   height:'10%', 
   justifyContent:'center', 
   marginTop: 190
},
 
git:{
textAlign:'left' //empurra lado 
},

gitHub:{
textAlign:'center',
fontWeight: 'bold'
}

});

