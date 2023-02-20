import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import VectorImage from 'react-native-vector-image';
import CustomTabScreen from './app/Component/CustomTabScreen';
import List from './app/Component/List'
import  Screen1 from './app/Component/Screen1'
import { icBack, icCheckboxWithOutline, icHamburgerMenu, icHanger, icTabHome } from './app/utils/images';


function App() {
  const [selectedIndex,setSelectedIndex] = useState(0)
  const [tabs,setTabs] = useState([
    'Select Student','Tab 2','Tab 3'
  ])
   
  return (
    <SafeAreaView style={{flex:1}}>
        <View
          style={{
           flexDirection:'row',
           marginVertical:20,
           marginHorizontal:10
           
          }}>
            <VectorImage source={icHamburgerMenu} style={styles.backIcon}/>
          <Text style={{ }}>                                                                                                                                        </Text>
        </View>
       <CustomTabScreen 
        selectedTabIndex={selectedIndex}
        tabs={tabs}
        onTabChangeAction={(index: any) =>{
          setSelectedIndex(index)
        }}
        
       />
       {selectedIndex == 0 ?
          <List/>:selectedIndex == 1?
          <Screen1/>:
              <Text>This is for the develop branch</Text>
       }
     <Text>This is for the branch_01 branch</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  backIcon:{
    height:20,
    width:20
  }
});

export default App;
