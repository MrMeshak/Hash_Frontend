import styled from "styled-components";
import { PrimaryBtn } from '../../utility/button/button.styles'

interface ISortFilter{
    filterListOpen: boolean;
}

export const Container = styled.div`
    margin-top: 5rem;
    padding: 0.5rem 1.5rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.colors.tertiary};

    @media ${props=>props.theme.device.tablet}{
        margin: 0rem 1.5rem  0rem  1.5rem;
        border-radius: 10px;
    }

`
export const SortFilter = styled.div<ISortFilter>`
    position: relative;
    align-items: center;
    width: 12rem;

    font-family: 'Jost';
    font-weight: 400;
    font-size: 0.9rem;
    color: ${props => props.filterListOpen? props.theme.colors.textGreyedOut:props.theme.colors.textOnDark};

`
export const SortSelectorBtn = styled.button`
   
    padding: 0rem 0.1rem 0rem 0rem;

    font-family: 'Jost';
    font-size: 0.9rem;
    color: inherit;
    font-weight: 700;
    background-color: transparent;
    border: none;
    cursor: pointer;
    

`

export const AddFeedbackBtn = styled(PrimaryBtn)`
    width: 10rem;
    padding: 0.7rem 0rem;
`
export const LoginBtn = styled(PrimaryBtn)`
    width: 5rem;
    padding: 0.7rem 0rem;
`
export const IconSpan = styled.span`
    margin-left: 0.5rem;
`
