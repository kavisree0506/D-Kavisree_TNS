import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './Customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API = "http://localhost:8083/customer";  // Correct API base path

  constructor(private http: HttpClient) {}

  /**
   * Registers a new customer.
   * @param customerData - The customer data to register.
   */
  public registerCustomer(customerData: any) {
    return this.http.post(`${this.API}`, customerData);  // Register a new customer
  }

  /**
   * Fetches all customers from the backend.
   */
  public getCustomers() {
    return this.http.get<Customer[]>(`${this.API}`);  // Get list of all customers
  }

  /**
   * Deletes a customer by ID.
   * @param customerId - The ID of the customer to delete.
   */
  public deleteCustomer(customerId: number) {
    return this.http.delete(`${this.API}/${customerId}`);  // Delete a specific customer by ID
  }

  /**
   * Updates a customer's details.
   * @param customer - The updated customer data.
   */
  public updateCustomer(customer: any) {
    const customerId = customer.CustomerId || customer.customerId;  // Handle both lowercase and uppercase IDs
    if (!customerId) {
      throw new Error('Customer ID is required for updating customer data.');
    }
    return this.http.put(`${this.API}/${customerId}`, customer);  // Update customer details
  }
}
