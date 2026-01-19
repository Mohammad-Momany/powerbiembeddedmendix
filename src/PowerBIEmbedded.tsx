import { ReactElement, createElement } from "react";
import { models } from "powerbi-client";
import { PowerBIEmbed } from "powerbi-client-react";
import { PowerBIEmbeddedContainerProps } from "../typings/PowerBIEmbeddedProps";

import "./ui/PowerBIEmbedded.css";

export function PowerBIEmbedded(props: PowerBIEmbeddedContainerProps): ReactElement {
    const { reportType, reportIdattr, embedURLattr, accessTokenattr, class: className } = props;
    const { filterPaneEnabled, navContentPaneEnabled } = props;
    const { f1Enable, f1Table, f1Column, f1Value, f1Operator, f1Locked, f1Hidden } = props;
    const { f2Enable, f2Table, f2Column, f2Value, f2Operator, f2Locked, f2Hidden } = props;

    const filters = [];

    if (f1Enable && f1Table && f1Column && f1Value) {
        filters.push(
            createBasicFilter(
                f1Table,
                f1Column,
                f1Value.status === "available" ? f1Value.value : "",
                f1Operator,
                f1Locked,
                f1Hidden
            )
        );
    }

    if (f2Enable && f2Table && f2Column && f2Value) {
        filters.push(
            createBasicFilter(
                f2Table,
                f2Column,
                f2Value.status === "available" ? f2Value.value : "",
                f2Operator,
                f2Locked,
                f2Hidden
            )
        );
    }
    return (
        <div className={className}>
            <PowerBIEmbed
                embedConfig={{
                    type: reportType, // Supported types: report, dashboard, tile, visual, qna and paginated report
                    id: reportIdattr.status === "available" ? reportIdattr.displayValue : "",
                    embedUrl: embedURLattr.status === "available" ? embedURLattr.displayValue : "",
                    accessToken: accessTokenattr.status === "available" ? accessTokenattr.displayValue : "",
                    tokenType: models.TokenType.Embed,
                    filters,
                    settings: {
                        filterPaneEnabled,
                        navContentPaneEnabled
                    }
                }}
            />
        </div>
    );
}

interface FilterTarget {
    table: string;
    column: string;
}

interface FilterDisplaySettings {
    isLockedInViewMode: boolean;
    isHiddenInViewMode: boolean;
}

interface BasicFilter {
    $schema: string;
    filterType: models.FilterType;
    target: FilterTarget;
    operator: string;
    values: string[];
    displaySettings: FilterDisplaySettings;
}

function createBasicFilter(
    table: string,
    column: string,
    value: string,
    operator: string,
    locked: boolean,
    hidden: boolean
): BasicFilter {
    return {
        $schema: "http://powerbi.com/product/schema#basic",
        filterType: models.FilterType.Basic,
        target: { table, column },
        operator: operator || "In", // Default operator
        values: [value],
        displaySettings: {
            isLockedInViewMode: locked ?? false,
            isHiddenInViewMode: hidden ?? false
        }
    };
}
