import { useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CustomCodeBlock = ({ children, title, ...props }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <CodeBlock {...props}>{children}</CodeBlock>
      <div className="p-3 flex justify-between items-center bg-panda-oneDark rounded-lg text-white">
        {title && <div className="font-bold">{title}</div>}
        <CopyToClipboard text={children} onCopy={handleCopy}>
          <button className="bg-gray-950 text-white p-3 rounded-lg">
            {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CustomCodeBlock;
