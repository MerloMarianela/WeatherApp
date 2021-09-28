import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInpuSearch: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
    height: 50,
    marginHorizontal: 15,
    marginBottom: 15,
    marginVertical: 15,
    textAlign: 'center',
    borderRadius: 30
  },
  subTitle: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'normal',
    marginBottom: 5,
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 1.5,
      height: -1.5
    }
  },
  iconStyle: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: 15,
    bottom: 1
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    height: 120,
  },
  temperature: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    fontSize: 70,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 15,
    textShadowOffset: {
      width: 4,
      height: -4
    }
  },
  containerDetails:{
    marginTop: 20,
    flex:1
  },
  iconApp: {
    width: 15,
    height:15
  },
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
name: {
  color: 'white',
  fontSize: 30,
  fontWeight: 'bold',
  top: 20,
  left: 30
},
headerContainer: {
  height: 370,
  zIndex: 999,
  alignItems: 'center',
  flex: 1
},
image: {
  width: 150,
  height: 150,
},
subTitlePage: {
  fontSize: 20,
  color: 'white',
  fontWeight: 'normal',
  marginBottom: 10,
  textShadowColor: 'black',
  textShadowRadius: 5,
  textShadowOffset: {
    width: 1.5,
    height: -1.5
  }
},
wind:{
  width: 70,
  height: 70,
  marginHorizontal: 40,
  marginVertical: 40,
},
subTitleInformation: {
  fontSize: 15,
  color: 'white',
  fontWeight: 'normal',
  marginBottom: 5,
  textShadowColor: 'black',
  textShadowRadius: 5,
  textShadowOffset: {
    width: 1.5,
    height: -1.5
  },
  textAlign: 'center',
  marginHorizontal:40
},
descriptionRight: {
  flex:1, marginRight: 55,  marginLeft: 20
},
clear: {
  color: 'orange',
  fontSize:34,
  left: 80,
  },
});
