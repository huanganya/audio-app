import { Dashboard } from "@src/types/dashboard";
import { apiUserEndpoints } from "@src/constants/api-endpoints";
import { httpClient } from "./api-client";
import { GenericErrorWrapper } from "@src/errors/error-handlers";

class DashboardService {
  @GenericErrorWrapper()
  public async getDashboard({ id }: { id: string }): Promise<Dashboard> {
    const response = await httpClient.get(apiUserEndpoints.dashboard, { id });
    console.log("response", response);

    if (!response.data) {
      throw new Error("user info returned empty data");
    }
    return {
      ...response.data,
      tags: [
        { id: "abdc1", name: "Tag1" },
        { id: "abdc2", name: "Tag2" },
        { id: "abdc3", name: "Tag3" },
        { id: "abdc4", name: "Tag4" },
        { id: "abdc5", name: "Tag5" },
        { id: "abdc6", name: "Tag6" },
        { id: "abdc7", name: "Tag7" },
        { id: "abdc8", name: "Tag8" },
      ],
    };
  }
}

export default new DashboardService();
