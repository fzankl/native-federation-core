import type { NFBuildAdapter } from '../domain/core/build-adapter.contract.js';
import { logger } from '../utils/logger.js';

let _buildAdapter: NFBuildAdapter = async () => {
  // TODO: add logger
  logger.error('NF is missing a build adapter!');
  return [];
};

export function setBuildAdapter(buildAdapter: NFBuildAdapter): void {
  _buildAdapter = buildAdapter;
}

export function getBuildAdapter(): NFBuildAdapter {
  return _buildAdapter;
}
