/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { Animated, PanResponder} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class SwipeGesture extends Component {
  UNSAFE_componentWillMount = () => {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        let x = gestureState.dx;
        let y = gestureState.dy;
        if (Math.abs(x) > Math.abs(y)) {
          if (x >= 0) {
            this.props.onSwipePerformed('right');
          } else {
            this.props.onSwipePerformed('left');
          }
        }
      },
    });
  };

  render() {
    return (
      <Animated.View
        {...this.PanResponder.panHandlers}
        style={this.props.gestureStyle}>
        <ScrollView>{this.props.children}</ScrollView>
      </Animated.View>
    );
  }
}
