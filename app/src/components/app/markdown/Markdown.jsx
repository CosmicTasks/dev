import { useState } from "react";
import style from "./Markdown.module.css";
import {
  UilBold,
  UilItalic,
  UilTextSize,
  UilListUl,
  UilListOl,
  UilCheckSquare,
  UilCommentAlt,
  UilArrow,
} from "@iconscout/react-unicons";
import MdEditor from "./MdEditor";
import MdPreview from "./MdPreview";

const Markdown = () => {

  const storedMarkdown = localStorage.getItem("MARKDOWN");
  const [markdown, setMarkdown] = useState(storedMarkdown ? storedMarkdown : "# Olá, mundo!");

  const callback = (markdown) => {
    setMarkdown(markdown);
    localStorage.setItem("MARKDOWN", markdown);
  }

  return (
    <div className={style.markdownPage}>
      <div className={style.topbar}>
        <div className={style.btnText}>
          <UilBold size="24" color="var(--c1)" />
          <UilItalic size="24" color="var(--c1)" />
          <UilTextSize size="24" color="var(--c1)" />
          <UilListUl size="24" color="var(--c1)" />
          <UilListOl size="24" color="var(--c1)" />
          <UilCheckSquare size="24" color="var(--c1)" />
          <UilCommentAlt size="24" color="var(--c1)" />
          <UilArrow size="24" color="var(--c1)" />
        </div>
      </div>
      <MdEditor markdown={markdown} setMarkdown={callback} style={style} />
      <MdPreview markdown={markdown} style={style} />
    </div>
  );
};

export default Markdown;
