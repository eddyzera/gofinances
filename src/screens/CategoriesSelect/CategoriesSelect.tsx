import React from 'react'
import {
  CategoriesSelectContainerView,
  CategoriesSelectHeaderView,
  CategoriesSelectTitleText,
  CategoryTouchableOpacity,
  CategoryIcon,
  CategoryNameText,
  CategorySeparatorView,
  CategoriesSelectFooterView,
  CategoriesSelectButtonTouchable,
  CategoriesSelectButtonText
} from './styles'
import { FlatList } from 'react-native'
import { categories } from '../../utils/categories'

type Category = {
  key: string
  name: string
}

interface CategoriesSelectProps {
  category: Category
  setCategory: (category: Category) => void
  closeSelectCategory: () => void
}

export const CategoriesSelect: React.FunctionComponent<CategoriesSelectProps> = ({
  category,
  setCategory,
  closeSelectCategory
}) => {

  const handleSelectCategory = (item: Category) => {
    setCategory(item)
  }

  return (
    <CategoriesSelectContainerView>
      <CategoriesSelectHeaderView>
        <CategoriesSelectTitleText>
          Categoria
        </CategoriesSelectTitleText>
      </CategoriesSelectHeaderView>
      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%', }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <CategoryTouchableOpacity
            onPress={() => handleSelectCategory(item)}
            isActive={category.key === item.key}
          >
            <CategoryIcon name={item.icon} />
            <CategoryNameText>{item.name}</CategoryNameText>
          </CategoryTouchableOpacity>
        )}
        ItemSeparatorComponent={() => (<CategorySeparatorView/>) }
      />
      <CategoriesSelectFooterView>
        <CategoriesSelectButtonTouchable onPress={closeSelectCategory}>
          <CategoriesSelectButtonText>
            Selecionar
          </CategoriesSelectButtonText>
        </CategoriesSelectButtonTouchable>
      </CategoriesSelectFooterView>
    </CategoriesSelectContainerView>
  )
}