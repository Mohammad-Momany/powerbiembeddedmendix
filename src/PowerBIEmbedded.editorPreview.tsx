import { ReactElement, createElement } from "react";
// import { PowerBIEmbeddedPreviewProps } from "../typings/PowerBIEmbeddedProps";

export function preview(): ReactElement {
    return <div>Power BI Embedded</div>;
}

export function getPreviewCss(): string {
    return require("./ui/PowerBIEmbedded.css");
}
