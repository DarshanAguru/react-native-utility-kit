import { View, type NativeSyntheticEvent, type NativeScrollEvent } from 'react-native'
import React, { useCallback, useRef, useState } from 'react';
import { GestureHandlerRootView, RefreshControl, ScrollView } from 'react-native-gesture-handler';
import type { PullToRefreshProps } from './types';
import { ScaledSheet } from 'react-native-size-matters';

const PullToRefreshWrapper:React.FC<PullToRefreshProps> = ({
    onRefresh,
    children,
    refreshLoaderColor = "#000000"
}) => {

    const [refreshCounter, setRefreshCounter] = useState<number>(0);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const scrollY = useRef<number>(0);


    const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        scrollY.current = e.nativeEvent.contentOffset.y;
    };

    const handleRefresh = useCallback(
        async () => {
            if(refreshing) return;

            const isAtTop = scrollY.current <= 0;
            console.log(isAtTop);
            if(!isAtTop) return;

            try{
                setRefreshing(true);
                setRefreshCounter(prev => prev+1);
                await Promise.resolve(onRefresh());
            }catch(e)
            {
                console.warn("Refresh Failed ", e);
            }finally{
                setRefreshing(false);
            }
        }
    ,[onRefresh, refreshing]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView
        onScroll={handleScroll}
        contentContainerStyle={styles.scrollContainerStyle}
        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
                colors={[refreshLoaderColor]}
                tintColor={refreshLoaderColor}
            />
        }
      >
        <View key={refreshCounter} style={{flex:1}}>
        {children}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  )
}

const styles = ScaledSheet.create({
     container:{
    flex: 1,
  },

  scrollContainerStyle: {
    flexGrow: 1,
  }
});

export {PullToRefreshWrapper}