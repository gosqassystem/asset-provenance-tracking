// types.ts - Defines common application types

// Copyright (C) 2024 GOSQAS Team
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

export type BlobType = 'deviceInitializer' | 'deviceProvenance' | 'deviceAttachment' | 'deviceAttachmentName';

export interface ProvenanceRecord {
    blobType: BlobType,
    deviceName: string,
    description: string,
    tags: string[],
    children_key: string[],  // child_keys would be a better name.
    hasParent: boolean,      // This record belongs to a group.
    isReportingKey: boolean  // ...
}

export interface Provenance {
    record: ProvenanceRecord;
    attachments?: string[]; // TODO: sometimes this is a filename or a File object...
    deviceID?: string;
    timestamp?: number;     // Timestamps are added server-side.
}
