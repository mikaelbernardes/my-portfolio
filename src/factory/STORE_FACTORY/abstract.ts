import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IEntity {
  [key: string]: unknown;
}

export interface StoreConfig<T> {
  name: string;
  initialState: T;
  toggleFunction: (state: T & { toggle: () => void }) => Partial<T>;
}

export class PersistedStoreFactory {
  static createStore<T>(config: StoreConfig<T>) {
    return create<T & { toggle: () => void }>()(
      persist(
        (set) => ({
          ...config.initialState,
          toggle: () =>
            set((state) => ({
              ...state,
              ...config.toggleFunction(state),
            })),
        }),
        {
          name: config.name,
        },
      ),
    );
  }
}
