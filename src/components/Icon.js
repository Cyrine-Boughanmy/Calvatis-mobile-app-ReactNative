import React, {useEffect, useState} from 'react';
import {Text} from 'react-native'; // Import Text from 'react-native' instead of 'expo'
import createIconSetFromIcoMoon from 'react-native-vector-icons'; // Import createIconSetFromIcoMoon from 'react-native-vector-icons'
import {Icon} from 'galio-framework';

import argonConfig from '../assets/config/argon.json';

// Import the custom font directly if needed (assuming you have added the font to your project)
import ArgonExtra from '../assets/font/argon.ttf';

// Create the custom IconArgonExtra component using createIconSetFromIcoMoon
const IconArgonExtra = createIconSetFromIcoMoon(argonConfig, 'ArgonExtra');

function IconExtra(props) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      try {
        // You can load the custom font using the expo-font library if it's available in your project
        // await Font.loadAsync({ ArgonExtra: ArgonExtra });

        // For React Native, you can use the following code to load a custom font from assets:
        const isFontLoaded = await IconArgonExtra.loadFont();
        setFontLoaded(isFontLoaded);
      } catch (e) {
        console.warn(e);
      }
    }
    loadFont();
  }, []);

  if (props.name && props.family && fontLoaded) {
    if (props.family === 'ArgonExtra') {
      return (
        <IconArgonExtra name={props.name} family={props.family} {...props} />
      );
    }
    return <Icon name={props.name} family={props.family} {...props} />;
  }

  return <Text>Loading...</Text>; // Render a loading message while the font is being loaded
}

export default IconExtra;
