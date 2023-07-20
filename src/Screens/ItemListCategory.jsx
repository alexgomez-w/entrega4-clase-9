import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsRaw from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/Colors'
import Search from '../Components/Search'

const ItemListCategory = ({
  navigation,
  route
}) => {

  const { category } = route.params

  console.log(category);
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState("")

  useEffect(() => {
 
    const productsFiltered = productsRaw.filter(product => product.category === category && product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
    setProducts(productsFiltered)

  }, [category, keyword])

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/
    const evaluation = expression.test(input)

    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      setKeywordError("Solo letras y números")
    }

  }

  return (
    <View style={styles.container}>
      {/*  <Button onPress={() => navigation.goBack()} title="Go back" /> */}
      <Search
        onSearch={onSearch}
        error={keywordError}
        goBack={() => navigation.goBack()}
      />
      <FlatList
        numColumns={4}
        data={products}
        keyExtractor={product => product.id}
        renderItem={({ item }) => <ProductItem
          item={item}
          navigation={navigation}
        />}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container: {
    height: '90%',
    backgroundColor: colors.lightPink,
    //alignItems: 'center'
  },
  columnWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    padding: 1,
    marginVertical: 1,
    marginHorizontal: 1,
  },
})