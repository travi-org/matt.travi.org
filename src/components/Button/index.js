import React from "react"
import {node, string, bool} from "prop-types"
import cx from "classnames"

import styles from "./index.css"

const Button = ({ className, secondary, light, big, ...otherProps }) => (
  <span
    role="button"
    { ...otherProps }
    className={ cx({
      [className]: className,
      [styles.button]: true,
      [styles.secondary]: secondary,
      [styles.light]: light,
      [styles.big]: big,
    }) }
  />
)

Button.propTypes = {
  children: node,
  className: string,
  secondary: bool,
  light: bool,
  big: bool,
}

Button.displayName = "Button"

export default Button
