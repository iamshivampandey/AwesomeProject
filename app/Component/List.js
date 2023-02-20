import react, { useEffect, useState } from 'react'
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import VectorImage from 'react-native-vector-image'
import { darkGreen, greyColor, lightGrey, redColor } from '../utils/colors'
import { icCheckboxWithOutline, iconRemove } from '../utils/images'

const data = [
    { name: 'shivam', selected: false },
    { name: 'naveen', selected: false },
    { name: 'nepal', selected: false },
    { name: 'sandeep', selected: false },
    { name: 'aman', selected: false },
    { name: 'shubham', selected: true },
    { name: 'deepak', selected: false },
    { name: 'Hashir', selected: false },
    { name: 'amit', selected: false },
]

const List = () => {
    const [list, setList] = useState(data);
    const [selectedName, setSelectedName] = useState(null);
    const [time, setTime] = useState();

    
    const onSelect = (item, ind) => {
             setSelectedName(item.name)
        var newArray = []
        list.map((item, index) => {
            // for single selection

             if(ind===index){
                item.selected=true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
           
             }
             else{
                item.selected=false
             }

            // for multiple selection

//             if (ind === index) {
//                 if (item.selected) {
//                                                                                                                           item.selected = false
//                 }else{
//                     item.selected = true 
//                 }
//             }
            newArray.push(item)
        })
        setList(newArray)
    }
  
    const renderData = ({ item, index }) => {
        return (
            <TouchableOpacity style={[styles.listContainer, { backgroundColor: item.selected ? lightGrey : null }]} onPress={() => onSelect(item, index)}>
                <View>
                    <Text style={[styles.nameList]}>{item.name}</Text>
                   
                </View>
                {item.selected && <VectorImage source={icCheckboxWithOutline} style={styles.checkIcon} />}
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View>
                {!selectedName && <Text style={styles.nameText}>Select Student</Text>}
                {selectedName && <Text style={styles.nameText}>{selectedName}</Text>}
            </View>
            <FlatList
                data={list}
                renderItem={renderData}
            />
        </View>
    )
}
export default List

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginBottom: 10,
    },
    listContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        padding:10,
        borderRadius:5
    },
    nameText: {
        alignSelf: 'center',
        margin: 10,
        fontSize: 35,
        color: redColor,
        textTransform: 'capitalize'
    },
    checkIcon: {
        tintColor: darkGreen
    },
    nameList: {
        textTransform: 'capitalize',
        fontSize: 20,
    }
})