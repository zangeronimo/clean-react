export class UnexpectedError extends Error {
  constructor () {
    super('Algo de errado aconteceu. Tente novamente em Breve')
    this.name = 'UnexpectedError'
  }
}
