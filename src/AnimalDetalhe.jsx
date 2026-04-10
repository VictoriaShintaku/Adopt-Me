import { useParams } from "react-router-dom";

const animais = [
  { id: 1, nome: "Pipoca", tipo: "Gato", descricao: "Um gato muito curioso e brincalhão!", localizacao: "Lisboa", imagem: "https://t3.ftcdn.net/jpg/03/31/29/80/360_F_331298095_qXh9FThBqu5Up1O8MJZwqaOx0qoGVa4C.jpg" },
  { id: 2, nome: "Lilith", tipo: "Gata", descricao: "Uma gata muito independente e cheia de personalidade!", localizacao: "Porto", imagem: "https://cdn.pixabay.com/photo/2015/12/27/23/43/gata-1110701_960_720.jpg" },
  { id: 3, nome: "Fofura", tipo: "Cachorra", descricao: "Yorkshire muito alegre e leal!", localizacao: "Faro", imagem: "https://i.pinimg.com/originals/e2/89/75/e289753aa0cbf7d161521ee81581b3c8.jpg" },
  { id: 4, nome: "Wood", tipo: "Cachorro", descricao: "Um cachorro velhinho mas muito leal e carinhoso!", localizacao: "Beja", imagem: "https://petcaramelo.com/wp-content/uploads/2018/07/vira-lata.jpg" },
];

function AnimalDetalhe() {
  const { id } = useParams();
  const animal = animais.find((a) => a.id === parseInt(id));

  return (
    <div>
      <h1>{animal.nome}</h1>
      <img src={animal.imagem} alt={animal.nome} width="200" />
      <p>Tipo: {animal.tipo}</p>
      <p>Descrição: {animal.descricao}</p>
      <p>Localização: {animal.localizacao}</p>
    </div>
  );
}

export default AnimalDetalhe;