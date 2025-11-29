import { ReactElement, createElement } from "react";

import { PowerBIEmbeddedPreviewProps } from "../typings/PowerBIEmbeddedProps";

export function preview({}: PowerBIEmbeddedPreviewProps): ReactElement {
    return <div />;
}

export function getPreviewCss(): string {
    return require("./ui/PowerBIEmbedded.css");
}
