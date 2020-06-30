import {BehaviorSubject} from "rxjs";

export interface UploadStatusInterface {
  key: string;
  progress: BehaviorSubject<number>;
  uploadedFileName: BehaviorSubject<string>;
  reader: FileReader;
}
