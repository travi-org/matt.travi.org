import React from "react"
import {node} from "prop-types"

import styles from "./index.css"

const Container = (props) => (
  <div className={ styles.container }>
    { props.children }
  </div>
)

Container.propTypes = {
  children: node,
}

export default Container
