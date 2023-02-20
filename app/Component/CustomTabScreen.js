import { darkColors } from '@rneui/themed';
import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {darkGreen, nmGrey, whiteColor} from '../utils/colors';
import {NeuzeitGro_Lig} from '../utils/fonts';

const CustomTabBar = ({
  selectedTabIndex = 1,
  tabs = [],
  onTabChangeAction,
  scrollEnabled = false,
  bottomBorder = true,
  leftPadding = true,
}) => {
  const [currentTab, setCurrentTab] = useState(selectedTabIndex);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    setCurrentTab(selectedTabIndex);
  }, [selectedTabIndex]);

  return (
    <View
      style={[
        styles.tabContainer,
        {
          borderBottomColor: bottomBorder ? nmGrey : 'white',
          paddingLeft: leftPadding ? 15 : 0,
        },
      ]}>
      <ScrollView
        ref={ref => (scrollViewRef.current = ref)}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={scrollEnabled}>
        {tabs.map((tabTitle, index) => {
          return (
            <View style={styles.tab} key={index}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  setCurrentTab(index);
                  onTabChangeAction && onTabChangeAction(index);
                }}>
                <Text
                  style={
                    currentTab === index
                      ? styles.selectedTabLabel
                      : styles.tabLabel
                  }>
                  {tabTitle}
                </Text>
                {currentTab === index ? (
                      <View style={{height:3,backgroundColor:darkGreen}} />
                ) : null}
              </TouchableOpacity>
            </View>
          );
        })}
        <View style={{height:3}} />
      </ScrollView>
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    borderBottomWidth: 1,
    backgroundColor: whiteColor,
  },
  tab: {
    paddingHorizontal: 10,
  },
  selectedTabLabel: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.5,
    lineHeight: 20,
    paddingBottom: 5,
  },
  tabLabel: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    lineHeight: 20,
    paddingBottom: 5,
    opacity: 0.7,
  },
});
