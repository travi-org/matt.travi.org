import React from "react"
import {node} from "prop-types"

import styles from "./index.css"

const Content = (props) => (
  <div className={ styles.content }>
    { props.children }
  </div>
)

Content.propTypes = {
  children: node,
}

export default Content
