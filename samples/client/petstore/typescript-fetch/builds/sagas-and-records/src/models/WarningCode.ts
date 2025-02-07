/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Warning code returned when a potential problem is detected
 * @export
 */
export const WarningCode = {
    ReduceVolumeRangeToAvoidLargeSteps: 'Reduce_Volume_Range_To_Avoid_Large_Steps',
    RaiseAmplifierVolume: 'Raise_Amplifier_Volume',
    NoVolumeRangeSpecified: 'No_Volume_Range_Specified'
} as const;

export type WarningCode = typeof WarningCode[keyof typeof WarningCode];


export function WarningCodeFromJSON(json: any): WarningCode {
    return WarningCodeFromJSONTyped(json, false);
}

export function WarningCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WarningCode {
    return json as WarningCode;
}

export function WarningCodeToJSON(value?: WarningCode | null): any {
    return value as any;
}

