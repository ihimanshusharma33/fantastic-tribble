import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Strategy } from '../types/strategy';
import { v4 as uuidv4 } from 'uuid';

interface StrategyState {
  strategies: Strategy[];
  activeStrategy: Strategy | null;
}

const initialState: StrategyState = {
  strategies: [],
  activeStrategy: null,
};

const strategySlice = createSlice({
  name: 'strategy',
  initialState,
  reducers: {
    createStrategy: (state, action: PayloadAction<Omit<Strategy, 'id' | 'createdAt' | 'updatedAt' | 'status'>>) => {
      const newStrategy: Strategy = {
        ...action.payload,
        id: uuidv4(),
        status: 'DRAFT',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      state.strategies.push(newStrategy);
      state.activeStrategy = newStrategy;
    },
    updateStrategy: (state, action: PayloadAction<Strategy>) => {
      const index = state.strategies.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.strategies[index] = {
          ...action.payload,
          updatedAt: new Date().toISOString(),
        };
        if (state.activeStrategy?.id === action.payload.id) {
          state.activeStrategy = state.strategies[index];
        }
      }
    },
    deleteStrategy: (state, action: PayloadAction<string>) => {
      state.strategies = state.strategies.filter(s => s.id !== action.payload);
      if (state.activeStrategy?.id === action.payload) {
        state.activeStrategy = null;
      }
    },
    setActiveStrategy: (state, action: PayloadAction<string>) => {
      state.activeStrategy = state.strategies.find(s => s.id === action.payload) || null;
    },
    submitStrategy: (state, action: PayloadAction<string>) => {
      const strategy = state.strategies.find(s => s.id === action.payload);
      if (strategy) {
        strategy.status = 'SUBMITTED';
        strategy.updatedAt = new Date().toISOString();
      }
    },
  },
});

export const {
  createStrategy,
  updateStrategy,
  deleteStrategy,
  setActiveStrategy,
  submitStrategy,
} = strategySlice.actions;

export default strategySlice.reducer;