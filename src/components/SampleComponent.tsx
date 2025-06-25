import React from 'react';

export interface SampleComponentProps {
  /** Prop documentation */
  value?: number;
}

const SampleComponent: React.FC<SampleComponentProps> = ({
  value = 1,
}) => {
  return (
    <>
      <div>{value}</div>
    </>
  );
};

export default SampleComponent;
