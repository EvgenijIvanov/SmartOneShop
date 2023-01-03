import { SelectedPageReducer } from "./selected.reducer";
import { initialSelectedDataState } from "../../state";

describe('Selected Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = SelectedPageReducer(initialSelectedDataState, action);

      expect(result).toBe(initialSelectedDataState);
    });
  });
});
