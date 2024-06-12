import VariableBlock from '../blocks/VariableBlock';
import DefaultBlock from '../blocks/DefaultBlock';
import OperationBlock from '../blocks/OperationBlock';

export const nodeTypes = {
  default: DefaultBlock,
  Variable: VariableBlock,
  Operation: OperationBlock,
  Condition: DefaultBlock,
};

export const nodeConfigurations = {
  default: {
    type: 'default',
    data: {
      name: (id) => `default${id}`.toLowerCase(),
    },
  },
  Variable: {
    type: 'Variable',
    data: {
      name: (id) => `variable${id}`.toLowerCase(),
    },
  },
  Operation: {
    type: 'Operation',
    data: {
      name: (id) => `operation${id}`.toLowerCase(),
    },
  },
  // Add more node configurations as needed
};
