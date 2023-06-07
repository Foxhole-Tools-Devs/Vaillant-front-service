import { plainToClass, plainToInstance } from "class-transformer";


export abstract class AbstractService {

  protected baseUrl: string;

  protected constructor(){
    this.baseUrl = process.env.VAILLANT_BACK ?? "http://localhost:8080";
  }

  protected async getBack<T>(url: string, object: any, responseType: any): Promise<T> {
    console.log("TRY TO GET")
    console.log("URL : " + `${this.baseUrl}/${url}`);

    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return plainToInstance(responseType, data) as T;
  }

  protected async postBack<T>(url: string, object: any, responseType: any): Promise<T> {

    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return plainToInstance(responseType, data) as T;
  }

  protected async matchBack<T>(url: string, object: any, responseType: any): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: 'MATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return plainToInstance(responseType, data) as T;
  }

  protected async putBack<T>(url: string, object: any, responseType: any): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return plainToInstance(responseType, data) as T;
  }

  protected async deleteBack<T>(url: string, object: any, responseType: any): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return plainToInstance(responseType, data) as T;
  }
}