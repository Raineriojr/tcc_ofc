import { Request, Response } from "express";
import axios from 'axios';

const fetchStatusDevice = async () => {
  try {
    const responseData = await axios.post('http://10.1.41.197:8081/zeroconf/info', {
      data: {
        "deviceid": "",
        "data": {}
      }
    })
    return responseData;

  } catch (error) {
    return error
  }
}

export default {
  async getInfo(req: Request, res: Response) {
    //req.id
    const response = await fetchStatusDevice();

    if (response.status === 200) {
      return res.status(200).json(response.data);
    } else {
      return res.status(500).json(response.error);
    }
  },

  async activeDevice(req: any, res: any) {
    const { state } = req.body;

    try {
      const response = await axios.post('http://10.1.41.197:8081/zeroconf/switch', {
        "deviceid": "",
        "data": {
          "switch": state
        }
      })
      console.log(response)
      return res.status(200).json(response.data);

    } catch (error) {

      return res.status(500).json(error)
    }
  }
}