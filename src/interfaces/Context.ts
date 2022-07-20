interface IContext {
  arrayAcoesDisp: object[];
  setArrayAcoesDisp(array: object[]): void;
  arrayAcoesComp: object[];
  setArrayAcoesComp(array: object[]): void;
  itemNegotiate: { name: string; qtd: number; value: number }[];
  setItemNegotiate(array: object[]): void;
  saldo: number;
  setSaldo(number: number): void;
}

export default IContext;
