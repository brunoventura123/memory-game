import styled from "styled-components";

export const Container = styled.div<{ showBackground: boolean }>`
    background-color: ${props => props.showBackground ? '#1550ff' : '#e2e3e3'};
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 20px;
`
type OpacityType = {
    opacity?: number
}
export const Icon = styled.img<OpacityType>`
    width: 40px;
    height: 40px;
    opacity:${props => props.opacity ?? 1};
`