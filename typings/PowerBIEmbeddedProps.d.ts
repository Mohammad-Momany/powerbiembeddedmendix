/**
 * This file was generated from PowerBIEmbedded.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export type ReportTypeEnum = "report" | "dashboard" | "tile" | "visual" | "qna" | "paginated_report";

export interface PowerBIEmbeddedContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    reportType: ReportTypeEnum;
    reportIdattr: EditableValue<string>;
    embedURLattr: EditableValue<string>;
    accessTokenattr: EditableValue<string>;
    filterPaneEnabled: boolean;
    navContentPaneEnabled: boolean;
}

export interface PowerBIEmbeddedPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    reportType: ReportTypeEnum;
    reportIdattr: string;
    embedURLattr: string;
    accessTokenattr: string;
    filterPaneEnabled: boolean;
    navContentPaneEnabled: boolean;
}
