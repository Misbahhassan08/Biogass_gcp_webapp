import React from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import styled from 'styled-components';

const RangeSliderContainer = styled.div`
  width: 12em;
  padding: 25px 15px;
  .input-range__label--max,
  .input-range__label--min {
    display: none !important;
  }
  .input-range__track--background {
    background: ${props => props.theme.disabled};
  }
  .input-range__track--active,
  .input-range__slider {
    background: ${props => props.theme.accent};
    border-color: ${props => props.theme.accent};
  }
`;

const MAX_VALUE = 100;
const MIN_VALUE = 0;

const formatLabel = value =>
  (value === MIN_VALUE && 'MIN') || (value === MAX_VALUE && 'MAX') || value;

const RangeSlider = ({ onChange, value }) => (
  <RangeSliderContainer>
    <InputRange
      maxValue={MAX_VALUE}
      step={1}
      minValue={MIN_VALUE}
      value={value}
      onChange={onChange}
      formatLabel={formatLabel}
    />
  </RangeSliderContainer>
);

RangeSlider.propTypes = {
  value: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RangeSlider;