import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Undo,
  Paragraph,
  Heading,
  Table,
  TableToolbar,
  AutoLink,
  Link,
  MediaEmbed,
  PasteFromOffice,
  TextTransformation,
  CloudServices,
  BlockQuote,
  FontColor,
  FontFamily,
  FontSize,
  Alignment,
  FontBackgroundColor,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  List,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

import axios from "axios";

class customeUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return new Promise((resolve, reject) => {
      const body = new FormData();

      this.loader.file.then((file) => {
        body.append("file", file);
        body.append("upload_preset", "xrz345");
        body.append("folder", "posts");
        body.append("api_key", "749825239566683");
        body.append("api_secret", "UEbJMVxBUZ_Ymcd9Ze-8j4IXTLE");

        const url =
          "https://api.cloudinary.com/v1_1/" + "dpza2cggf" + "/auto/upload";
        const config = {
          headers: { "content-type": "multipart/form-data" },
        };

        if (file.size / 1024 / 1024 > 9) {
          reject("File not larger than 9MB !");
          //   message.error("File not larger than 9MB !");
          console.log("File not larger than 9MB !");
        } else {
          axios
            .post(url, body, config)
            .then((response) => {
              resolve({ default: response.data.url });
            })
            .catch((error) => {
              console.log(error);
              reject(error.message);
            });
        }
      });
    });
  }
}

export const CKEditor5 = () => {
  const uploadPluginExtra = function (editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return new customeUploadAdapter(loader);
    };
  };
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: ["undo", "redo", "|", "bold", "italic"],
        },
        plugins: [
          Essentials,
          Bold,
          Italic,
          Paragraph,
          FontFamily,
          FontSize,
          FontColor,
          FontBackgroundColor,
          Alignment,
          Heading,
          Table,
          TableToolbar,
          Link,
          AutoLink,
          MediaEmbed,
          Image,
          ImageCaption,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          Indent,
          List,
          Undo,
          Mention,
          PasteFromOffice,
          TextTransformation,
          CloudServices,
          BlockQuote,
          uploadPluginExtra,
        ],
        toolbar: [
          "bold",
          "italic",
          "|",
          "fontColor",
          "fontBackgroundColor",
          "fontFamily",
          "fontSize",
          "|",
          "alignment",
          "bulletedList",
          "numberedList",
          "heading",
          "|",
          "link",
          "insertTable",
          "mediaEmbed",
          "imageUpload",
          "blockQuote",
          "undo",
          "redo",
          "|",
          "outdent",
          "indent",
        ],
        table: {
          contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
        },
        image: {
          toolbar: [
            "imageTextAlternative",
            "toggleImageCaption",
            "imageStyle:inline",
            "imageStyle:block",
            "imageStyle:side",
          ],
        },
        initialData: "<p>Hello from CKEditor 5 in React!</p>",
      }}
    />
  );
};
