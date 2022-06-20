/* eslint-disable no-console */
class StorageManager {
  static setItem = (key: Required<string>, data: any) => {
    if (typeof window !== 'undefined') {
      try {
        const serializedState = JSON.stringify(data);
        localStorage.setItem(key, serializedState);
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  static getItem = (key: Required<string>): any | undefined => {
    if (typeof window !== 'undefined') {
      try {
        const serializedState = localStorage.getItem(key);

        if (serializedState === null) {
          return;
        }

        return JSON.parse(serializedState);
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  static removeItem = (key: Required<string>) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  static clear = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.clear();
      } catch (error) {
        console.log('error', error);
      }
    }
  };
}

export default StorageManager;
