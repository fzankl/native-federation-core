import type { NFBuildAdapterOptions } from '../domain/core/build-adapter.contract.js';
import { getBuildAdapter } from '../core/build-adapter.js';

export async function bundle(options: NFBuildAdapterOptions) {
  const adapter = getBuildAdapter();
  return await adapter(options);
}
