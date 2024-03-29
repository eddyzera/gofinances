import styled from 'styled-components/native'
import { FlatList, FlatListProps } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { DataListProps } from './Dashboard'

export const ContainerView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`
export const HeaderView = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`

export const UserWrapper = styled.View`
  width: 100%;
  margin-top:${getStatusBarHeight() + RFValue(28)}px;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`

export const User = styled.View`
  margin-left: 17px;
`

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary };
  font-size: ${RFValue(24)}px;
`

export const DashboardHightlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`
export const DashboardTransactions = styled.View`
  flex: 1;
  padding: 0 24px;

  margin-top: ${RFPercentage(12)}px;
`

export const DashboardTransactionsTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular };
  margin-bottom: 16px;
`
export const DashboardTransactionsListFlatList = styled(
    FlatList as new (props: FlatListProps<DataListProps>) => FlatList<DataListProps>
  ).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace()
  }
})``

export const LogoutButton = styled(BorderlessButton)``