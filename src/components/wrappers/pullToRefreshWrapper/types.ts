import React from "react";
export interface PullToRefreshProps {
    refreshLoaderColor?: string;
    onRefresh: ()=>Promise<void> | void;
    children: React.ReactNode;
};