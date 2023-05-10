import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardFilmes from './CardFilmes';

export default function Series() {
  const series = [
    {
      id:"1",
      imagem: require("../assets/Séries/Dark.jpg"),
      nome: " Dark ",
      datalanc: " 1 de dezembro de 2017",
      descricao: " A série se passa na cidade fictícia de Winden, na Alemanha, que sofre o impacto do desaparecimento de uma criança, que expõe os segredos e as conexões ocultas entre quatro famílias locais, enquanto elas lentamente desvendam uma sinistra conspiração de viagem no tempo que abrange várias gerações. ",
    },

    {
      id:"2",
      imagem: require("../assets/Séries/the sopranos.jpg"),
      nome: " The Sopranos ",
      datalanc: " 10 de janeiro de 1999",
      descricao: "A série acompanha a família Soprano, liderada por Tony Soprano, um mafioso ítalo-americano da cidade de Nova Jersey. Tony enfrenta o desafio de conciliar sua vida no trabalho com os problemas familiares, que envolvem sua esposa Carmela e seus filhos Meadow e Anthony Junior.",
    },

    {
      id:"3",
      imagem: require("../assets/Séries/breaking bad.jpg"),
      nome: " Breaking Bad ",
      datalanc: " 20 de janeiro de 2008",
      descricao: "Um professor do secundário com cancer de pulmão terminal junta-se a um ex-aluno para fabricar e vender metanfetaminas como forma de garantir o futuro da sua família. Veja tudo o que quiser. Ruptura Total venceu um total de 16 Emmys, incluindo quatro para Melhor Ator Dramático, para Bryan Cranston.",
    },
  ];
 
  return (
    
    <ScrollView>
      <View style={estilo.container2}>
        <FlatList
          data={series}
          renderItem={({item})=>
            <CardFilmes 
                imagem={item.imagem}
                nome={item.nome}
                datalanc={item.datalanc}
                descricao={item.descricao}
            />
          }
          keyExtractor={item => item.id}
        />        
      </View>
    </ScrollView>
  );
}
