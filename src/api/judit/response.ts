require("dotenv").config();

export const responseApi = {
  async submit(id: String) {

    const response:any = []

    const baseurl = `https://requests.prod.judit.io/responses`;

    const headers:object = {
      "Content-Type": "application/json",
      "api-key": process.env.API_KEY,
    };

    const config:object = {
      method: "GET",
      headers: headers,
      request_id: id,
    };

    try {
      await fetch(baseurl, config).then(async (e) => {
        const result = await e.json();
        response.push(result);
      });
    } catch (error) {
        throw new Error("900: unknown error response: " + error);
    }
    
    return response;
  },
};
