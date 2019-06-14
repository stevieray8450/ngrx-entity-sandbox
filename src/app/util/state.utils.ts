import { StateEntity } from '../models/state-entity';

export function getNewId(items: StateEntity[]): number {
  if (!items || !items.length) {
    return 1;
  }

  const lastItem = items[items.length - 1];
  if (lastItem) {
    return lastItem.id + 1;
  }
}
