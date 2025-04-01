import { AccountFlaged, AccountTagged } from "@/interfaces/account.interface";

export interface QueryParams {
  offset?: number;
  limit?: number;
}

export interface AccountsByTagParam extends QueryParams {
  tag: string;
  orderAsc?: boolean;
}

export interface AccountsByFlagParam extends QueryParams {
  haveVoucher: boolean; // Podría ser Record<string, boolean> para más flags
  orderDesc?: boolean;
}

export interface AccountRepository {
  getAccountsByTag(params: URLSearchParams): Promise<AccountTagged[]>;
  getAccountsByFlag(params: URLSearchParams): Promise<AccountFlaged[]>;
}
