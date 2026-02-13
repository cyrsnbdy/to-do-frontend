import type { AccountType } from "../account/account.type";

export type AuthStoreType = {
  loading: boolean;
  setRegister: (data: Partial<AccountType>) => Promise<boolean>;
  setLogin: (data: Partial<AccountType>) => Promise<boolean>;
  setLogout: (email: string) => Promise<boolean>;
};
