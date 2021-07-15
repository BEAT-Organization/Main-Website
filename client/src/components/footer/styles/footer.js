import styled from 'styled-components'

export const Container = styled.div`
    padding: 5vh 3vw;
    background: #000c26;
`

export const Icon = styled.i`
    font-size: ${(props) => (props.social ? '2.3em' : '1.5em')};
    margin-right: 20px;
`
export const Mail = styled.p`
    display: inline-block;
    font-weight: bold;
    color: #387fde;
    margin: 0;
    &:hover {
        ${(props) =>
            !props.disabled
                ? `color: #387fde;
                  transition: 200ms ease-in;`
                : ''}
    }
`
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 2000px;
    margin: 0 auto;
`
export const icons = styled.div`
    alignitems: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: ${(props) => (props.social ? 'center' : 'left')};
    justify-content: center;
    margin:0px 15px;
    @media(max-width: 650px) {
    text-align: center;
    margin-bottom:5vh;
    align-items: center;
    }
`

export const Row = styled.div`
    display: flex;
    flex: 1;
    @media(max-width: 650px) {
    flex-direction: column;
    justify-content: space-bewteen;
  }
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`

export const Link = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 15px;
    text-decoration: none;
    &:hover {
        ${(props) =>
            !props.disabled
                ? `color: #387fde;
                  transition: 200ms ease-in;`
                : ''}
    }
`
export const Contact = styled.p`
    color: #fff;
    margin-bottom: 20px;
    margin-top: 0px;
    font-size: 15px;
    display:flex;
    align-items: center;
`

export const Title = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
    margin-top: 0;
`

