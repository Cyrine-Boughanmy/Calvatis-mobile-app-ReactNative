
// import React, { useCallback, useEffect, useState } from 'react';
// import { Image, AppRegistry } from 'react-native'; // Import Image and AppRegistry
// import SplashScreen from 'react-native-splash-screen'; // Import SplashScreen
// import AsyncStorage from '@react-native-community/async-storage'; // Import AsyncStorage (for async storage)
// import ImagePicker from 'react-native-image-picker'; // Import ImagePicker (for asset handling)
// import { enableScreens } from 'react-native-screens';
// enableScreens();

// import { Block, GalioProvider } from 'galio-framework';
// import { NavigationContainer } from '@react-navigation/native';

// import Screens from './src/navigation/Screens';
// import { Images, articles, argonTheme } from './src/constants';

// // cache app images
// const assetImages = [
//   Images.Onboarding,
//   Images.LogoOnboarding,
//   Images.Logo,
//   Images.Pro,
//   Images.ArgonLogo,
//   Images.iOSLogo,
//   Images.androidLogo,
// ];
// // cache product images
// articles.map((article) => assetImages.push(article.image));

// function cacheImages(images) {
//   return images.map((image) => {
//     if (typeof image === 'string') {
//       return Image.prefetch(image);
//     } else {
//       return Image.prefetch(image.uri); // Assuming the image object has a 'uri' property
//     }
//   });
// }

// export default function App() {
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Load Resources
//         await _loadResourcesAsync();
//         // Pre-load fonts, make any API calls you need to do here
//         await Font.loadAsync({
//           ArgonExtra: require('./assets/font/argon.ttf'),
//         });
//       } catch (e) {
//         console.warn(e);
//       } finally {
//         // Tell the application to render
//         setAppIsReady(true);
//       }
//     }
//     prepare();
//   }, []);

//   const _loadResourcesAsync = async () => {
//     return Promise.all([...cacheImages(assetImages)]);
//   };

//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       await SplashScreen.hide(); // Use SplashScreen.hide() to hide the splash screen
//     }
//   }, [appIsReady]);

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <NavigationContainer onReady={onLayoutRootView}>
//       <GalioProvider theme={argonTheme}>
//         <Block flex>
//           <Screens />
//         </Block>
//       </GalioProvider>
//     </NavigationContainer>
//   );
// }

// // Register the app component
// // AppRegistry.registerComponent('MyApp', () => App);


// import React, {useEffect, useState, useCallback} from 'react';

// import {Image, Text} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
// import {enableScreens} from 'react-native-screens';
// import {Block, GalioProvider} from 'galio-framework';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// import Screens from './src/navigation/Screens';
// import {Images, articles, argonTheme} from './src/constants';

// // cache app images
// const assetImages = [
//   Images.Onboarding,
//   Images.LogoOnboarding,
//   Images.Logo,
//   Images.Pro,
//   Images.ArgonLogo,
//   Images.iOSLogo,
//   Images.androidLogo,
// ];
// // cache product images
// articles.map(article => assetImages.push(article.image));

// function cacheImages(images) {
//   return images
//     .map(image => {
//       if (typeof image === 'string') {
//         return Image.prefetch(image);
//       } else if (image && image.uri) {
//         return Image.prefetch(image.uri);
//       }
//       return null;
//     })
//     .filter(Boolean);
// }

// const Stack = createStackNavigator();

// export default function App() {
//   const [appIsReady, setAppIsReady] = useState(false);

// useEffect(() => {
//   async function prepare() {
//     try {
//       await _loadResourcesAsync();
//     } catch (e) {
//       console.warn(e);
//     } finally {
//       setAppIsReady(true);
//     }
//   }
//   prepare();
// }, []);

// const _loadResourcesAsync = async () => {
//   return Promise.all([...cacheImages(assetImages)]);
// };

// const onLayoutRootView = async () => {
//   if (appIsReady) {
//     await SplashScreen.hide();
//   }
// };

// if (!appIsReady) {
//   return <Text>Loading...</Text>;
// }



//   return (
//     <NavigationContainer >
//       <GalioProvider theme={argonTheme}>
//         <Block flex>
//           {/* <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
//             <Stack.Screen name="Home" component={Screens} />
  
//           </Stack.Navigator> */}
//           <Screens/>
//         </Block>
//       </GalioProvider>
//     </NavigationContainer>
//   );
// }



import React, {useEffect} from 'react';
import {Image, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Block, GalioProvider} from 'galio-framework';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from './src/navigation/Screens';
import {Images, articles, argonTheme} from './src/constants';

// cache app images
const assetImages = [
  Images.Onboarding,
  Images.LogoOnboarding,
  Images.Logo,
  Images.Pro,
  Images.ArgonLogo,
  Images.iOSLogo,
  Images.androidLogo,
];

// cache product images
articles.map(article => assetImages.push(article.image));

function cacheImages(images) {
  return images
    .map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else if (image && image.uri) {
        return Image.prefetch(image.uri);
      }
      return null;
    })
    .filter(Boolean);
}

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    async function prepare() {
      try {
        await _loadResourcesAsync();
        await SplashScreen.hide();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const _loadResourcesAsync = async () => {
    return Promise.all([...cacheImages(assetImages)]);
  };

  return (
    <NavigationContainer>
      <GalioProvider theme={argonTheme}>
        <Block flex>
          <Screens />
        </Block>
      </GalioProvider>
    </NavigationContainer>
  );
}
