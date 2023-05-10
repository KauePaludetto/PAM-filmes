
import { View, ScrollView, FlatList } from 'react-native';
import estilo from './estilo';
import CardFilmes from './CardFilmes';

export default function Filmes() {
  const Filmes = [
    {
      id: "1",
      imagem: require("../assets/Filmes/clube da luta.jpg"),
      nome: " Clube da Luta",
      datalanc: "6 de maio de outubro de 1999",
      descricao: " Um homem deprimido que sofre de insônia conhece um estranho vendedor chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.",
    },

    {
      id: "2",
      imagem: require("../assets/Filmes/donnie darko.jpg"),
      nome: "Doniie Darko",
      datalanc: " 9 de outubro de 2004",
      descricao: " Donnie é um jovem excêntrico que despreza a grande maioria de seus colegas de escola. Ele tem visões, em especial de Frank, um coelho gigante que só ele consegue ver e que o encoraja a fazer brincadeiras humilhantes com quem o cerca. Um dia, uma de suas visões o atrai para fora de casa e lhe diz que o mundo acabará dentro de um mês. Donnie inicialmente não acredita, mas, momentos depois, a turbina de um avião cai em sua casa e ele começa a se perguntar qual é o fundo de verdade dessa previsão.",
    },

    {
      id: "3",
      imagem: require("../assets/Filmes/scarface.jpg"),
      nome: "Scarface",
      datalanc: "17 de maio de 1984",
      descricao: "Após receber residência permanente nos Estados Unidos em troca do assassinato de um oficial do governo cubano, Tony Montana se torna o chefe do tráfico de drogas em Miami. Matando qualquer um que entre em seu caminho, Tony eventualmente se torna o maior traficante da Flórida, controlando quase toda a cocaína que entra em Miami. Porém, a pressão da polícia, as guerras com cartéis colombianos e sua própria paranoia servem para alimentar as chamas de sua eventual queda.",
    },
  ];

  return (

    <ScrollView>
      <View style={estilo.container2}>
        <FlatList
          data={Filmes}
          renderItem={({ item }) =>
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