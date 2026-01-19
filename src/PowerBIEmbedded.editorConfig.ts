import { hidePropertiesIn } from "@mendix/pluggable-widgets-tools";

export function getProperties(values: any, defaultProperties: any, _target: any): any {
    if (values.f1Enable === false) {
        hidePropertiesIn(defaultProperties, values, [
            "f1Table",
            "f1Column",
            "f1Value",
            "f1Operator",
            "f1Locked",
            "f1Hidden"
        ]);
    }
    if (values.f2Enable === false) {
        hidePropertiesIn(defaultProperties, values, [
            "f2Table",
            "f2Column",
            "f2Value",
            "f2Operator",
            "f2Locked",
            "f2Hidden"
        ]);
    }
    return defaultProperties;
}
