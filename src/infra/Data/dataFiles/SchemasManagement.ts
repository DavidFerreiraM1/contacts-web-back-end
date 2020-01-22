/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';

const _dirSchemas = './src/infra/Data/dataFiles/files';
const _dir = (fileName: string): string => `${_dirSchemas}/${fileName}.txt`;

class SchemasManagement {
  private create (fileName: string, content: any): void {
    const dir = _dir(fileName);
    const contentString = JSON.stringify(content);
    try {
      fs.writeFileSync(dir, contentString);
    } catch (err) {
      throw new Error(err);
    }
  }

  private onlyRead (fileName: string): any | null {
    const dir = _dir(fileName);
    try {
      const loadedData = JSON.parse(fs.readFileSync(dir, 'utf8'));
      return loadedData;
    } catch (err) {
      return null;
    }
  }

  getData (fileName: string): any {
    const data = this.onlyRead(fileName);
    if (data === null) {
      this.create(fileName, []);
    } else {
      const response = this.onlyRead(fileName);
      return response;
    }
  }

  setData (fileName: string, dataContent: object): any {
    const result = this.onlyRead(fileName);
    if (result === null) {
      const newCollection = [];
      newCollection.push(dataContent);
      this.create(fileName, newCollection);
      return dataContent;
    } else {
      const loadedData = this.onlyRead(fileName);
      loadedData.push(dataContent);
      this.create(fileName, loadedData);
      return dataContent;
    }
  }

  updateData (fileName: string, collection: any): any {
    this.create(fileName, collection);
    return collection;
  }
}

export default SchemasManagement;
