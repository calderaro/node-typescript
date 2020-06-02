import algoliasearch, { SearchClient } from "algoliasearch";
import { getSecretValue } from "./secrets";

let client: SearchClient | null = null;

export async function getClient(): Promise<SearchClient> {
  if (client) {
    return client;
  }

  const secrets = await getSecretValue("ravent-f9e52", "algolia");

  if (!secrets) {
    throw new Error("no algolia secrets found");
  }

  const [id, key] = secrets.split("-");

  client = await algoliasearch(id, key);

  return client;
}
