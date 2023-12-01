import {StyleSheet} from 'react-native';

export const stylesforMobile = StyleSheet.create({
  card: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 5,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  image: {width: 150, height: 150, resizeMode: 'contain'},
});

export const stylesforWeb = StyleSheet.create({
  card: {
    marginEnd: 20,
    width: '15vw',
    height: '29vh',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {width: '100%', height: '100%', resizeMode: 'cover'},
});
