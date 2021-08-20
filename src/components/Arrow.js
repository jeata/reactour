import React from 'react'
import styled from 'styled-components'
import SvgButton from './SvgButton'
import PropTypes from 'prop-types'

const Label = styled.span`
  font-size: 12px;
  line-height: 1;
`

function Arrow({
  className,
  onClick,
  inverted,
  label,
  disabled,
  accentColor,
  showProgress,
  current,
  count,
}) {
  return (
    <SvgButton
      className={className}
      onClick={onClick}
      data-tour-elem={`${inverted ? 'right' : 'left'}-arrow`}
      disabled={disabled}
    >
      {label ? (
        <Label>
          {label}
          {showProgress && count > 1
            ? ' (' + (current + 1) + '/' + count + ')'
            : null}
        </Label>
      ) : (
        <svg viewBox="0 0 18.4 14.4">
          <path
            d={
              inverted
                ? 'M17 7.2H1M10.8 1L17 7.2l-6.2 6.2'
                : 'M1.4 7.2h16M7.6 1L1.4 7.2l6.2 6.2'
            }
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
          />
        </svg>
      )}
    </SvgButton>
  )
}

Arrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  inverted: PropTypes.bool,
  label: PropTypes.node,
  disabled: PropTypes.bool,
  accentColor: PropTypes.string,
  showProgress: PropTypes.bool,
  current: PropTypes.number,
  count: PropTypes.number,
}

export default styled(Arrow)`
  color: ${props => (props.disabled ? '#ccc' : '#fff')};
  margin: 0 6px;

  /* ${props => (props.inverted ? 'margin-left: 24px;' : 'margin-right: 24px;')}; */
  ${props =>
    !props.label &&
    `
    width: 16px;
    height: 12px;
    flex: 0 0 16px;
  `};

  ${props => 
    props.label &&
    `
    border-radius: 3px;
    padding: 6px 10px;
    background-color: ${props.accentColor};
  `};

  ${props =>
    props.align === 'right' &&
    `
    position: absolute;
    right: 12px;
    bottom: 12px;
  `};

  &:hover {
    color: ${props => (props.disabled ? '#ccc' : '#fff')};
  }
`
