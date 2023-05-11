import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080'; // your API endpoint here

  public async submitBugReport(data: any) {
    try {
      const response = await axios.post(`${this.baseUrl}/bug/bugreports`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  public async getAllBugs() {
    try {
      const response = await axios.get(`${this.baseUrl}/bug/bugreports`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async getBugReportById(id: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/bug/bugreports/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  // User Services

  public async getAllUsers() {
    try {
      const response = await axios.get(`${this.baseUrl}/user/getAllUsers`);
      return response.data.users;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async loginUser(data: any) {
    try {
      const response = await axios.post(`${this.baseUrl}/user/login`, data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async createUser(data: any) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/user/createUser`,
        data
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async updateUser(id: String, data: any) {
    try {
      const response = await axios.patch(
        `${this.baseUrl}/user/updateUser/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async deleteUser(id: string) {
    try {
      const response = await axios.delete(
        `${this.baseUrl}/user/deleteUser/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async getSingleUserData(id: string) {
    try {
      const response = await axios.get(
        `${this.baseUrl}/user/getSingleUserData/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
