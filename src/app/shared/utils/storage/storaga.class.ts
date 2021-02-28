export class StoragaManagment {
  static saveLocalStorage(dataName: string, dataToSave: any): void {
    localStorage.setItem(dataName, JSON.stringify(dataToSave));
  }

  static getLocalStorage(dataName: string): any {
    const data = localStorage.getItem(dataName);
    return data ? JSON.parse(data) : undefined;
  }

  static clearSessionStorageByName(dataName: string): void {
    sessionStorage.removeItem(dataName);
  }

  static clearSessionStorage(): void {
    sessionStorage.clear();
  }
}
