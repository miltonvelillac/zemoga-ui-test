export class StoragaManagment {
  static saveLocalStorage(dataName: string, dataToSave: any): void {
    localStorage.setItem(dataName, JSON.stringify(dataToSave));
  }

  static getLocalStorage(dataName: string): any {
    return JSON.parse(localStorage.getItem(dataName) || '');
  }

  static clearSessionStorageByName(dataName: string): void {
    sessionStorage.removeItem(dataName);
  }

  static clearSessionStorage(): void {
    sessionStorage.clear();
  }
}
