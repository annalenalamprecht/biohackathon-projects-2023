/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * An unambiguous reference to the media resource
 */
export type MediaIdentifier = string;
/**
 * An identifier for the dwc:Occurrence (as opposed to a particular digital record of the dwc:Occurrence). In the absence of a persistent global unique identifier, construct one from a combination of identifiers in the record that will most closely make the dwc:occurrenceID globally unique
 */
export type DocumentOccurrenceIdentifier = string;
/**
 * Information about rights held in and over the resource
 */
export type CopyrightLicense = string;
/**
 * A URI that uniquely identifies a service that provides a representation of the underlying resource
 */
export type MediaDataURL = string;
/**
 * URI for a reviewer
 */
export type Reviewed = string;

export interface Media {
  mediaID: MediaIdentifier;
  documentOccurrenceID: DocumentOccurrenceIdentifier;
  copyrightLicense?: CopyrightLicense;
  mediaDataURL: MediaDataURL;
  reviewed: Reviewed;
  [k: string]: unknown;
}
