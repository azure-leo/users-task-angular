import { UserssEntity } from './userss.models';
import {
  userssAdapter,
  UserssPartialState,
  initialUserssState,
} from './userss.reducer';
import * as UserssSelectors from './userss.selectors';

describe('Userss Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUserssId = (it: UserssEntity) => it.id;
  const createUserssEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UserssEntity);

  let state: UserssPartialState;

  beforeEach(() => {
    state = {
      userss: userssAdapter.setAll(
        [
          createUserssEntity('PRODUCT-AAA'),
          createUserssEntity('PRODUCT-BBB'),
          createUserssEntity('PRODUCT-CCC'),
        ],
        {
          ...initialUserssState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Userss Selectors', () => {
    it('selectAllUserss() should return the list of Userss', () => {
      const results = UserssSelectors.selectAllUserss(state);
      const selId = getUserssId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = UserssSelectors.selectEntity(state) as UserssEntity;
      const selId = getUserssId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectUserssLoaded() should return the current "loaded" status', () => {
      const result = UserssSelectors.selectUserssLoaded(state);

      expect(result).toBe(true);
    });

    it('selectUserssError() should return the current "error" state', () => {
      const result = UserssSelectors.selectUserssError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
