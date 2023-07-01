import {Card, CardContent} from '@mui/material'
import {styled as muiStyled} from '@mui/material/styles'
import styled from 'styled-components';


export const CustomCardContent = muiStyled(CardContent)({
  height : '3em',
  maxWidth: '10em'
})

export const CustomCard = muiStyled(Card)(({theme}) => ({
  [theme.breakpoints.up('md')]: {
    minWidth: '15em',

  },
  minWidth : '5em',
  display : 'flex',
  flexDirection : 'column',
  alignItems : 'center',
  backgroundColor : 'lightBlue'
}))

export const Container = styled.div({
  margin : '2em'
});