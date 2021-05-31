import React from 'react'
import styled from 'styled-components';

function Title({title, span}) {
    return (
        <TitleStyled>
            <h2>{title} <b><span>{span}</span></b></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    padding-left: 50px;
    @media screen and (max-width: 1200px){
    padding: 0px;
    }
    h2{
        color: var(--white-color);
        font-size: 26px;
        font-weight: normal;
        text-transform: uppercase;
        position: relative; 
        padding-bottom: .7rem;
        @media screen and (max-width: 496px){
            font-size: 26px;
            padding-left: 0px;

        }
        @media screen and (max-width: 370px){
            font-size: 2rem;
            padding-left: 0px;
        }
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 7.4rem;
            height: .33rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 0;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 3.5rem;
            height: .33rem;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;
        }
        span{
            font-weight: normal;
            color: rgba(25,29,43,.44);
            font-size: 50px;
            position: absolute;
            left: 0;
            top: 30%;
            z-index: -1;
            @media screen and (max-width: 620px){
                font-size: 25px;
            }
            @media screen and (max-width: 496px){
                font-size: 20px;
            }
            @media screen and (max-width: 370px){
                font-size: 20px;
            }
        }
    }
`;

export default Title;
