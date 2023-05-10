
import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardFilmes from './CardFilmes';

export default function animes() {
  const animes = [
    {
      id:"1",
      imagem: require("../assets/Animes/berserk_.jpg"),
      nome: " Berserk", 
      datalanc: "agosto de 1989",
      descricao: "A história acompanha Guts e seus amigos encarando as consequências da transformação de Griffith no quinto membro da Mão de Deus, Femto. Ao longo do caminho Guts conhece uma bruxa chamada Schierke e descobre a armadura Berserker, tão poderosa que é capaz de ameaçar a sanidade de Guts.",
    },

    {
      id:"2",
      imagem: require("../assets/Animes/bleach.jpg"),
      nome: " Bleach",
      datalanc: "  5 de outubro de 2004 ",
      descricao: " O jovem Ichigo é surpreendido com indesejadas habilidades de ceifeiro de almas e quer devolver os poderes. Mas deve executar algumas tarefas antes.",
    },

    {
      id:"3",
      imagem: require("../assets/Animes/one pice.jpg"),
      nome: " One Piece ",
      datalanc: "20 de outubro de 1999",
      descricao: " A série foca em Monkey D. Luffy, um jovem feito de borracha, que, inspirado em seu ídolo de infância, o poderoso pirata Shanks, o Ruivo, parte em uma jornada do mar do East Blue para encontrar o tesouro mítico, o One Piece, e proclamar-se o Rei dos Piratas.",
    },
  ];
 
  return (
    
    <ScrollView>
      <View style={estilo.container2}>
        <FlatList
          data={animes}
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
