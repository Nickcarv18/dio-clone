import styled from 'styled-components';
import { IButtonStyled } from './types';

export const ButtonContainer = styled.button<IButtonStyled>`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    border: none;
    cursor: pointer;
    margin-left:16px;

    ${({variant}) => variant !== "primary" && `
        min-width: 167px;
        height: 33px;
        background: #E41050;
        margin-left: 0px;
        margin-top: 16px;

        &:hover{
            opacity: 0.6;
        }

        &::after{
            content: '';
            position: absolute;
            border: 1px solid #E41050;
            top: -5px;
            left: -6px;

            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius:22px
        }
    `} 
`