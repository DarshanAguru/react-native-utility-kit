import { type StorageKey } from "./Keys";


interface IStorage {
    set: (key:string,value:any)=>Promise<void>;
    get: (key:string)=>Promise<string | null>;
    remove: (key:string)=>Promise<void>;
    clear: ()=>Promise<void>;
}

export type StoreType = 'MMKV' | 'Async';

const MMKVAdapter = (store:any)=>{
    return {
        set: async(key:string,value:string) => {
            await store.set(key,value);
        },
        get: async(key:string)=>{
            return await store.getString(key);
        },
        remove: async (key:string)=>{
            await store.remove(key);
        },
        clear: async()=>{
            await store.clearAll();
        }
    }
}


const AsyncAdapter = (store:any)=>{
    return {
        set: async(key:string,value:string) => {
            store.setItem(key,value);
        },
        get: async(key:string)=>{
            return await store.getItem(key);
        },
        remove: async (key:string)=>{
            await store.removeItem(key);
        },
        clear: async()=>{
            await store.clear();
        }
    }
}

const adapter = {
    'MMKV': MMKVAdapter,
    'Async': AsyncAdapter
}

const genericStorageAdapter = (store:any, storeType:StoreType):IStorage=>{
    return adapter[storeType](store);
}


const PersistStorage = (storage:any, storeType: StoreType) => ({

    setItem: async (key:StorageKey, value:string):Promise<boolean>=>{
        try{
            await genericStorageAdapter(storage,storeType).set(key,value);
            return true;
        }catch(e:any)
        {
            console.error("SetItem Error:", e);
            return false;
        }
    },

    getItem: async (key:StorageKey):Promise<string | null>=>{
        try{
            return await genericStorageAdapter(storage,storeType).get(key);
        } catch (e:any)
        {
            console.error("GetItem Error:", e);
            return null;
        }
    },

    removeItem: async (key:StorageKey):Promise<boolean>=>{
        try{
            await genericStorageAdapter(storage,storeType).remove(key);
            return true;
        } catch (e:any){
            console.error('RemoveItem Error:', e);
            return false;
        }
    }

}
);


const clearStorage = async(storage:any, storeType:StoreType):Promise<boolean>=>{
    try{
        await genericStorageAdapter(storage,storeType).clear();
        return true;
    } catch (e:any){
        console.error("ClearAll Error:", e);
        return false;
    }
}

export {PersistStorage, clearStorage};