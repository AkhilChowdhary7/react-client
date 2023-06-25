import {Card, CardContent} from '@mui/material'
import {styled} from '@mui/material/styles'

export const CustomCardContent = styled(CardContent)({
  height : '3em',
  maxWidth: '10em'
})

export const CustomCard = styled(Card)(({theme}) => ({
  [theme.breakpoints.up('md')]: {
    minWidth: '15em',

  },
  minWidth : '5em',
  display : 'flex',
  flexDirection : 'column',
  alignItems : 'center'
}))