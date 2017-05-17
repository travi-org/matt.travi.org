import React from "react"
import {oneOfType, number, string} from "prop-types"

import Page from "../Page"

import styles from "./index.css"

const PageError = ({ error, errorText }) => (
  <Page
    head={{
      // hero credit: https://www.flickr.com/photos/mypubliclands/16101654539/
      hero: "https://farm8.staticflickr.com/7559/16101654539_bee5151340_k.jpg",
    }}
  >
    <div className={ styles.container }>
      <div className={ styles.oops }>{ "😱 Oooops!" }</div>
      <div className={ styles.text }>
        <p className={ styles.title }>
          <strong>{ error }</strong>
          { " " }
          { errorText }
        </p>
        {
          error === 404 &&
          <div>
            { "It seems you found a broken link. " }
            { "Sorry about that. " }
            <br />
            { "Do not hesitate to report this page 😁." }
          </div>
        }
      </div>
    </div>
  </Page>
)

PageError.propTypes = {
  error: oneOfType([ number, string ]),
  errorText: string,
}

PageError.defaultProps = {
  error: 404,
  errorText: "Page Not Found",
}

export default PageError
