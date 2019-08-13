import { TioSyncSegmentRequest } from './TioSyncSegment.request';

export class TioSyncRequest {
    source_language: string = '';
    target_languages: string[] = [];
    segments: TioSyncSegmentRequest[] = [];
    purge: boolean = false;
    readonly: boolean = false;
}
