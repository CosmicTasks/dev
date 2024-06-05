import { useState, useRef } from "react";
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
  UilFileDownload,
} from "@iconscout/react-unicons";
import MdEditor from "./MdEditor";
import MdPreview from "./MdPreview";

const Markdown = () => {

  const storedMarkdown = localStorage.getItem("MARKDOWN");
  const [markdown, setMarkdown] = useState(storedMarkdown ? storedMarkdown : "# Olá, mundo!");
  const textAreaRef = useRef(null);

  const callback = (markdown) => {
    setMarkdown(markdown);
    localStorage.setItem("MARKDOWN", markdown);
  }

  const insertTag = (start, end) => {
    const textArea = textAreaRef.current;
    const startPos = textArea.selectionStart;
    const endPos = textArea.selectionEnd;
    const text = textArea.value;

    const newText = text.substring(0, startPos) + start + text.substring(startPos, endPos) + end + text.substring(endPos);

    setMarkdown(newText);

    textArea.selectionStart = startPos + start.length;
    textArea.selectionEnd = endPos + start.length;
  }

  const bold = () => {
    insertTag("**", "**");
  }
  const italic = () => {
    insertTag("_", "_");
  }
  const size = () => {
    insertTag("# ", "");
  }
  const listUl = () => {
    insertTag("- ", "");
  }
  const listOl = () => {
    insertTag("1. ", "");
  }
  const checkSquare = () => {
    insertTag("- [ ] ", "");
  }
  const quoteBlock = () => {
    insertTag("\n> ", "");
  }
  const codeBlock = () => {
    insertTag('\n```\n', '\n```\n');
  }

  const gerarArquivo = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "arquivo.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  return (
    <div className={style.markdownPage}>
      <div className={style.topbar}>
        <div className={style.btnText}>
          <UilBold size="24" color="var(--c1)" onClick={bold} />
          <UilItalic size="24" color="var(--c1)" onClick={italic} />
          <UilTextSize size="24" color="var(--c1)" onClick={size} />
          <UilListUl size="24" color="var(--c1)" onClick={listUl} />
          <UilListOl size="24" color="var(--c1)" onClick={listOl} />
          <UilCheckSquare size="24" color="var(--c1)" onClick={checkSquare} />
          <UilCommentAlt size="24" color="var(--c1)" onClick={quoteBlock} />
          <UilArrow size="24" color="var(--c1)" onClick={codeBlock} />
          <UilFileDownload size="24" color="var(--c1)" onClick={gerarArquivo} />
        </div>
      </div>
      <MdEditor markdown={markdown} setMarkdown={callback} style={style} textAreaRef={textAreaRef} />
      <MdPreview markdown={markdown} style={style} />
    </div>
  );
};

export default Markdown;
