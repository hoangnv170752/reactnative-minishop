import {ScrollView, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useEffect, useState} from 'react';
import { styles } from './styles';
import Header from '../../../components/Header';
import { FlatList } from 'react-native-gesture-handler';
import { categories } from '../../../data/categories';
import { products } from '../../../data/products';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';
const Home = ({navigation}) => {
    const [selectedCategory, setSelectedCategory] = useState();
    const [keyword, setKeyword] = useState();
    const [filteredProducts, setFilteredProducts] = useState(products);
    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory);
            setFilteredProducts(updatedProducts);
        } else if (selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword?.toLowerCase()) );
            setFilteredProducts(updatedProducts); 
        } else if (!selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => product?.title?.toLowerCase().includes(keyword?.toLowerCase()) );
            setFilteredProducts(updatedProducts); 
        } else if (!keyword && !selectedCategory) {
            setFilteredProducts(products);
        }
    }, [selectedCategory, keyword])
    const renderCategoryItem = ({ item, index }) => {
        return (
            <CategoryBox
                onPress={() => setSelectedCategory(item?.id)}
                isSelected={item?.id === selectedCategory}
                isFirst={index === 0} 
                title={item?.title} 
                image={item?.image} 
            />
        )
    }

    const renderProductItem = ({ item }) => {
        const onProductPress = ( product ) => {
            navigation.navigate('ProductDetails')
        };
        return (
            <ProductHomeItem onPress={() => onProductPress(item)} {...item} />
        )
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Header showSearch showLogout title="Find All You Need" />
                <FlatList style={styles.list} horizontal data={categories} renderItem={renderCategoryItem} keyExtractor={(item, index) => String(index)} />
                <FlatList
                    style={styles.productsList}
                    numColumns={2}
                    data={filteredProducts} 
                    renderItem={renderProductItem}
                    keyExtractor={(item) => String(item.id)} 
                    ListFooterComponent={<View style={{ height: 200 }} />}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;