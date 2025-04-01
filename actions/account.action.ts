import { AccountFlaged, AccountTagged } from "@/interfaces/account.interface";
import {
  AccountsByTagParam,
  AccountsByFlagParam,
} from "@/services/account.reposity";
import { AccountService } from "@/services/account.service";

const baseUrl = process.env.API_URL ?? "http://localhost:3000/api";
const accountService = new AccountService(baseUrl);

export async function getAccountsByTag(
  params: AccountsByTagParam
): Promise<AccountTagged[]> {
  const queryParams = new URLSearchParams();

  params.tag && queryParams.set("tag", params.tag);
  params.limit && queryParams.set("limit", params.limit.toString());
  params.offset && queryParams.set("offset", params.offset.toString());
  params.orderAsc && queryParams.set("orderAsc", params.orderAsc.toString());

  const accounts = await accountService.getAccountsByTag(queryParams);
  return accounts;
}

export async function getAccountsByFlag(
  params: AccountsByFlagParam
): Promise<AccountFlaged[]> {
  const queryParams = new URLSearchParams();

  params.haveVoucher &&
    queryParams.set("haveVoucher", params.haveVoucher.toString());
  params.limit && queryParams.set("limit", params.limit.toString());
  params.offset && queryParams.set("offset", params.offset.toString());
  params.orderDesc && queryParams.set("orderAsc", params.orderDesc.toString());

  const accounts = await accountService.getAccountsByFlag(queryParams);
  return accounts;
}
