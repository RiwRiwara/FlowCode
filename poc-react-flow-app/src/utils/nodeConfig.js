import VariableBlock from '../blocks/VariableBlock';
import DefaultBlock from '../blocks/DefaultBlock';
import OperationBlock from '../blocks/OperationBlock';
import OutputBlock from '../blocks/OutputBlock';

export const nodeTypes = {
  default: DefaultBlock,
  Variable: VariableBlock,
  Operation: OperationBlock,
  Condition: DefaultBlock,
  Output: OutputBlock,
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
      value: '',
      dataType: 'string',
    },
  },
  Operation: {
    type: 'Operation',
    data: {
      name: (id) => `operation${id}`.toLowerCase(),
    },
  },
  Output: {
    type: 'Output',
    data: {
      name: (id) => `output${id}`.toLowerCase(),
    }
  },

};
