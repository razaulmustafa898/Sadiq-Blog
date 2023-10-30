import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { DangerouslySetHtmlContent } from "@/components";
import { Typography } from "@mui/material";
import React from "react";

interface BlockquoteProps {
  quotedText: string;
  author: string;
}

const Blockquote: React.FC<BlockquoteProps> = ({ quotedText, author }) => {
  return (
    <div style={{margin:0, paddingTop:10, width:"100%"}}>
      <blockquote
        style={{
          fontSize: "1.4em",
          margin: "0px auto",
          fontFamily: "Roboto",
          fontStyle: "italic",
          color: "#555555",
          padding: "1.2em 30px 1.2em 75px",
          borderLeft: "8px solid #D7153A",
          lineHeight: 1.6,
          position: "relative",
          background: "#f8f8f8",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            fontFamily: "Space Grotesk",
            content: "\x201C",
            color: "#D7153A",
            fontSize: "4em",
            position: "absolute",
            left: "10px",
            top: "-10px",
          }}
        >
          “
        </span>
        {quotedText}
        <span
          style={{
            display: "block",
            color: "#333333",
            fontStyle: "normal",
            fontWeight: "bold",
            marginTop: "1em",
          }}
        >
          {author}
        </span>
      </blockquote>
      </div>
  );
};

export const RichTextRenderer = ({
  document,
  defaultColor = "var(--palette-textBlack)",
  wrapContent = true,
}: {
  document: any;
  defaultColor?: string;
  wrapContent?: boolean;
}) => {
  try {
    const renderBlockHeading = (textStyle: any) => {
      const blockHeadingFunction = (node: any, children: any) =>
        textStyle === "picturecaption" ? (
          <div style={{ textAlign: "center", width: "100%" }}>
            <Typography
              style={{
                paddingTop: 10,
              }}
              variant={textStyle}
              color={defaultColor}
            >
              {children}
              <br />
            </Typography>
          </div>
        ) : (
          <Typography
            style={{
              paddingTop: 10,
            }}
            variant={textStyle}
            color={defaultColor}
          >
            {children}
            <br />
          </Typography>
        );
      blockHeadingFunction.displayName = "RenderBlockHeading";

      return blockHeadingFunction;
    };

    const renderBlockParagraph = (node: any, children: any) => {
      // Check if marks array exists and has elements
      const containsCode = node.content[0]?.marks?.some(
        (mark: { type: string }) => mark.type === "code"
      );
      if (containsCode) {
        return children;
      }
      const containsAssetHyperlink = React.Children.toArray(children).some(
        (child) => React.isValidElement(child) && child?.type === "img"
      );
      const childContent = (
        <Typography variant="normal" color={defaultColor}>
          {children}
        </Typography>
      );
      return wrapContent ? (
        <p
          style={{
            margin: 0,
            width: "100%",
            paddingTop: containsAssetHyperlink ? 0 : 10,
          }}
        >
          {childContent}
          <br />
        </p>
      ) : (
        childContent
      );
    };

    const renderInlineHyperlink = (node: any, children: any) => (
      <a
        style={{ color: "var(--palette-textRed)" }}
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );

    const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: renderBlockParagraph,
        [BLOCKS.HEADING_1]: renderBlockHeading("h1"),
        [BLOCKS.HEADING_2]: renderBlockHeading("h2"),
        [BLOCKS.HEADING_3]: renderBlockHeading("h3"),
        [BLOCKS.HEADING_4]: renderBlockHeading("h4"),
        [BLOCKS.HEADING_5]: renderBlockHeading("picturecaption"),
        [BLOCKS.HEADING_6]: renderBlockHeading("h6"),
        [BLOCKS.UL_LIST]: (node: any, children: any) => (
          <ul style={{ listStyle: "outside", margin: 0 }}>{children}</ul>
        ),
        [BLOCKS.OL_LIST]: (node: any, children: any) => (
          <ol style={{ listStyle: "decimal", margin: 0 }}>{children}</ol>
        ),
        [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li>{children}</li>,
        [BLOCKS.QUOTE]: (node: any, children: any) => {
          if (
            node.content &&
            node.content[0] &&
            node.content[0].content &&
            node.content[0].content[0] &&
            node.content[0].content[0].value
          ) {
            const contentParts = node.content[0].content[0].value.split("—");
            const quotedText = contentParts[0] || "";
            const author = contentParts[1] || "";
            return (
              <Blockquote quotedText={quotedText} author={author}></Blockquote>
            );
          } else {
            return null; // Or return a default blockquote, or any other fallback UI
          }
        },

        [BLOCKS.HR]: () => <hr />,
        [BLOCKS.TABLE]: (node: any, children: any) => (
          <table>
            <tbody>{children}</tbody>
          </table>
        ),
        [INLINES.HYPERLINK]: renderInlineHyperlink,
        [INLINES.ASSET_HYPERLINK]: (node: any, children: any) => {
          const { title, description, file } = node.data.target.fields;
          const imageUrl = file.url;
          const imageAlt = description || title ;

          return (
            <img
              style={{
                paddingTop: 10,
                display: "block",
                margin: "0 auto",
                maxWidth: "100%",
                objectFit: "cover",
                borderRadius: "35px",
              }}
              src={imageUrl}
              alt={imageAlt}
            />
          );
        },
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
          const { title, description, file } = node.data.target.fields;
          const imageUrl = file.url;
          const imageAlt = title || description;

          return (
            <img
              style={{
                paddingTop: 10,
                maxWidth: "100%",
                objectFit: "cover",
                display: "block",
                margin: "0 auto",
                borderRadius: "35px",
              }}
              src={imageUrl}
              alt={imageAlt}
            />
          );
        },
        [INLINES.EMBEDDED_ENTRY]: (node: any) => {
          return (
            <RichTextRenderer
              document={node.data.target.fields.basicText1}
              defaultColor={node.data.target.fields.colorHex1}
              wrapContent={false}
            />
          );
        },
      },
      renderMark: {
        [MARKS.BOLD]: (text: any) => <strong>{text}</strong>,
        [MARKS.ITALIC]: (text: any) => <em>{text}</em>,
        [MARKS.UNDERLINE]: (text: any) => <u>{text}</u>,
        [MARKS.SUPERSCRIPT]: (text: any) => <sup>{text}</sup>,
        [MARKS.SUBSCRIPT]: (text: any) => <sub>{text}</sub>,
        [MARKS.CODE]: (text: any) => (
          <div style={{ paddingTop: 10, width: "100%" }}>
            {" "}
            <DangerouslySetHtmlContent html={text} />
          </div>
        ),
      },
    };
    const content = documentToReactComponents(document, options);
    const wrappedContent = wrapContent ? <div>{content}</div> : content;
    return wrappedContent;
  } catch (error) {
    // console.error("An error occurred while rendering rich text:", error);
    return (
      <div>
        <Typography variant="body1" color="error">
          An error occurred while rendering the content.
        </Typography>
      </div>
    );
  }
};