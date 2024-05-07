import React from 'react'
import PropTypes from 'prop-types'

const MdEditor = ({style, markdown, setMarkdown}) => {
  return (
    <div className={style.editor}>
      <textarea className={style.textarea} onChange={(e) => setMarkdown(e.target.value)} value={markdown}/>
    </div>
  )
}

MdEditor.propTypes = {
  style: PropTypes.object.isRequired,
  markdown: PropTypes.string.isRequired,
  setMarkdown: PropTypes.func.isRequired,
}

export default MdEditor