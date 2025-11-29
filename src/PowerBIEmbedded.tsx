import { ReactElement, createElement } from "react";
import { models } from "powerbi-client";
import { PowerBIEmbed } from "powerbi-client-react";
import { PowerBIEmbeddedContainerProps } from "../typings/PowerBIEmbeddedProps";

import "./ui/PowerBIEmbedded.css";

export function PowerBIEmbedded({
    reportType,
    reportIdattr,
    embedURLattr,
    accessTokenattr
}: PowerBIEmbeddedContainerProps): ReactElement {
    return (
        <PowerBIEmbed
            embedConfig={{
                type: reportType, // Supported types: report, dashboard, tile, visual, qna and paginated report
                id: reportIdattr.status === "available" ? reportIdattr.displayValue : "",
                embedUrl: embedURLattr.status === "available" ? embedURLattr.displayValue : "",
                accessToken: accessTokenattr.status === "available" ? accessTokenattr.displayValue : "",
                tokenType: models.TokenType.Embed
            }}
        />
    );
}
