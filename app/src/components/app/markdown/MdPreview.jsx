import React from "react";
import PropTypes from "prop-types";
import { marked } from "marked";
import dompurify from "dompurify";
import "github-markdown-css/github-markdown.css";
import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.css";

const MdPreview = ({ style, markdown }) => {
  marked.setOptions({
    highlight: function (code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
    langPrefix: "hljs language-",
  });
  const parsed = dompurify.sanitize(marked.parse(markdown));
  return (
    <div className={style.preview}>
      <div dangerouslySetInnerHTML={{__html: parsed}} className={`markdown-body`} id={style.markdownBody}></div>
    </div>
  );
};

MdPreview.propTypes = {
  style: PropTypes.object.isRequired,
  markdown: PropTypes.string.isRequired,
};

export default MdPreview;
