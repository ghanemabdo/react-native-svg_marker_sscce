/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Svg, {Circle, Defs, Line, Marker, Path, Rect} from "react-native-svg";

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
            style={[
              { alignItems: 'center', justifyContent: 'center', width: "100%", height: "100%" },
            ]}
        >
          <Svg width="400" height="200" viewBox="0 0 4000 2000">
            <Defs>
              <Marker
                  id="Triangle"
                  viewBox="0 0 10 10"
                  refX="0"
                  refY="5"
                  markerUnits="strokeWidth"
                  markerWidth="4"
                  markerHeight="3"
                  orient="auto"
              >
                <Path d="M 0 0 L 10 5 L 0 10 z" />
              </Marker>
            </Defs>
            <Rect
                x="10"
                y="10"
                width="3980"
                height="1980"
                fill="none"
                stroke="blue"
                strokeWidth="10"
            />
            <Path
                d="M 1000 750 L 2000 750 L 2500 1250"
                fill="none"
                stroke="black"
                strokeWidth="100"
                markerEnd="url(#Triangle)"
            />
          </Svg>
        </View>






      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
