import React from 'react';
import styled from 'styled-components';

export default ({ userFeedback }) => (
    <Feedback color={userFeedback.color}>{userFeedback.message}</Feedback>
);

const Feedback = styled.p`
    color: ${props => props.color};
`;
