import { AccountFlaged, AccountTagged } from "@/interfaces/account.interface";
import {
  AccountsByFlagParam,
  AccountsByTagParam,
  AccountRepository,
} from "./account.reposity";

export class AccountService implements AccountRepository {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = `${baseUrl}/accounts`;
  }

  private handleError(error: Error | unknown) {
    // Acá implementaríamos un logger como Winston
    if (error instanceof Error) {
      console.error("Message error: ", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }

  async getAccountsByTag(params: URLSearchParams): Promise<AccountTagged[]> {
    const controller = new AbortController();
    try {
      console.log(`${this.baseUrl}/getByTag?${params.toString()}`);
      const response = await fetch(
        `${this.baseUrl}/getByTag?${params.toString()}`,
        {
          signal: controller.signal,
          next: { revalidate: 60 },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const serializeData = JSON.stringify(data);
        throw new Error(`Fetch error: ${serializeData}`);
      }

      return data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }
  async getAccountsByFlag(params: URLSearchParams): Promise<AccountFlaged[]> {
    const controller = new AbortController();
    try {
      const response = await fetch(
        `${this.baseUrl}/getByflag?${params.toString()}`,
        {
          signal: controller.signal,
          next: { revalidate: 60 },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const serializeData = JSON.stringify(data);
        throw new Error(`Fetch error: ${serializeData}`);
      }

      return data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }
}
