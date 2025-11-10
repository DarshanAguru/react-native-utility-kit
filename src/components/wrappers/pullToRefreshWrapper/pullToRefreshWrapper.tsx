import { View, type NativeSyntheticEvent, type NativeScrollEvent } from 'react-native'
import React, { useCallback, useRef, useState } from 'react';
import { GestureHandlerRootView, RefreshControl, ScrollView } from 'react-native-gesture-handler';
import type { PullToRefreshProps } from './types';
import { ScaledSheet } from 'react-native-size-matters';


/**
 * PullToRefreshWrapper
 *
 * A utility wrapper that provides **pull-to-refresh** behavior for any scrollable content.
 * It uses `react-native-gesture-handler`'s `ScrollView` and `RefreshControl` to implement
 * native refresh gestures, while guarding against accidental refreshes when not at the top.
 *
 * @component
 * @param {PullToRefreshProps} props - Props for the wrapper
 * @param {() => void | Promise<void>} props.onRefresh - Callback triggered on pull-to-refresh. Supports async functions.
 * @param {React.ReactNode} props.children - The content to render inside the scroll view.
 * @param {string} [props.refreshLoaderColor="#000000"] - Color of the refresh loader/spinner (Android: `colors`, iOS: `tintColor`).
 *
 * @example
 * <PullToRefreshWrapper
 *   refreshLoaderColor="#6200EE"
 *   onRefresh={async () => {
 *     await refetchData();
 *   }}
 * >
 *   <List />
 * </PullToRefreshWrapper>
 *
 * @remarks
 * - Refresh only triggers when the scroll offset is at the top (`contentOffset.y <= 0`).
 * - `refreshCounter` changes the `key` on the inner container to force a re-render on refresh.
 * - Uses `ScaledSheet` to ensure responsive layout via `react-native-size-matters`.
 *
 * @returns {JSX.Element} A scrollable view with pull-to-refresh capabilities.
 */
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