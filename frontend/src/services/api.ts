import axios from "axios";
import { Workflow } from "../types/workflow";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const createApi = async ({
  workflow,
}: {
  workflow: Workflow;
}): Promise<{
  message: string;
  apiEndPoint: string;
  headers: any;
  body: any;
}> => {
  try {
    console.log("Sending workflow data:", JSON.stringify(workflow, null, 2));
    const response = await axios.post(
      `${API_BASE_URL}/createapi`,
      { workflow },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      ...response.data,
      headers: response.headers,
      body: workflow,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error(
        "Error response:",
        JSON.stringify(error.response.data, null, 2)
      );
    }
    console.error("Error creating API:", error);
    throw error;
  }
};
