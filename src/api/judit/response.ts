require("dotenv").config();

export const responseApi = {
    async submit(id:String){
    console.log(id)
      const baseurl = `https://requests.prod.judit.io/responses`;

      const headers = {
        "Content-Type": "application/json",
        "api-key": process.env.API_KEY,
      };
     
      const config = {
        method: "GET",
        headers: headers,
        request_id: id,
      };
     return this.send(baseurl,config)
    },
    async send(baseurl: string, config: object) {
        const response: any = [];
    
        try {
          await fetch(baseurl, config).then(async (e) => {
            const result = await e.json();
            response.push(result);
          });
        } catch (error) {
          throw new Error("unknown error: " + error);
        }
        return response;
      },
    
}