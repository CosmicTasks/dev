import { useRef } from 'react'
import PropTypes from 'prop-types'

const MdEditor = ({style, markdown, setMarkdown, textAreaRef}) => {
  return (
    <div className={style.editor}>
      <textarea ref={textAreaRef} className={style.textarea} onChange={(e) => setMarkdown(e.target.value)} value={markdown}/>
    </div>
  )
}

MdEditor.propTypes = {
  style: PropTypes.object.isRequired,
  markdown: PropTypes.string.isRequired,
  setMarkdown: PropTypes.func.isRequired,
  textAreaRef: PropTypes.object.isRequired
}

export default MdEditor