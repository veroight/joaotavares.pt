import styles from "./styles.css";
import { h } from "preact";

import Prism from "prismjs";
import "prismjs/themes/prism.css"; /* import prism themes */













const InnerHTMLHelper = ({ tagName, html }) =>
  h(tagName, { dangerouslySetInnerHTML: { __html: html } });

const Code = ({ language, className, ...rest }) => {
  return (
    <pre
      class={[`language-${language}`, rest.class, className]
        .filter(Boolean)
        .join(" ")}
    >
      <InnerHTMLHelper
        tagName="code"
        html={Prism.highlight(rest.code, Prism.languages.js, "js")}
      />
    </pre>
  );
};

function codeBlock(props) {
  return (
    <div>
      <Code class={styles.light} code={props.children} language={"js"} />
    </div>
  );
}

export default codeBlock;
