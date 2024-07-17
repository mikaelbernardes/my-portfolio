/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import { CSSProperties } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy, dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import gfm from "remark-gfm";

import { useLanguageStore, useThemeStore } from "@/factory/STORE_FACTORY/impls";

interface SlugPageProps {
  post: {
    titleInEnglish: string;
    titleInPortuguese: string;
    content: string;
  };
}

function getLocalizedText(mdStringObject: string, language: string) {
  const parts = mdStringObject.split("separationForEnglish");
  if (language === "pt-BR") {
    return parts[0].trim();
  } else if (language === "en") {
    return parts[1].trim();
  }
  return mdStringObject.trim();
}

function SlugPage({ post }: SlugPageProps) {
  const { language } = useLanguageStore();
  const { theme } = useThemeStore();

  const content = getLocalizedText(post.content, language);

  const stylesForMarkdown = {
    p: ({ _, children }: any) => (
      <p className="sm:text-xs md:text-sm lg:text-lg txt-300">{children}</p>
    ),
    strong: ({ node, children }: any) => {
      return (
        <span className="text-Primary underline font-semibold decoration-solid xs:text-xs sm:text-xs md:text-sm lg:text-base xl:text-base">
          {children}
        </span>
      );
    },
    hr: ({ node, props }: any) => {
      return <hr className="w-full h-[1px] text-Line my-6" {...props} />;
    },
    h1: ({ node, children }: any) => {
      return (
        <h1
          className={`
					text-Primary font-bold sm:text-xl sm:mt-4 sm:mb-4 md:text-3xl 
					md:mt-5 md:mb-5 lg:text-6xl lg:my-6
				`}
        >
          {children}
        </h1>
      );
    },
    h2: ({ node, children }: any) => {
      return (
        <h2
          className={`
					font-semibold sm:text-lg sm:mt-5 sm:mb-3 md:text-2xl md:mt-6 md:mb-4 lg:text-3xl lg:my-6 txt-100 
				`}
        >
          {children}
        </h2>
      );
    },
    h3: ({ node, children }: any) => {
      return (
        <h3
          className={`
					text-T300 font-medium sm:text-base sm:mt-3 sm:mb-3 md:text-xl md:mt-4 md:mb-4 lg:text-xl lg:mt-4 lg:mb-4 txt-100
				`}
        >
          {children}
        </h3>
      );
    },
    code: ({ node, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "");

      const newStyles: CSSProperties = {
        marginTop: "10px",
        marginBottom: "10px",
      };

      if (!match) {
        return (
          <code className={className} style={newStyles} {...props}>
            {children}
          </code>
        );
      }

      const syntaxHighlighterProps = {
        language: match[1],
        PreTag: "div",
        style:
          theme === "dark"
            ? { ...dracula, background: "none" }
            : { ...coy, background: "none" },
        ...props,
      };

      return (
        <div style={newStyles}>
          <SyntaxHighlighter {...(syntaxHighlighterProps as any)}>
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </div>
      );
    },
    li: ({ node, children }: any) => {
      const isNested = node.depth > 0;

      return (
        <li className={isNested ? "nested-list-item" : "top-level-list-item"}>
          {children}
        </li>
      );
    },
    ul: ({ node, children }: any) => (
      <ul className="text-TXT300 list-inside list-disc ml-5">{children}</ul>
    ),
    ol: ({ node, children }: any) => (
      <ol className="txt-3 00 list-inside list-decimal ml-5">{children}</ol>
    ),
    blockquote: ({ node, children }: any) => (
      <blockquote className="text-TXT300 border-l-4 border-Primary pl-4 py-2 my-4">
        {children}
      </blockquote>
    ),
    a: ({ node, children, href }: any) => (
      <a className="text-Primary underline hover:no-underline" href={href}>
        {children}
      </a>
    ),
    img: ({ node, src, alt }: any) => (
      <Image className="mx-auto my-4" src={src} alt={alt} />
    ),
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <main className="-mt-5 sm:px-20 md:px-32 lg:px-72 py-10 xl:pb-12 bg-100 w-full h-fit">
        <ReactMarkdown
          remarkPlugins={[gfm]}
          rehypePlugins={[rehypeRaw, rehypeStringify]}
          components={stylesForMarkdown}
        >
          {content}
        </ReactMarkdown>
      </main>
    </div>
  );
}

export { SlugPage };
