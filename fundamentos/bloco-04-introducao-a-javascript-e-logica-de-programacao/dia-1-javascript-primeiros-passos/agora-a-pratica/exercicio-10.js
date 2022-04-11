const valorCusto = 100;
const valorVenda = 179;

if (valorCusto >= 0 && valorVenda >= 0) {
    const valorCustoTotal = valorCusto * 1.2;
    const lucro = (valorVenda - valorCustoTotal) * 1000;
    console.log(lucro);
} else {
  console.log("Erro");
}