import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

const secrets = new SecretManagerServiceClient();

export async function getSecretValue(
  project: string,
  secretId: string
): Promise<string> {
  const [version] = await secrets.accessSecretVersion({
    name: `projects/${project}/secrets/${secretId}/versions/latest`,
  });

  const payload = version.payload?.data?.toString() || "";

  return payload;
}
