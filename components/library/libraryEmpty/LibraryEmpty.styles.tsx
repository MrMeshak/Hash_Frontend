import styled from 'styled-components'
import { PrimaryBtn } from '../../utility/button/button.styles'

export const Container = styled.div`
    text-align: center;
    
    margin: 1.5rem;
    padding: 3rem 1.5rem;
    background-color:${props=>props.theme.colors.surface};
    border-radius: 10px;

`
export const EmptyListImg = styled.div`
    margin: 3rem;
`

export const Title = styled.h3`
    color: ${props=>props.theme.colors.tertiary};
    font-size: 0.9rem;
    font-weight: 600;

`

export const Description = styled.p`
    margin: 1rem 0rem;
    color: ${props=>props.theme.colors.paragraph};
    font-weight: 400;
    font-size: 0.9rem;
`

export const AddFeedbackBtn = styled(PrimaryBtn)`
    width: fit-content;
`