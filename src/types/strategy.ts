export type TriggerCondition = {
  id: string;
  type: 'PRICE' | 'VOLUME' | 'INDICATOR';
  operator: '>' | '<' | '==' | '>=' | '<=';
  value: number;
};

export type Strategy = {
  id: string;
  name: string;
  status: 'DRAFT' | 'SUBMITTED' | 'RUNNING' | 'COMPLETED';
  buyTriggers: TriggerCondition[];
  sellTriggers: TriggerCondition[];
  simulationSettings: {
    initialCapital: number;
    maxPositions: number;
    stopLoss: number;
    takeProfit: number;
  };
  results?: {
    totalReturn: number;
    winRate: number;
    trades: number;
  };
  createdAt: string;
  updatedAt: string;
};