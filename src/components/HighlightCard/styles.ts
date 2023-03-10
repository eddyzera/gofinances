import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

type TypeProps = {
  type: 'up' | 'down' | 'total'
}

export const CardContainerView = styled.View<TypeProps>`
  background-color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.secondary : theme.colors.shape
  };
  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;

  margin-right: 16px;
`

export const CardHeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const CardTitleText = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) => 
   type === 'total' ? theme.colors.shape : theme.colors.text_dark
  };
`

export const CardIcon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;
  ${({ type }) => type === 'up' && css`
    color: ${({ theme }) => theme.colors.success};
  `}
  ${({ type }) => type === 'down' && css`
    color: ${({ theme }) => theme.colors.attention};
  `}
  ${({ type }) => type === 'total' && css`
    color: ${({ theme }) => theme.colors.shape};
  `}
`

export const CardFooterView = styled.View``

export const CardAmountText = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) => 
    type === 'total' ? theme.colors.shape : theme.colors.text_dark
  };
  margin-top: 38px;
`

export const CardLastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
   type === 'total' ? theme.colors.shape : theme.colors.text
  };
`