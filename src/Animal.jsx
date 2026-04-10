function Animal({ nome, tipo, imagem }) {
  return (
    <div>
      <img src={imagem} alt={nome} width="200" />
      <h2>{nome}</h2>
      <p>{tipo}</p>
    </div>
  );
}

export default Animal;