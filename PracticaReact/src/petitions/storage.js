const storage = {
    get(key) {
      let value = localStorage.getItem(key) 
      if (value===null){
        value= sessionStorage.getItem(key)
      }
      return JSON.parse(value);
    },
  
    set(key, value,remember=false) {
      remember ? localStorage.setItem(key, JSON.stringify(value)) : sessionStorage.setItem(key, JSON.stringify(value))
    },
  
    remove(key) {
      localStorage.removeItem(key);
    },
  
    clear() {
      localStorage.clear();
    },
  };
  
  export default storage;
  