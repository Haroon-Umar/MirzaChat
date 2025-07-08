import { Platform, Dimensions, StatusBar } from 'react-native'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

// Platform check
export const isIOS = (): boolean => Platform.OS === 'ios'

// Safe area paddings
export const IOS_TOP_PADDING = isIOS() ? 44 : StatusBar.currentHeight || 0
export const IOS_BOTTOM_PADDING = isIOS() ? 34 : 0

// Default iOS header height
export const IOS_HEADER_HEIGHT = isIOS() ? 56 : 50

// Shadow for iOS
export const IOS_SHADOW = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
}

export default isIOS;
// Device type helpers
export const isSmallDevice = () => SCREEN_WIDTH < 360
export const isTablet = () => SCREEN_WIDTH >= 768

// Screen dimensions
export const SCREEN_WIDTH_CONST = SCREEN_WIDTH
export const SCREEN_HEIGHT_CONST = SCREEN_HEIGHT
