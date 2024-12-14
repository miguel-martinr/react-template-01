const DEFAULT_DELAY_MS = 1000;

interface SleepParams {
  ms?: number;
  factorMs?: number;
}

export const sleep = async ({
  ms = DEFAULT_DELAY_MS,
  factorMs = 1,
}: SleepParams = {}) =>
  new Promise((resolve) => setTimeout(resolve, ms * factorMs));
