import React from "react"
import {string} from "prop-types"
import { Link } from "phenomic"

import Button from "../../components/Button"

import styles from "./index.css"

const PagePreview = ({ __url, title, date, description }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div className={ styles.wrapper }>
      <Link to={ __url } className={ styles.title }>
        { title }
      </Link>
      <div className={ styles.meta }>
        {
          pageDate &&
            <time key={ pageDate.toISOString() }>
              { pageDate.toDateString() }
            </time>
        }
      </div>
      <div className={ styles.description }>
        { description }
        { " " }
      </div>
      <Link to={ __url } className={ styles.readMore }>
        <Button secondary>{ "Read More →" }</Button>
      </Link>
    </div>
  )
}

PagePreview.propTypes = {
  __url: string.isRequired,
  title: string.isRequired,
  date: string,
  description: string,
}

export default PagePreview
