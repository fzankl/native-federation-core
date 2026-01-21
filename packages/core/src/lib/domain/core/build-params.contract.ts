export interface BuildParams {
  skipMappingsAndExposed: boolean;
  skipShared: boolean;
  signal?: AbortSignal;
}
