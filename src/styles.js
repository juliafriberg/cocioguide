
import {actions, backgroundLight, hintColor} from './colors.js';

/* Buttons */

export const activeLabelStyle = {
  "fontWeight":600,
  "color":"white",
  "fontFamily":"Exo, sans-serif"
}

export const normalLabelStyle = {
  "fontWeight":300,
  "fontFamily":'Exo, sans-serif',
}

export const leftAlignedButtonStyle = {
  "textAlign": "left",
  "width": "100%",
  "whiteSpace": "normal",
}

export const actionButtonStyle = {
  "backgroundColor":actions
}

export const disabledActionButtonStyle = {
  "backgroundColor":backgroundLight,
}

export const iconButtonStyle = {
  "padding":"0px",
  "width":"26px",
  "height":"26px"
}

/* TextFields */

export const textFieldStyle = {
  "backgroundColor": backgroundLight,
  "paddingLeft": "5px",
}

export const hintStyle = {
  "color": hintColor,
  "fontWeight":"100",
}

export const inputStyle = {
  "fontWeight":"100"
}

export const discreteActionButtonStyle = {
  "backgroundColor": backgroundLight,
  "border": "1px solid " + actions 
}
