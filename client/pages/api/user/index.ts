import type { NextApiRequest, NextApiResponse } from "next";
import {
  IFailedResponse,
  ISuccessfulResponseData,
} from "../../../interfaces/response";
import {IUserRegisterProperties} from "../../../interfaces/user";
import Fetch from "../../../helpers/fetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISuccessfulResponseData | IFailedResponse>
) {
  let response: ISuccessfulResponseData | IFailedResponse = {};

  switch (req.method) {
    case "GET": // profile
      response = await getHandler();
      break;
    case "POST": // register
      response = await postHandler(JSON.parse(req.body));
      break;
  }

  res.status(response.httpCode).json(response);
}

const getHandler = async (): Promise<ISuccessfulResponseData | IFailedResponse> => {
  return await Fetch.get(`${process.env.API_BASE_URL}/user`);
};

const postHandler = async (
  data: IUserRegisterProperties
): Promise<ISuccessfulResponseData | IFailedResponse> => {
  return await Fetch.post(`${process.env.API_BASE_URL}/user`, data, {
    "Content-Type": "application/json",
  });
};
