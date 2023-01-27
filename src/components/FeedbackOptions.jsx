import React from 'react';
import PropTypes from 'prop-types';
import { BlockButton, FeedbackButton } from './App.Styled';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <BlockButton>
            {options.map((option) => (
            <FeedbackButton  key={option} type='button' name={option} onClick={() => onLeaveFeedback(option)}>
                {option}
            </FeedbackButton>
        ))}
        </BlockButton>
        
    );
};

FeedbackOptions.propTypes={
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;