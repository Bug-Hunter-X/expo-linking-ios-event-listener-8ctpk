import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrl = async (url) => {
      // Process the deep link URL
      console.log('Deep Link:', url);

      //Do your action here, for example, navigate to the relevant screen
      if(url.includes('myPath')){ // check what type of url it is
        // navigate
      }

    };

    const linkSubscription = Linking.addEventListener('url', ({ url }) => {
      handleUrl(url);
    });

    // Check initial URL (for when app is already open)
    Linking.getInitialURL().then((url) => {
      setInitialUrl(url);
      if (url) {
        handleUrl(url);
      }
    });

    return () => {
      linkSubscription.remove();
    };
  }, []);

  return (
    <View>
      {/* Your app content here */}
    </View>
  );
};

export default App;