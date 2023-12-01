import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {stylesforWeb, stylesforMobile} from './styles/App';
import {createBox, createText} from '@shopify/restyle';

const Box = createBox();
const Text1 = createText();

export default function MainComponent() {
  const [selected, setSelected] = useState(-1);
  const [theam, setTheam] = useState('light');
  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get('window').width,
  );

  const toggleTheam = () => {
    theam === 'light' ? setTheam('dark') : setTheam('light');
  };
  let returnObj = screenWidth < 768 ? stylesforMobile : stylesforWeb;

  useEffect(() => {
    if (Platform.OS == 'web') {
      const updateScreenWidth = () => {
        setScreenWidth(Dimensions.get('window').width);
      };

      Dimensions.addEventListener('change', updateScreenWidth);
      return () => {
        Dimensions.removeEventListener('change', updateScreenWidth);
      };
    }
  }, []);

  const data = [
    {
      title: 'Along the hairline',
      src: require('./assets/images/image00.png'),
    },
    {
      title: 'At the crown',
      src: require('./assets/images/image11.png'),
    },
    {
      title: 'All over',
      src: require('./assets/images/image22.png'),
    },
  ];
  return (
    <Box
      padding="m"
      backgroundColor="mainBackground"
      flex={1}
      alignItems="center">
      <Box flex={2} alignItems="center" justifyContent="center">
        <Text1 variant="heading">Where are you noticing {'\n'}hair loss?</Text1>
      </Box>
      <Box
        flex={8}
        alignItems="center"
        flexDirection={{tablet: 'row', phone: 'column'}}>
        {data.map((item, index) => (
          <Pressable
            onHoverIn={() => {
              setSelected(index);
            }}
            onHoverOut={() => {
              setSelected(-1);
            }}
            key={index}
            onPress={() => {
              setSelected(index);
            }}
            style={[
              returnObj.card,

              {
                backgroundColor: theam === 'light' ? '#fff' : '#000',
                borderColor: index === selected ? '#B88060' : '#00000020',
              },
            ]}>
            <Box width={{tablet: '100%'}} height={{tablet: '70%'}}>
              <Image
                // style={{
                //   width: {tablet: '100%', mobile: 150},
                //   height: {tablet: '100%', mobile: 150},
                //   resizeMode: {tablet: 'cover', mobile: 'contain'},
                // }}
                style={returnObj.image}
                resizeMode="cover"
                source={item.src}
              />
            </Box>
            <Box
              width={{tablet: '100%', phone: screenWidth - 200}}
              height={{tablet: '30%'}}
              alignItems={{tablet: 'center', phone: 'left'}}
              marginLeft={{phone: 's'}}
              justifyContent="center">
              <Text1 color="black" variant="normalText">
                {item.title}
              </Text1>
            </Box>
          </Pressable>
        ))}
      </Box>

      <Box flex={2} justifyContent="flex-end">
        <Text1 variant="normalText">
          Already have an account ? <Text1 variant="goldenText">Sign in</Text1>
        </Text1>
      </Box>
    </Box>
  );
}
