import '@apollo/client/core/types';

declare module '@apollo/client/core/type' {
  export type DefaultContext = {
    clientName: 'rickAndMorty' | 'baseEndpoint'
  }
}
