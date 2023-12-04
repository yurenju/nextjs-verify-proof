import { Group } from "@semaphore-protocol/group";
import { Identity } from "@semaphore-protocol/identity";
import { generateProof, verifyProof } from "@semaphore-protocol/proof";

export async function POST() {
  const identity = new Identity();
  const group = new Group(0, 20, [identity.commitment]);
  const proof = await generateProof(identity, group, group.root, 0, {
    zkeyFilePath:
      "/Users/yurenju/Downloads/nextjs-verify-proof/public/semaphore.zkey",
    wasmFilePath:
      "/Users/yurenju/Downloads/nextjs-verify-proof/public/semaphore.wasm",
  });
  const result = await verifyProof(proof, 20);

  return Response.json({ result });
}
