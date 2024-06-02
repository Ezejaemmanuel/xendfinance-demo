// CommandSnippet.tsx
"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy, FaCheck } from "react-icons/fa";
import { BorderBeam } from "../magicui/border-beam";

interface CommandSnippetProps {
  command: string;
}

const CommandSnippet: React.FC<CommandSnippetProps> = ({ command }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="relative mx-auto flex max-w-xs items-center justify-between space-x-2 p-4 text-white md:max-w-md">
      <SyntaxHighlighter
        language="bash"
        style={darcula}
        className="flex-1 rounded-xl text-xs md:text-lg"
      >
        {command}
      </SyntaxHighlighter>
      <CopyToClipboard text={command} onCopy={handleCopy}>
        <button className="text-gray-400 hover:text-gray-200">
          {copied ? <FaCheck /> : <FaCopy />}
        </button>
      </CopyToClipboard>
      <BorderBeam />
    </div>
  );
};

export default CommandSnippet;
