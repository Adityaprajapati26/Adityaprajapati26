function throttler(callback,delay){
    let throttleTimeout = null;
    let storedEvent = null;
  
   
    const throttledEventHandler = (event) => {
      storedEvent = event;
     const shouldHandleEvent = !throttleTimeout;
  
    
      if (shouldHandleEvent) {
       
        callback(storedEvent);
        storedEvent = null;
        throttleTimeout = setTimeout(() => {
          throttleTimeout = null;
      
          if (storedEvent) {
          
            throttledEventHandler(storedEvent);
          }
        }, delay);
      }
    };
  
    
    return throttledEventHandler;
}

button.addEventListener("click",throttler(callback,delay))