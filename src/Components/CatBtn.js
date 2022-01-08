import React from 'react';
import styled from 'styled-components';


function CatBtn({ name}) {
    return (
        <CatBtnStyled>
            <p>{name}</p>
        </CatBtnStyled>
    )
}


const CatBtnStyled = styled.div`
    background-color: rgba(0,0,0,0.06);
    padding: 2rem 1rem;
    cursor: pointer;
    border-radius: 7px;
    transition: all .4s ease-in-out;
    &:hover{
        background-color: var(--color-primary);
        p{
            color: var(--color-white);
        }
    }

    p{
        text-align: center;
    }
`;
export default CatBtn;
