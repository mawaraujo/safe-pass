namespace NStore {
  export type Action<T> = {
    payload: T,
    type: string
  }
}

export default NStore;
