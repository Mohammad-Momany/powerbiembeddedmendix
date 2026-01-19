/**
 * This file was generated from PowerBIEmbedded.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue, EditableValue } from "mendix";

export type ReportTypeEnum = "report" | "dashboard" | "tile" | "visual" | "qna" | "paginated_report";

export type F1OperatorEnum = "In" | "NotIn" | "Contains" | "StartsWith";

export type F2OperatorEnum = "In" | "NotIn" | "Contains" | "StartsWith";

export interface PowerBIEmbeddedContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    reportType: ReportTypeEnum;
    reportIdattr: EditableValue<string>;
    embedURLattr: EditableValue<string>;
    accessTokenattr: EditableValue<string>;
    f1Enable: boolean;
    f1Table: string;
    f1Column: string;
    f1Value?: DynamicValue<string>;
    f1Operator: F1OperatorEnum;
    f1Locked: boolean;
    f1Hidden: boolean;
    f2Enable: boolean;
    f2Table: string;
    f2Column: string;
    f2Value?: DynamicValue<string>;
    f2Operator: F2OperatorEnum;
    f2Locked: boolean;
    f2Hidden: boolean;
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
    f1Enable: boolean;
    f1Table: string;
    f1Column: string;
    f1Value: string;
    f1Operator: F1OperatorEnum;
    f1Locked: boolean;
    f1Hidden: boolean;
    f2Enable: boolean;
    f2Table: string;
    f2Column: string;
    f2Value: string;
    f2Operator: F2OperatorEnum;
    f2Locked: boolean;
    f2Hidden: boolean;
    filterPaneEnabled: boolean;
    navContentPaneEnabled: boolean;
}
