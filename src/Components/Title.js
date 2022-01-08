import React from 'react'
import styled from 'styled-components';

function Title({ name, para }) {
    return (
        <TitleStyled >
            <h3>{name}</h3>
            <p>{para}</p>
        </TitleStyled >
    )
}

const TitleStyled = styled.div`
    h3{
        color: var(--color-dark);
        font-size: 2.2rem;
    }
    p{
        padding: 1rem 0;
    }
`;

export default Title;
