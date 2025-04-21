class Requestmaker {
    static get(url: string) {
        return fetch(`http://127.0.0.1:5000/api/${url}`);
    }

    static post(url: string, body: any) {
        return fetch(`http://127.0.0.1:5000/api/${url}`, {method: "POST", body})
    }

    
  static async fetchData<T>(url: string): Promise<T> {
    try {
      const response = await this.get(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data.data;
    } catch (error: any) {
      throw new Error(error.message || 'Something went wrong');
    }
  }
}

export default Requestmaker;